import { getField } from "api/farmonaut";
import React, { useEffect, useState } from "react";
import { Map } from "./Map";
import { FieldData, OpenWeatherMapResponse } from "api/types";
import { RobotResponse } from "@/openai/utils";
import { DailyRec, Rec } from "./DailyRec";
import { format, set } from "date-fns";
import { getOpenWeatherMapData } from "api/openweathermap";
import { fieldNamePretty } from "api/utils";
import { robotRec } from "@/openai/openai";
import { CircularProgress } from "@mui/material";
import { handleRobotRec } from "@/pages/api/openai";
export const App = ({
  fieldId,
  fieldName,
}: {
  fieldId: number;
  fieldName: string;
}) => {
  const [data, setData] = useState<FieldData | null>(null);
  const [customRec, setCustomRec] = useState<RobotResponse | null>(null);
  const [weatherForecast, setWeatherForecast] =
    useState<OpenWeatherMapResponse | null>(null);
  const [fieldLoading, setFieldLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRobotRec = async () => {
    console.log("data", data);
    console.log("weatherForecast", weatherForecast);
    if (data == null || weatherForecast == null) {
      console.log("data or weatherForecast is null");
      return;
    }
    const coordinates: [number, number] = [
      (data.FieldMinLat + data.FieldMaxLat) / 2,
      (data.FieldMinLong + data.FieldMaxLong) / 2,
    ];
    setLoading(true);
    const rec = await handleRobotRec(
      coordinates[0].toString(),
      coordinates[1].toString(),
      weatherForecast
    );
    console.log("rec", rec);
    setCustomRec(rec);
    setLoading(false);
  };

  useEffect(() => {
    setFieldLoading(true);
    getField(fieldId).then((farmResp: FieldData) => {
      setData(farmResp);
      setFieldLoading(false);
      console.log("data", farmResp);
      setLoading(true);
      getOpenWeatherMapData(farmResp.CenterLat, farmResp.CenterLong).then(
        (weatherResp) => {
          console.log("open weather map resp", weatherResp);
          setWeatherForecast(weatherResp);
          getRobotRec();
          setLoading(false);
        }
      );
    });
  }, []);

  useEffect(() => {
    if (data != null && weatherForecast != null && customRec == null) {
      getRobotRec();
    }
  }, [data, weatherForecast]);

  const today = new Date();
  return (
    <div className="mx-auto h-full w-full max-w-screen-2xl flex flex-col gap-2 p-5">
      <div>
        <h1 className="text-4xl font-bold">{fieldNamePretty(fieldName)}</h1>
      </div>
      {data ? (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            {fieldLoading ? (
              <CircularProgress className="self-center" />
            ) : (
              <Map
                lat={(data.FieldMinLat + data.FieldMaxLat) / 2}
                lng={(data.FieldMinLong + data.FieldMaxLong) / 2}
                zoom={18}
              />
            )}
            {loading ? (
              <CircularProgress className="self-center justify-self-center" />
            ) : customRec != null && weatherForecast?.daily != null ? (
              <Rec
                customRec={customRec}
                day="date1"
                weather={weatherForecast.daily[0]}
                alerts={weatherForecast.alerts}
                dateString={`Today, ${format(today, "MMM d")}`}
                longRec={true}
                className="h-full"
              />
            ) : (
              <CircularProgress />
            )}
          </div>
          {customRec != null && weatherForecast != null && (
            <DailyRec customRec={customRec} weatherForecast={weatherForecast} />
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
