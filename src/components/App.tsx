import {
  getField,
  getWeatherForecast,
  diseaseAI,
  irrigationAI,
} from "api/farmonaut";
import React, { useEffect, useState } from "react";
import { Map } from "./Map";
import { FieldData, WeatherForecastData } from "api/types";
import * as Section from "./Section";
import * as SubSection from "./SubSection";
import { IconSun } from "@tabler/icons-react";
import { CircularProgress } from "@mui/material";
import { WeatherForecast } from "./WeatherForecast";
import { fieldNamePretty } from "api/utils";

export const App = ({
  fieldId,
  fieldName,
}: {
  fieldId: number;
  fieldName: string;
}) => {
  const [data, setData] = useState<FieldData | null>(null);
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecastData | null>(null);
  const [diseaseAdvice, setDiseaseAdvice] = useState<string[]>([]);
  const [diseaseAILoading, setDiseaseAILoading] = useState<boolean>(false);
  const [irrigationAdvice, setIrrigationAdvice] = useState<string[]>([]);
  const [irrigationAILoading, setIrrigationAILoading] =
    useState<boolean>(false);

  const getDiseaseAdvice = async () => {
    setDiseaseAILoading(true);
    const resp = await diseaseAI(fieldId);
    setDiseaseAdvice(resp);
    setDiseaseAILoading(false);
  };

  const getIrrigationAdvice = async () => {
    setIrrigationAILoading(true);
    const resp = await irrigationAI(fieldId);
    setIrrigationAdvice(resp);
    setIrrigationAILoading(false);
  };

  useEffect(() => {
    getField(fieldId).then((farmResp: FieldData) => {
      setData(farmResp);
      console.log("data", farmResp);
      getWeatherForecast(fieldId).then((weatherResp: WeatherForecastData) => {
        setWeatherForecast(weatherResp);
      });
    });
    if (diseaseAdvice.length == 0) {
      getDiseaseAdvice();
    }
    if (irrigationAdvice.length == 0) {
      getIrrigationAdvice();
    }
  }, []);

  return (
    <div className="mx-auto h-full w-full max-w-screen-2xl flex flex-col gap-2 p-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{fieldNamePretty(fieldName)}</h1>
      </div>
      {data ? (
        <div className="flex flex-col gap-3">
          <Map
            lat={(data.FieldMinLat + data.FieldMaxLat) / 2}
            lng={(data.FieldMinLong + data.FieldMaxLong) / 2}
            zoom={18}
          />
          <div className="grid grid-cols-2 gap-2">
            <SubSection.Root>
              <SubSection.Header>Disease</SubSection.Header>
              <SubSection.Body>
                <AIResponse loading={diseaseAILoading} advice={diseaseAdvice} />
              </SubSection.Body>
            </SubSection.Root>
            <SubSection.Root>
              <SubSection.Header>Irrigation</SubSection.Header>
              <SubSection.Body>
                <AIResponse
                  loading={irrigationAILoading}
                  advice={irrigationAdvice}
                />
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
