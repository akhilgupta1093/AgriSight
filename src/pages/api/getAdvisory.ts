import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";
import { advisory } from "@prisma/client";
import { customJSONStringify } from "api/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { recommendationType, fieldId } = req.body;
  const advisory = await prisma.advisory.findFirst({
    where: {
      recommendationType,
      fieldId,
    },
  });
  res.send(customJSONStringify(advisory));
}

export const getAdvisory = async (
  recommendationType: string,
  fieldId: number
): Promise<advisory> => {
  try {
    const response = await fetch("/api/getAdvisory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recommendationType,
        fieldId,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result: advisory = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to get advisory: ${error}`);
  }
};
