import OpenAI from "openai";

const prompt = `
Here is a picture of my grapevine crop. Does my crop have a disease? 
Here are the visual symptoms of the diseases I am concerned about:
- Powdery Mildew: White, powdery fungal spots on leaves and fruit.
- Downy Mildew: Yellow spots on leaves, white mold underside.
- Noble Rot: Grapes shrink, skin turns brown with a fuzzy coating.
- Phylloxera: Yellowing leaves, root galls, stunted grapevine growth.
- Bunch Rot: Brown, rotted grapes with a moldy appearance.
- Pierce's Disease: Leaf scorch, shriveled fruit, vine death.
- Flavescence Dorée: Yellowing leaves, stunted growth, shriveled grapes.

Respond with a crop disease name, or "no disease", with a percentage confidence level and a short justification for your diagnosis (< 100 words).
`;

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
        content: prompt,
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
