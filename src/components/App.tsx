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
import {
  IconAlertTriangle,
  IconExclamationMark,
  IconSun,
} from "@tabler/icons-react";
import { CircularProgress } from "@mui/material";
import { WeatherForecast } from "./WeatherForecast";
import { fieldNamePretty } from "api/utils";
import ReactMarkdown from "react-markdown";
import { getHeadline } from "../api/weather";

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
  const [eventHeadline, setEventHeadline] = useState<string>("");

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

  const getEventHeadline = async () => {
    if (data == null) {
      console.log("data is null");
      return;
    }
    const coordinates: [number, number] = [
      (data.FieldMinLat + data.FieldMaxLat) / 2,
      (data.FieldMinLong + data.FieldMaxLong) / 2,
    ];
    // const headline = await getHeadline(coordinates);
    // console.log("headline", headline);
    // setEventHeadline(headline);
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

  useEffect(() => {
    getEventHeadline();
  }, [data]);

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
          {eventHeadline != "" && (
            <Section.Root>
              <Section.Body className="bg-red-100 flex items-center gap-2">
                <IconAlertTriangle />
                <div className="flex items-center gap-1">
                  <div className="font-bold">Alert:</div>{" "}
                  <div>{eventHeadline}</div>
                </div>
              </Section.Body>
            </Section.Root>
          )}
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
          {advice.map((pieceOfAdvice, index) => (
            <React.Fragment key={index}>
              <ReactMarkdown>{pieceOfAdvice}</ReactMarkdown>
              {index !== advice.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
