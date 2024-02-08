import prisma from "db/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";
import type { field } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fields: field[] = await prisma.field.findMany();
  res.json(fields);
}

export const getFields = async (): Promise<field[]> => {
  try {
    const response = await fetch("/api/getFields");
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch fields", error);
    return [];
  }
};
