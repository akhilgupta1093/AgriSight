import OpenAI from "openai";

export async function getRobotDiseaseDetection(
  imageBase64: string
): Promise<string> {
  const openai = new OpenAI();
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "system",
        content:
          "You are an agronomist/plant pathologist/horticulture specialist. You diagnose plant disease and provide advice on how to mitigate and prevent them.",
      },
      {
        role: "user",
        content:
          "Here is a picture of my grapevine crop. Does my crop have a disease? I am particularly concerned about powdery mildew, downy mildew, noble rot, phylloxera, bunch rot, pierce's disease, and flavesence doree.",
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: imageBase64,
            },
          },
        ],
      },
    ],
    max_tokens: 1000,
  });
  return response.choices[0].message.content || "";
}
