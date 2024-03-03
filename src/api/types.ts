export interface AllFieldData {
  [key: string]: FieldData;
}

export interface FieldData {
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
  Health: IndexHealthData;
}

export interface IndexHealthData {
  avi: {
    [key: string]: string;
  };
  bsi: {
    [key: string]: string;
  };
  evi: {
    [key: string]: string;
  };
  lai: {
    [key: string]: string;
  };
  ndmi: {
    [key: string]: string;
  };
  ndre: {
    [key: string]: string;
  };
  ndvi: {
    [key: string]: string;
  };
  ndwi: {
    [key: string]: string;
  };
  rsm: {
    [key: string]: string;
  };
  rvi: {
    [key: string]: string;
  };
  savi: {
    [key: string]: string;
  };
  si: {
    [key: string]: string;
  };
  soc: {
    [key: string]: string;
  };
  vari: {
    [key: string]: string;
  };
  vssi: {
    [key: string]: string;
  };
}

export interface WeatherForecastData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: WeatherForecastDataPoint[];
}

export interface WeatherForecastDataPoint {
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
}

export interface Point {
  Latitude: number;
  Longitude: number;
}

export interface FarmonautPoints {
  a: Point;
  P_1?: Point;
  P_2?: Point;
  P_3?: Point;
  P_4?: Point;
  P_5?: Point;
  P_6?: Point;
  P_7?: Point;
  P_8?: Point;
  P_9?: Point;
  P_10?: Point;
  P_11?: Point;
  P_12?: Point;
  P_13?: Point;
  P_14?: Point;
  P_15?: Point;
  P_16?: Point;
  P_17?: Point;
  P_18?: Point;
  P_19?: Point;
  P_20?: Point;
}

export interface AlertData {
  type: string;
  features: Alert[];
}

interface Alert {
  id: string;
  type: string;
  geometry: any;
  properties: AlertProperties;
}

interface AlertProperties {
  "@id": string;
  "@type": string;
  id: string;
  areaDesc: string;
  geocode: Geocode;
  affectedZones: string[];
  references: Reference[];
  sent: string;
  effective: string;
  onset: string;
  expires: string;
  ends: string;
  status: string;
  messageType: string;
  category: string;
  severity: string;
  certainty: string;
  urgency: string;
  event: string;
  sender: string;
  senderName: string;
  headline: string;
  description: string;
  instruction: string;
  response: string;
  parameters: Parameters;
}

interface Geocode {
  SAME: string[];
  UGC: string[];
}

interface Reference {
  "@id": string;
  identifier: string;
  sender: string;
  sent: string;
}

interface Parameters {
  AWIPSidentifier: string[];
  WMOidentifier: string[];
  NWSheadline: string[];
  BLOCKCHANNEL: string[];
  VTEC: string[];
  eventEndingTime: string[];
  expiredReferences?: string[];
}

export interface WeatherZone {
  id: string;
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    "@id": string;
    "@type": string;
    id: string;
    type: string;
    name: string;
    effectiveDate: string;
    expirationDate: string;
    state: string;
    cwa: string[];
    forecastOffices: string[];
    timeZone: string[];
    observationStations: string[];
    radarStation: string | null;
  };
}

export interface OpenWeatherMapResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  minutely: {
    dt: number;
    precipitation: number;
  }[];
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    pop: number;
  }[];
  daily: OpenWeatherMapDataPoint[];
  alerts?: OpenWeatherMapAlert[];
}

export interface OpenWeatherMapDataPoint {
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
}

export interface OpenWeatherMapAlert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}
