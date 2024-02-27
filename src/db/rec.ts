import { rec } from "@prisma/client";
import prisma from "db/prismaClient";

export const getRec = async (
  lat: number,
  lng: number,
  date: Date
): Promise<rec | null> => {
  const lowerBound = new Date(date.setHours(0, 0, 0, 0));
  const upperBound = new Date(new Date(date).setDate(date.getDate() + 1));
  return prisma.rec.findFirst({
    where: {
      lat,
      lng,
      created_at: {
        gte: lowerBound,
        lt: upperBound,
      },
    },
  });
};

export const saveRec = async (
  rec: string,
  lat: number,
  lng: number
): Promise<rec> => {
  return prisma.rec.create({
    data: {
      rec,
      lat,
      lng,
    },
  });
};
