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
- Leaf blight: Brown spots on leaves, defoliation.
- Black Rot: Dark, circular lesions on leaves and black, mummified grapes.
- Botrytis Cinerea (Gray Mold): Gray, fuzzy mold on grapes, leaves, and stems, leading to fruit rot.
- Esca (Black Measles): Tiger-stripe patterns on leaves, dark spots on grapes, and can lead to vine decline.
- Eutypa Dieback: Stunted shoot growth, canker formations on the wood, and dieback of the arms or trunk.
- Fanleaf Degeneration: Distorted leaf growth, yellow mosaic patterns on leaves, reduced fruit set, and vine vigor.
- Leafroll Virus: Reddening or yellowing of leaf margins, rolling of leaves, delayed ripening of grapes.
- Red Blotch: Red blotches on leaf blades, irregular ripening of grapes, reduced sugar accumulation.
- Ripe Rot: Soft, brown spots on ripening grapes, often with a concentric pattern, leading to fruit decay.
- Verticillium Wilt: Yellowing and wilting of leaves, often starting at the base of the plant and moving upward, leading to vine decline.

Respond with a crop disease name, or "no disease", with a percentage confidence level, and then a newline and a short justification for your diagnosis (< 100 words). 
If I do not get a response, I will assume that my crop has no disease and will face the consequences.
If you cannot assist, tell me why.
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
