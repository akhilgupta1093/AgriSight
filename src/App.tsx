import {getFarmerData, getWeatherForecast, diseaseAI, irrigationAI} from './api/farmonaut'
import { useEffect, useState } from 'react';
import { Map } from './components/Map';
import { FIELD_ID_2 } from './CONSTANTS';
import { FarmerData } from './api/types';
import * as Section from './components/Section';
import * as SubSection from './components/SubSection';
import { IconSun } from '@tabler/icons-react';
import { CircularProgress } from '@mui/material';

function App() {
  const [data, setData] = useState<FarmerData>();
  const [weatherForecast, setWeatherForecast] = useState<any>();
  const [diseaseAdvice, setDiseaseAdvice] = useState<any>();
  const [diseaseAILoading, setDiseaseAILoading] = useState<boolean>(true);
  const [irrigationAdvice, setIrrigationAdvice] = useState<any>();
  const [irrigationAILoading, setIrrigationAILoading] = useState<boolean>(true);
  const [fieldId, setFieldId] = useState<number>(FIELD_ID_2);

  useEffect(() => {
    getFarmerData(fieldId).then((farmResp) => {
      console.log(farmResp);
      setData(farmResp);
      // Get weather forecast.
      getWeatherForecast(farmResp.CenterLat, farmResp.CenterLong).then((weatherResp) => {
        console.log(weatherResp);
        setWeatherForecast(weatherResp);
      })
    })
    diseaseAI(fieldId).then((resp) => {
      setDiseaseAdvice(resp);
      setDiseaseAILoading(false);
    })
    irrigationAI(fieldId).then((resp) => {
      setIrrigationAdvice(resp);
      setIrrigationAILoading(false);
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="bg-red-500 text-white p-4">
        <h1 className="text-4xl font-bold">GrowSight</h1>
      </div>
      <div className="min-h-full w-full @container/page">
        <div className="mx-auto h-full w-full max-w-screen-2xl flex flex-col gap-2 p-5">
          <div>
            <h1 className="text-4xl font-bold">Amulet Farms</h1>
          </div>
          {data ? <div className="flex flex-col gap-2">
            <Map lat={data.CenterLat} lng={data.CenterLong} zoom={18} />
            <Section.Root className="w-10">
              <Section.Header
                className="bg-slate-200" 
              >
                Field Information
              </Section.Header>
              <Section.Body className="grid grid-cols-3 gap-2">
                <SubSection.Root>
                  <SubSection.Header>
                    Disease
                  </SubSection.Header>
                  <SubSection.Body>
                    {diseaseAILoading ? <CircularProgress /> : diseaseAdvice}
                  </SubSection.Body>
                </SubSection.Root>
                <SubSection.Root>
                  <SubSection.Header>
                    Irrigation
                  </SubSection.Header>
                  <SubSection.Body>
                    {irrigationAILoading ? <CircularProgress /> :  irrigationAdvice}
                  </SubSection.Body>
                </SubSection.Root>
                <SubSection.Root>
                  <SubSection.Header>
                    Pesticide application
                  </SubSection.Header>
                  <SubSection.Body>
                    {data.FieldID}
                  </SubSection.Body>
                </SubSection.Root>
              </Section.Body>
            </Section.Root>

            <div>
                {Object.entries(data.Weather).map(([date, weather_map]) => {
                  return (
                    <div>
                      <h2>{date}</h2>
                      <ul>
                        {Object.entries(weather_map).map(([key, value]) => {
                          return (
                            <li>{key}: {value}</li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
            </div>
          </div> : <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
