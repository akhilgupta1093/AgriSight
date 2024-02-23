import { getRobotRec, RobotResponse } from "./robotRec";
import { OpenWeatherMapResponse } from "@/api/types";
import { getRobotDiseaseDetection } from "./robotDiseaseDetection";

export const robotRec = async (
  lat: number,
  lng: number,
  weather: OpenWeatherMapResponse
): Promise<RobotResponse> => {
  return getRobotRec(lat, lng, stringifyWeather(weather));
};

export const robotDiseaseDetection = async (
  imageBase64: string
): Promise<string> => {
  return getRobotDiseaseDetection(imageBase64);
};

const stringifyWeather = (weather: OpenWeatherMapResponse): string => {
  return JSON.stringify(weather.daily.slice(0, 5), null, 2);
};
