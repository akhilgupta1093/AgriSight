import {
  getFarmerData,
  getWeatherForecast,
  diseaseAI,
  irrigationAI,
} from "api/farmonaut";
import React, { useEffect, useState } from "react";
import { Map } from "./Map";
import {
  FIELD_ID_2,
  diseaseRecHardcoded,
  irrigationRecHardcoded,
} from "CONSTANTS";
import { FarmerData, WeatherForecastData } from "api/types";
import * as Section from "./Section";
import * as SubSection from "./SubSection";
import { IconSun } from "@tabler/icons-react";
import { CircularProgress } from "@mui/material";
import { WeatherForecast } from "./WeatherForecast";

export const App = () => {
  const [data, setData] = useState<FarmerData | null>(null);
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecastData | null>(null);
  const [diseaseAdvice, setDiseaseAdvice] = useState<string[]>([]);
  const [diseaseAILoading, setDiseaseAILoading] = useState<boolean>(true);
  const [irrigationAdvice, setIrrigationAdvice] = useState<string[]>([]);
  const [irrigationAILoading, setIrrigationAILoading] = useState<boolean>(true);
  const [fieldId, setFieldId] = useState<number>(FIELD_ID_2);
  const [fakeIsLoading, setFakeIsLoading] = useState<boolean>(true);

  // after 3 seconds, set fakeIsLoading to false
  useEffect(() => {
    const timer = setTimeout(() => {
      setFakeIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getFarmerData(fieldId).then((farmResp: FarmerData) => {
      console.log("farm resp", farmResp);
      setData(farmResp);
      // Get weather forecast.
      getWeatherForecast(fieldId).then((weatherResp: WeatherForecastData) => {
        console.log("weather resp", weatherResp);
        setWeatherForecast(weatherResp);
      });
    });
    if (diseaseAdvice.length == 0) {
      diseaseAI(fieldId).then((resp) => {
        setDiseaseAdvice(resp);
        setDiseaseAILoading(false);
      });
    }
    if (irrigationAdvice.length == 0) {
      irrigationAI(fieldId).then((resp) => {
        setIrrigationAdvice(resp);
        setIrrigationAILoading(false);
      });
    }
  }, []);

  return (
    <div className="mx-auto h-full w-full max-w-screen-2xl flex flex-col gap-2 p-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Amulet Farms</h1>
      </div>
      {data ? (
        <div className="flex flex-col gap-3">
          <Map lat={data.CenterLat} lng={data.CenterLong} zoom={18} />
          <div className="grid grid-cols-2 gap-2">
            <SubSection.Root>
              <SubSection.Header>Disease</SubSection.Header>
              <SubSection.Body>
                <AIResponse loading={diseaseAILoading} advice={diseaseAdvice} />
                {/* <AIResponse loading={fakeIsLoading} advice={diseaseRecHardcoded} /> */}
              </SubSection.Body>
            </SubSection.Root>
            <SubSection.Root>
              <SubSection.Header>Irrigation</SubSection.Header>
              <SubSection.Body>
                <AIResponse
                  loading={irrigationAILoading}
                  advice={irrigationAdvice}
                />
                {/* <AIResponse loading={fakeIsLoading} advice={irrigationRecHardcoded} /> */}
              </SubSection.Body>
            </SubSection.Root>
          </div>
          {weatherForecast != null && (
            <WeatherForecast weatherForecastData={weatherForecast} />
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const AIResponse = ({
  loading,
  advice,
}: {
  loading: boolean;
  advice: string[];
}) => {
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {advice.map((advice, index) => {
            return (
              <React.Fragment key={index}>
                {advice}
                <br />
                {index != advice.length - 1 ? <br /> : null}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
