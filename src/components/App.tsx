import { getField } from "api/farmonaut";
import React, { useCallback, useEffect, useState } from "react";
import { Map } from "./Map";
import { FieldData, OpenWeatherMapResponse } from "api/types";
import { RobotResponse } from "@/openai/robotRec";
import { DailyRec, Rec } from "./DailyRec";
import { format } from "date-fns";
import { getOpenWeatherMapData } from "api/openweathermap";
import { fieldNamePretty } from "api/utils";
import { CircularProgress } from "@mui/material";
import { handleRobotRec } from "@/pages/api/robotRec";

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

  const getRobotRec = useCallback(async () => {
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
      coordinates[0],
      coordinates[1],
      weatherForecast
    );
    setCustomRec(rec);
    setLoading(false);
  }, [data, weatherForecast]);

  useEffect(() => {
    setFieldLoading(true);
    getField(fieldId).then((farmResp: FieldData) => {
      setData(farmResp);
      setFieldLoading(false);
      setLoading(true);
      getOpenWeatherMapData(farmResp.CenterLat, farmResp.CenterLong).then(
        (weatherResp) => {
          setWeatherForecast(weatherResp);
          getRobotRec();
          setLoading(false);
        }
      );
    });
  }, [fieldId]);

  useEffect(() => {
    if (data != null && weatherForecast != null && customRec == null) {
      getRobotRec();
    }
  }, [data, weatherForecast, customRec, getRobotRec]);

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
