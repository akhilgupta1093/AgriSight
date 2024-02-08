import prisma from "db/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, fieldId } = req.body;
  const field = await prisma.field.create({
    data: {
      name,
      fieldId,
    },
  });
  res.json(field);
}

export const createField = async (name: string, fieldId: number) => {
  try {
    const response = await fetch("/api/createField", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fieldId,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Failed to create field", error);
  }
};
