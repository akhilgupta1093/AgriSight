import { NextApiRequest, NextApiResponse } from "next";
import { robotRec } from "@/openai/openai";
import { IndexHealthData, OpenWeatherMapResponse } from "@/api/types";
import { RobotResponse } from "@/openai/robotRec";
import { delay } from "@/api/utils";
import { goodRec } from "@/openai/robotRec";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    lat,
    lng,
    weather,
    healthData,
  }: {
    lat: number;
    lng: number;
    weather: OpenWeatherMapResponse;
    healthData: IndexHealthData;
  } = req.body;
  const rec = await robotRec(lat, lng, weather, healthData);
  res.send(rec);
}

export const handleRobotRec = async (
  lat: number,
  lng: number,
  weather: OpenWeatherMapResponse,
  healthData: IndexHealthData,
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
      body: JSON.stringify({ lat, lng, weather, healthData }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result: RobotResponse = await response.json();

    if (Object.keys(result).length !== 0 && goodRec(result)) {
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
