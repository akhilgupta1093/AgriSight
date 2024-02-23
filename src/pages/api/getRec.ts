import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";
import { rec } from "@prisma/client";
import { fetcher } from "@/api/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    lat,
    lng,
    date: dateTemp,
  }: { lat: number; lng: number; date: Date } = req.body;
  const date = new Date(dateTemp);
  console.log("inputs", lat, lng, date);
  console.log("prisma", prisma);
  // get record with the same rec, lat, lng, and same day of the created_at
  const recommendation = await prisma.rec.findFirst({
    where: {
      lat,
      lng,
      created_at: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(new Date(date).setDate(date.getDate() + 1)),
      },
    },
  });
  console.log("recommendation", recommendation);
  res.json(recommendation);
}

export const getRec = async (
  lat: number,
  lng: number,
  date: Date
): Promise<rec | null> => {
  try {
    const response = await fetcher("/api/getRec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat,
        lng,
        date,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result: rec = await response.json();
    return result;
  } catch (error) {
    console.log("Failed to get rec", error);
    return null;
  }
};
