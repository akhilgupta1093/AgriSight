import { AlertData, WeatherZone } from "./types";
import { closeAndNear } from "@/geo/geo";

export const getWeatherEvents = async (): Promise<AlertData> => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://api.weather.gov/alerts/active?area=CA`;
  const uri = `${proxyUrl}${targetUrl}`;
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Server (getWeatherEvents) error: ${response.status}`);
  }
  const data: AlertData = await response.json();
  return data;
};

export const getWeatherZone = async (
  targetUrl: string
): Promise<WeatherZone> => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const uri = `${proxyUrl}${targetUrl}`;
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Server (getWeatherForecast) error: ${response.status}`);
  }
  const data: WeatherZone = await response.json();
  return data;
};

export const getHeadline = async (
  coordinates: [number, number]
): Promise<string> => {
  const events: AlertData = await getWeatherEvents();
  console.log("events", events);
  // for each event, check if it's close to the field
  for (const event of events.features) {
    for (const zone of event.properties.affectedZones) {
      const zoneData = await getWeatherZone(zone);
      console.log("zoneData", zoneData);
      const [close, near] = closeAndNear(
        coordinates,
        zoneData.geometry.coordinates
      );
      console.log("close", close, "near", near);
      if (near) {
        return event.properties.headline;
      }
    }
  }
  return "";
};
