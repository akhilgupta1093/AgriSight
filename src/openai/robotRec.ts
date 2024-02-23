import OpenAI from "openai";
import { saveRec } from "@/pages/api/saveRec";
import { getRec } from "@/pages/api/getRec";

export interface RobotResponse {
  [day: string]: {
    irrigation: string;
    irrigationShort: string;
    disease: string;
    diseaseShort: string;
    work: {
      numTasks: number;
      numHours: number;
      tasks: string[];
    };
  };
}

export const getRobotRec = async (
  lat: number,
  lng: number,
  weather: string
): Promise<RobotResponse> => {
  const existingRec = await getRec(lat, lng, new Date());
  console.log("Existing rec", existingRec);
  if (existingRec != null) {
    console.log("Using existing recommendation");
    const parsed: RobotResponse = JSON.parse(existingRec.rec);
    return parsed;
  }
  const schema = {
    type: "object",
    properties: {
      date1: {
        type: "object",
        properties: {
          irrigation: { type: "string", description: "Irrigation advice" },
          irrigationShort: {
            type: "string",
            description: "A very short version of the irrigation advice above",
          },
          disease: {
            type: "string",
            description: "Disease mitigation and prevention advice",
          },
          diseaseShort: {
            type: "string",
            description: "A very short version of the disease advice above",
          },
          work: {
            type: "object",
            properties: {
              numTasks: {
                type: "integer",
                description: "Number of tasks that need to be done",
              },
              numHours: {
                type: "integer",
                description:
                  "Number of hours it will take to complete the tasks",
              },
              tasks: {
                type: "array",
                items: {
                  type: "string",
                  description: "The tasks that need to be done",
                },
              },
            },
          },
        },
      },
      date2: {
        type: "object",
        properties: {
          irrigation: { type: "string", description: "Irrigation advice" },
          irrigationShort: {
            type: "string",
            description: "A very short version of the irrigation advice above",
          },
          disease: {
            type: "string",
            description: "Disease mitigation and prevention advice",
          },
          diseaseShort: {
            type: "string",
            description: "A very short version of the disease advice above",
          },
          work: {
            type: "object",
            properties: {
              numTasks: {
                type: "integer",
                description: "Number of tasks that need to be done",
              },
              numHours: {
                type: "integer",
                description:
                  "Number of hours it will take to complete the tasks",
              },
              tasks: {
                type: "array",
                items: {
                  type: "string",
                  description: "The tasks that need to be done",
                },
              },
            },
          },
        },
      },
      date3: {
        type: "object",
        properties: {
          irrigation: { type: "string", description: "Irrigation advice" },
          irrigationShort: {
            type: "string",
            description: "A very short version of the irrigation advice above",
          },
          disease: {
            type: "string",
            description: "Disease mitigation and prevention advice",
          },
          diseaseShort: {
            type: "string",
            description: "A very short version of the disease advice above",
          },
          work: {
            type: "object",
            properties: {
              numTasks: {
                type: "integer",
                description: "Number of tasks that need to be done",
              },
              numHours: {
                type: "integer",
                description:
                  "Number of hours it will take to complete the tasks",
              },
              tasks: {
                type: "array",
                items: {
                  type: "string",
                  description: "The tasks that need to be done",
                },
              },
            },
          },
        },
      },
      date4: {
        type: "object",
        properties: {
          irrigation: { type: "string", description: "Irrigation advice" },
          irrigationShort: {
            type: "string",
            description: "A very short version of the irrigation advice above",
          },
          disease: {
            type: "string",
            description: "Disease mitigation and prevention advice",
          },
          diseaseShort: {
            type: "string",
            description: "A very short version of the disease advice above",
          },
          work: {
            type: "object",
            properties: {
              numTasks: {
                type: "integer",
                description: "Number of tasks that need to be done",
              },
              numHours: {
                type: "integer",
                description:
                  "Number of hours it will take to complete the tasks",
              },
              tasks: {
                type: "array",
                items: {
                  type: "string",
                  description: "The tasks that need to be done",
                },
              },
            },
          },
        },
      },
      date5: {
        type: "object",
        properties: {
          irrigation: { type: "string", description: "Irrigation advice" },
          irrigationShort: {
            type: "string",
            description: "A very short version of the irrigation advice above",
          },
          disease: {
            type: "string",
            description: "Disease mitigation and prevention advice",
          },
          diseaseShort: {
            type: "string",
            description: "A very short version of the disease advice above",
          },
          work: {
            type: "object",
            properties: {
              numTasks: {
                type: "integer",
                description: "Number of tasks that need to be done",
              },
              numHours: {
                type: "integer",
                description:
                  "Number of hours it will take to complete the tasks",
              },
              tasks: {
                type: "array",
                items: {
                  type: "string",
                  description: "The tasks that need to be done",
                },
              },
            },
          },
        },
      },
    },
  };
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an agronomist/plant pathologist/horticulture specialist/ gis & remote sensing scientist.",
      },
      {
        role: "user",
        content: basePrompt(lat, lng, weather),
      },
    ],
    model: "gpt-4",
    functions: [{ name: "get_farm_recommendation", parameters: schema }],
    function_call: { name: "get_farm_recommendation" },
  });

  const resp = completion.choices[0].message.function_call?.arguments;
  if (!resp) {
    throw new Error("No response from the robot");
  }
  const parsed: RobotResponse = JSON.parse(resp);
  checkAndSave(parsed, lat, lng);
  return parsed;
};

const checkAndSave = async (resp: RobotResponse, lat: number, lng: number) => {
  // Check if all fields in the response are present. If so, save to db.
  const allThere = check(resp);
  const existingRec = await getRec(lat, lng, new Date());
  if (allThere && existingRec == null) {
    console.log("Got a good response. Saving to db.");
    const recStr = JSON.stringify(resp);
    saveRec(recStr, lat, lng);
  }
};

const check = (resp: RobotResponse): boolean => {
  let allThere = true;
  const days = ["date1", "date2", "date3", "date4", "date5"];
  for (const day of days) {
    const dayObj = resp[day];
    if (
      !dayObj.irrigation ||
      !dayObj.irrigationShort ||
      !dayObj.disease ||
      !dayObj.diseaseShort ||
      !dayObj.work.numTasks ||
      !dayObj.work.numHours ||
      !dayObj.work.tasks
    ) {
      allThere = false;
      break;
    }
  }
  return allThere;
};

const basePrompt = (lat: number, lng: number, weather: string): string => {
  const today = new Date();
  return `I need irrigation and pest & disease advice for the next five days for a grape farm located in Latitude: ${lat}, Longitude: ${lng} with the following details:
    - Weather Forecast: ${weather}
    Please provide recommendations on:
        1. When and how much to irrigate to optimize grape yield while conserving water resources.
        2. Pest & disease management advice for the next five days.
        3. What tasks need to be done and how many hours it will take to complete them for the average vineyard.
    Take into account the weather and location information provided. Today is ${today.toDateString()}. Provide details for the next 5 days.`;
};
