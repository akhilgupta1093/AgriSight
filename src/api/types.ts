
export interface FarmerData {
    CenterLat: number;
    CenterLatLarge: number;
    CenterLong: number;
    CenterLongLarge: number;
    Coordinates: {
        P_1: {
            Latitude: string;
            Longitude: string;
        };
        P_2: {
            Latitude: string;
            Longitude: string;
        };
        P_3: {
            Latitude: string;
            Longitude: string;
        };
        P_4: {
            Latitude: string;
            Longitude: string;
        };
        P_5: {
            Latitude: string;
            Longitude: string;
        };
        P_6: {
            Latitude: string;
            Longitude: string;
        };
        a: {
            Latitude: string;
            Longitude: string;
        };
    };
    Email: string;
    Expiring: string;
    FieldAddress: string;
    FieldArea: number;
    FieldID: string;
    FieldLatLen: number;
    FieldLatLenLarge: number;
    FieldLongLen: number;
    FieldLongLenLarge: number;
    FieldMaxLat: number;
    FieldMaxLong: number;
    FieldMinLat: number;
    FieldMinLong: number;
    GenTif: string;
    SensedDays: {
        [key: string]: {
            cropRedZones: number[];
            irrigationRedZones: number[];
            isCloudy: boolean;
        };
    };
    Weather: {
        [key: string]: {
            cloud_cover: number;
            humidity: number;
            max_temp: number;
            min_temp: number;
            pressure: number;
            station: string;
            wind_deg: number;
            wind_speed: number;
        };
    };
    hUnits: number;
}

export interface WeatherForecastData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    daily: {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        summary: string;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        feels_like: {
            day: number;
            night: number;
            eve: number;
            morn: number;
        };
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: number;
        pop: number;
        rain: number;
        uvi: number;
    }[];
}