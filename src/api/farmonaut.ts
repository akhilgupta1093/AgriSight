import { UID } from "../CONSTANTS";
import { FieldData, WeatherForecastData, Point } from "./types";
import { transformPoints } from "./utils";
import { saveAdvisory } from "../pages/api/saveAdvisory";
import { getAdvisory } from "../pages/api/getAdvisory";

const CROP_CODE_GRAPE = 24;

export const createField = async (
  name: string,
  points: Point[]
): Promise<void> => {
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/submitField";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FieldName: name,
      PaymentType: 2,
      CropCode: CROP_CODE_GRAPE,
      Points: transformPoints(points),
      UID: UID,
    }),
  });
  if (!response.ok) {
    throw new Error(`Server (apiCreateField) error: ${response.status}`);
  }
  const data = await response.json();
  return data.fieldId;
};

export const deleteField = async (fieldID: string): Promise<string> => {
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/deleteField";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FieldID: fieldID,
      UID: UID,
    }),
  });
  if (!response.ok) {
    throw new Error(`Server (deleteField) error: ${response.status}`);
  }
  const data = await response.text();
  return data;
};

export const getFields = async (): Promise<any> => {
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/getAllFarmersData";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UID: UID,
    }),
  });
  if (!response.ok) {
    throw new Error(`Server (getFields) error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getField = async (fieldID: number): Promise<FieldData> => {
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/getFarmerData";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FieldID: fieldID,
      UID: UID,
    }),
  });
  if (!response.ok) {
    throw new Error(`Server (getFarmerData) error: ${response.status}`);
  }
  const data: FieldData = await response.json();
  return data;
};

export const getWeatherForecast = async (
  fieldID: number
): Promise<WeatherForecastData> => {
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/getForecastWeather";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FieldID: fieldID,
      UID: UID,
    }),
  });
  if (!response.ok) {
    throw new Error(`Server (getWeatherForecast) error: ${response.status}`);
  }
  const data: WeatherForecastData = await response.json();
  return data;
};

const askFarmonautAI = async (
  fieldID: number,
  recommendationType: string
): Promise<string[]> => {
  // See if we have one saved.
  const advisory = await getAdvisory(recommendationType, fieldID);
  if (advisory) {
    return aiResponseToArr(advisory.value);
  }

  // If not, ask the AI.
  const uri =
    "https://us-central1-farmbase-b2f7e.cloudfunctions.net/askJeevnAPI";
  const crop = "grape";
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      FieldID: fieldID,
      RecommendationType: recommendationType,
      Crop: crop,
      SowingMonth: new Date().getMonth() + 1,
      UID: UID,
    }),
  });
  if (!response.ok) {
    return ["No data available."];
  }
  const data: string = await response.text();
  console.log("ai response", data);
  await saveAdvisory(recommendationType, fieldID, data);
  return aiResponseToArr(data);
};

const aiResponseToArr = (response: string): string[] => {
  return response.split("\n");
};

export const diseaseAI = async (fieldID: number): Promise<string[]> => {
  return askFarmonautAI(fieldID, "pest & disease");
};

export const irrigationAI = async (fieldID: number): Promise<string[]> => {
  return askFarmonautAI(fieldID, "irrigation");
};
