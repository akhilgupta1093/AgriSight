import { OpenWeatherMapResponse } from "./types";

const OPENWEATHERMAP_API_KEY = "13278158c2790be2f93c2d9d7d696c5b";
export async function getOpenWeatherMapData(
  lat: number,
  lng: number
): Promise<OpenWeatherMapResponse> {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}&units=imperial`
  );
  return response.json();
}
