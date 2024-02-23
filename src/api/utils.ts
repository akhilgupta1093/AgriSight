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

export const customJSONStringify = (data: any) => {
  return JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetcher = async (
  relative_url: string,
  options: RequestInit
): Promise<any> => {
  const url = process.env.VERCEL_URL;
  const protocol =
    process.env.VERCEL_URL && process.env.VERCEL_URL.includes("localhost")
      ? "http://"
      : "https://";
  console.log("getting from url", `${protocol}${url}${relative_url}`);
  return await fetch(`${protocol}${url}${relative_url}`, options);
};
