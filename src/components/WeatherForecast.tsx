import { WeatherForecastData } from "@/api/types";

export const WeatherForecast = ({
  weatherForecastData,
}: {
  weatherForecastData: WeatherForecastData;
}) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  let dates: Date[] = [];
  if (weatherForecastData.daily == null) {
    return <div></div>;
  }
  for (let i = 0; i <= weatherForecastData.daily.length; i++) {
    let newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    dates.push(newDate);
  }
  return (
    <div className="flex flex-col mt-5 bg-white p-3">
      <div className="text-2xl font-semibold ml-4">Weather Forecast</div>
      <div className="flex flex-nowrap overflow-x-auto justify-start items-center">
        {weatherForecastData.daily.map((day, index) => (
          <div
            key={index}
            className="m-4 p-4 bg-green-50 rounded-lg shadow-md h-[250px] min-w-[260px] flex flex-col gap-3"
          >
            <div className="text-lg font-semibold">
              {index == 0 ? "Today" : days[dates[index].getDay()]},{" "}
              {dates[index].getMonth() + 1}/{dates[index].getDate()}
            </div>
            <div className="flex flex-col gap-1">
              {true && (
                <Value
                  label={"Temp"}
                  value={`${kelvinToFarhenheit(
                    day.temp.min
                  )}°F - ${kelvinToFarhenheit(day.temp.max)}°F`}
                />
              )}
              {day.humidity != null && day.humidity <= 100 && (
                <Value label={"Humidity"} value={`${day.humidity}%`} />
              )}
              <Value label="Wind speed" value={`${day.wind_speed} m/s`} />
              <Value label="UV index" value={`${day.uvi}`} />
              {day.clouds != null && day.clouds <= 100 && (
                <Value label="Cloudy" value={`${day.clouds}%`} />
              )}
              {day.rain != null && day.rain <= 1 && (
                <Value label="Rain" value={`${day.rain * 100}%`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const kelvinToFarhenheit = (kelvin: number) => {
  const f = ((kelvin - 273.15) * 9) / 5 + 32;
  return Math.round(f * 10) / 10;
};

const Value = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-sm font-semibold">{label}</div>
      <div>{value}</div>
    </div>
  );
};
