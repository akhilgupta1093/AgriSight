import { UID } from '../CONSTANTS'
import { FarmerData, WeatherForecastData } from './types'

export const getFarmerData = async (fieldID: number): Promise<FarmerData> => {
    const uri = 'https://us-central1-farmbase-b2f7e.cloudfunctions.net/getFarmerData'
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FieldID: fieldID,
            UID: UID,
        })
    })
    if (!response.ok) {
        throw new Error(`Server (getFarmerData) error: ${response.status}`);
    }
    const data: FarmerData = await response.json()
    return data
}

export const getWeatherForecast = async (fieldID: number): Promise<WeatherForecastData> => {
    const uri = 'https://us-central1-farmbase-b2f7e.cloudfunctions.net/getForecastWeather'
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FieldID: fieldID,
            UID: UID,
        })
    })
    if (!response.ok) {
        throw new Error(`Server (getWeatherForecast) error: ${response.status}`);
    }
    const data: WeatherForecastData = await response.json()
    return data
}

const askFarmonautAI = async (fieldID: number, recommendationType: string): Promise<string[]> => {
    const uri = 'https://us-central1-farmbase-b2f7e.cloudfunctions.net/askJeevnAPI'
    const crop = "grape"
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FieldID: fieldID,
            RecommendationType: recommendationType,
            Crop: crop,
            SowingMonth: new Date().getMonth() + 1,
            UID: UID,
        })
    })
    if (!response.ok) {
        throw new Error(`Server (aiFarmAdvisory) error: ${response.status}`);
    }
    const data: string = await response.text()
    console.log("ai response processed", aiResponseToArr(data))
    return aiResponseToArr(data)
}

const aiResponseToArr = (response: string): string[] => {
    return response.split('\n')
}

export const diseaseAI = async (fieldID: number): Promise<string[]> => {
    return askFarmonautAI(fieldID, 'pest & disease')
}

export const irrigationAI = async (fieldID: number): Promise<string[]> => {
    return askFarmonautAI(fieldID, 'irrigation')
}
