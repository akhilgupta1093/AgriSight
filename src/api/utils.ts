import { Point, FarmonautPoints } from "./types";

export const transformPoints = (points: Point[]): FarmonautPoints => {
  let farmonautPoints: FarmonautPoints = { a: points[0] };
  for (let i = 1; i < points.length && i <= 10; i++) {
    const key = `P_${i}` as keyof FarmonautPoints;
    farmonautPoints[key] = points[i];
  }
  return farmonautPoints;
};

export const fieldNamePretty = (name: string): string => {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
