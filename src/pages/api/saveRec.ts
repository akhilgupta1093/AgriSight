import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";
import { fetcher } from "@/api/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rec, lat, lng }: { rec: string; lat: number; lng: number } = req.body;
  const recommendation = await prisma.rec.create({
    data: {
      rec,
      lat,
      lng,
    },
  });
  res.json(recommendation);
}

export const saveRec = async (
  rec: string,
  lat: number,
  lng: number
): Promise<void> => {
  try {
    const response = await fetch("/api/saveRec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rec,
        lat,
        lng,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log("recommendation saved", result);
  } catch (error) {
    console.error("Failed to save rec", error);
  }
};
