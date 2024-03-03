import { getRobotRec, RobotResponse } from "./robotRec";
import { IndexHealthData, OpenWeatherMapResponse } from "@/api/types";
import { getRobotDiseaseDetection } from "./robotDiseaseDetection";
import { formatDistanceToNow } from "date-fns";
import { convertYYYYMMDDToDate } from "@/api/utils";

export const robotRec = async (
  lat: number,
  lng: number,
  weather: OpenWeatherMapResponse,
  healthData: IndexHealthData
): Promise<RobotResponse> => {
  return getRobotRec(
    lat,
    lng,
    stringifyWeather(weather),
    stringifyHealthData(healthData)
  );
};

export const robotDiseaseDetection = async (
  imageBase64: string
): Promise<string> => {
  return getRobotDiseaseDetection(imageBase64);
};

const stringifyWeather = (weather: OpenWeatherMapResponse): string => {
  return JSON.stringify(weather.daily.slice(0, 5), null, 2);
};

const stringifyHealthData = (healthData: IndexHealthData): string => {
  const healthDataSubset = {
    ndvi: {
      data: transformIndex(healthData.ndvi),
      explanation:
        "Normalized Difference Vegetation Index: Essential for assessing overall plant health and vigor, indicating potential disease presence or stress conditions.",
    },
    ndwi: {
      data: transformIndex(healthData.ndwi),
      explanation:
        "Normalized Difference Water Index: Crucial for evaluating water content in vegetation, helping to optimize irrigation practices by identifying water stress.",
    },
    evi: {
      data: transformIndex(healthData.evi),
      explanation:
        "Enhanced Vegetation Index: Provides more sensitive information on plant health, particularly useful in areas with dense foliage or for detecting subtle changes in plant condition.",
    },
    ndmi: {
      data: transformIndex(healthData.ndmi),
      explanation:
        "Normalized Difference Moisture Index: Useful for monitoring moisture content in vegetation, aiding in both disease management (as many diseases are moisture-related) and irrigation efficiency.",
    },
    savi: {
      data: transformIndex(healthData.savi),
      explanation:
        "Soil Adjusted Vegetation Index: Designed to minimize the soil background influence, providing accurate vegetation health data for better disease detection and irrigation planning.",
    },
    vari: {
      data: transformIndex(healthData.vari),
      explanation:
        "Visible Atmospherically Resistant Index: Good for assessing vegetation cover and health using only visible light, helpful in detecting early signs of disease or stress without the need for near-infrared data.",
    },
  };
  return JSON.stringify(healthDataSubset, null, 2);
};

const transformIndex = (index: { [key: string]: string }): string => {
  // Each key is in the format "YYYYMMDD". We want to transform it to "X days ago".
  const transformedIndex: { [key: string]: string } = {};
  for (const key in index) {
    const date = convertYYYYMMDDToDate(key);
    transformedIndex[formatDistanceToNow(date, { addSuffix: true })] =
      index[key];
  }
  return JSON.stringify(transformedIndex, null, 2);
};
