import { getRobotRec, RobotResponse } from "./robotRec";
import { OpenWeatherMapResponse } from "@/api/types";
import { getRobotDiseaseDetection } from "./robotDiseaseDetection";

export const robotRec = async (
  lat: string,
  lng: string,
  weather: OpenWeatherMapResponse
): Promise<RobotResponse> => {
  return getRobotRec(lat, lng, JSON.stringify(weather, null, 2));
};

export const robotDiseaseDetection = async (
  imageBase64: string
): Promise<string> => {
  return getRobotDiseaseDetection(imageBase64);
};
