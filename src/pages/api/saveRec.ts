import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";

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
