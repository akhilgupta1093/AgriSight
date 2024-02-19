import { getRobotRec, RobotResponse } from "./utils";
import { OpenWeatherMapResponse } from "@/api/types";

export const robotRec = async (
  lat: string,
  lng: string,
  weather: OpenWeatherMapResponse
): Promise<RobotResponse> => {
  return getRobotRec(lat, lng, JSON.stringify(weather, null, 2));
};
