import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { recommendationType, fieldId, value } = req.body;
  const field = await prisma.advisory.create({
    data: {
      recommendationType,
      fieldId,
      value,
    },
  });
  res.json(field);
}

export const saveAdvisory = async (
  recommendationType: string,
  fieldId: number,
  value: string
): Promise<void> => {
  try {
    const response = await fetch("/api/saveAdvisory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recommendationType,
        fieldId,
        value,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Failed to save advisory", error);
  }
};
