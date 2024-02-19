import { NextApiRequest, NextApiResponse } from "next";
import { robotRec } from "@/openai/openai";
import { OpenWeatherMapResponse } from "@/api/types";
import { RobotResponse } from "@/openai/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lng, weather } = req.body;
  console.log("handle inputs", lat, lng, weather);
  const rec = await robotRec(lat, lng, weather);
  console.log("intermediary rec", rec);
  res.send(rec);
}

export const handleRobotRec = async (
  lat: string,
  lng: string,
  weather: OpenWeatherMapResponse
): Promise<RobotResponse> => {
  const response = await fetch("/api/openai", {
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
