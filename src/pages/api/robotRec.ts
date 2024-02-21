import { NextApiRequest, NextApiResponse } from "next";
import { robotRec } from "@/openai/openai";
import { OpenWeatherMapResponse } from "@/api/types";
import { RobotResponse } from "@/openai/robotRec";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lng, weather } = req.body;
  const rec = await robotRec(lat, lng, weather);
  res.send(rec);
}

export const handleRobotRec = async (
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
