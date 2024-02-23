import { NextApiRequest, NextApiResponse } from "next";
import { robotDiseaseDetection } from "@/openai/openai";
import { fetcher } from "@/api/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = req.body;
  const rec = await robotDiseaseDetection(image);
  res.send(rec);
}

export const handleRobotDiseaseDetection = async (
  file: File
): Promise<string> => {
  const image = await convertFileToBase64(file);
  const response = await fetch("/api/robotDiseaseDetection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image }),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const result: string = await response.text();
  return result;
};

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // The result attribute contains the data as a base64 encoded string
      resolve(reader.result as string);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
