import { RobotResponse } from "@/openai/utils";
import * as SubSection from "./design-system/SubSection";
import {
  OpenWeatherMapDataPoint,
  OpenWeatherMapResponse,
  OpenWeatherMapAlert,
} from "@/api/types";
import { format } from "date-fns";
import {
  IconCloud,
  IconCloudRain,
  IconSun,
  IconSunWind,
  IconWind,
  IconTemperature,
  IconInfoCircle,
  IconSunLow,
  IconHourglass,
  IconPlant,
} from "@tabler/icons-react";
import { TablerIconsProps } from "@tabler/icons-react";
import { Tooltip, Chip } from "@mui/material";

const MAX_DAYS = 5;

export const DailyRec = ({
  customRec,
  weatherForecast,
}: {
  customRec: RobotResponse;
  weatherForecast: OpenWeatherMapResponse;
}) => {
  if (!weatherForecast.daily) {
    return <div></div>;
  }

  const today = new Date();
  let dates = [];
  for (let i = 0; i < weatherForecast.daily.length; i++) {
    let newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i
    );
    dates.push(newDate);
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {Object.keys(customRec).map((day, i) => {
          if (i == 0) return;
          if (i > MAX_DAYS - 1) return;
          return (
            <Rec
              key={i}
              customRec={customRec}
              day={day}
              weather={weatherForecast.daily[i]}
              dateString={format(dates[i], "EEEE, MMM d")}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Rec = ({
  customRec,
  day,
  weather,
  dateString,
  alerts,
  longRec = false,
  className,
}: {
  customRec: RobotResponse;
  day: string;
  weather: OpenWeatherMapDataPoint;
  dateString: string;
  alerts?: OpenWeatherMapAlert[];
  longRec?: boolean;
  className?: string;
}) => {
  if (!customRec || !customRec[day] || !weather) {
    return <div></div>;
  }
  const WeatherIcon = getWeatherIcon(weather);
  return (
    <div className={className}>
      <SubSection.Root className="h-full">
        <SubSection.Header>{dateString}</SubSection.Header>
        <SubSection.Body className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">{<WeatherIcon size={50} />}</h3>
            <div className="flex flex-col">
              <p className="flex gap-1 items-center">
                <IconTemperature size={15} /> {weather.temp.min}°F -{" "}
                {weather.temp.max}°F
              </p>
              {weather.rain != null && weather.rain <= 100 && (
                <p className="flex gap-1 items-center">
                  <IconCloudRain size={15} /> {weather.rain}%
                </p>
              )}
              {weather.clouds != null && weather.clouds <= 100 && (
                <p className="flex gap-1 items-center">
                  <IconCloud size={15} /> {weather.clouds}%
                </p>
              )}
              {weather.wind_speed != null && weather.wind_speed > 0 && (
                <p className="flex gap-1 items-center">
                  <IconWind size={15} /> {weather.wind_speed} mph
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-1">
            {alerts &&
              alerts.map((alert) => (
                <Tooltip
                  title={
                    <div className="whitespace-break-spaces">
                      {alert.description}
                    </div>
                  }
                  key={alert.event}
                >
                  <Chip
                    label={
                      <div className="flex gap-1 items-center">
                        {alert.event}
                        <IconInfoCircle size={12} />
                      </div>
                    }
                    color="warning"
                    size="small"
                  />
                </Tooltip>
              ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Irrigation</h3>
            <p>
              {longRec
                ? customRec[day].irrigation
                : customRec[day].irrigationShort}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Disease</h3>
            <p>
              {longRec ? customRec[day].disease : customRec[day].diseaseShort}
            </p>
          </div>
          {customRec[day].work != null && (
            <Chip
              label={
                <div className="font-bold">
                  {customRec[day].work.numTasks} tasks (
                  {customRec[day].work.numHours} hours)
                </div>
              }
              color="success"
              icon={<IconPlant size={20} />}
            />
          )}
        </SubSection.Body>
      </SubSection.Root>
    </div>
  );
};

const getWeatherIcon = (
  weather: OpenWeatherMapDataPoint
): ((props: TablerIconsProps) => JSX.Element) => {
  // Return icon based on weather.
  // If it's raining (>50% rain), return rain icon.
  // If it's cloudy (>50% cloud), return cloud icon.
  // If it's windy (>25 mph), return sun with wind icon.
  // If the max temperature is less than 50, return sun with low icon.
  // Otherwise, return sun icon.
  if (weather.rain != null && weather.rain > 50) {
    return IconCloudRain;
  } else if (weather.clouds != null && weather.clouds > 50) {
    return IconCloud;
  } else if (weather.wind_speed != null && weather.wind_speed > 25) {
    return IconSunWind;
  } else if (weather.temp.max < 50) {
    return IconSunLow;
  } else {
    return IconSun;
  }
};
