import { NextApiRequest, NextApiResponse } from "next";
import { robotRec } from "@/openai/openai";
import { OpenWeatherMapResponse } from "@/api/types";
import { RobotResponse } from "@/openai/robotRec";
import { delay } from "@/api/utils";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lng, weather } = req.body;
  const rec = await robotRec(lat, lng, weather);
  res.send(rec);
}

export const handleRobotRecDepr = async (
  lat: string,
  lng: string,
  weather: OpenWeatherMapResponse
): Promise<RobotResponse> => {
  const response = await fetch("/api/robotRec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lat, lng, weather }),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const result: RobotResponse = await response.json();
  return result;
};

export const handleRobotRec = async (
  lat: string,
  lng: string,
  weather: OpenWeatherMapResponse,
  retries = 5,
  delayDuration = 1000
): Promise<RobotResponse> => {
  let attempt = 0;

  while (attempt < retries) {
    const response = await fetch("/api/robotRec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lat, lng, weather }),
    });

    if (response.status === 504) {
      console.log(
        `Received 504 Gateway Timeout, retrying in ${delayDuration}ms...`
      );
      await delay(delayDuration);
      attempt++;
      continue;
    }
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result: RobotResponse = await response.json();

    if (Object.keys(result).length !== 0) {
      return result;
    } else if (attempt < retries - 1) {
      console.log(`Received empty response, retrying in ${delayDuration}ms...`);
      await delay(delayDuration); //
    }

    attempt++;
  }

  // After all retries, throw an error or return a default value
  throw new Error("Failed to receive a valid response after maximum retries.");
};
