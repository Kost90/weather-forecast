export interface FetchArgs extends Omit<RequestInit, 'body'> {
  path?: string;
  body?: Record<string, unknown>;
}

export interface LocationResponse {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
}

export type LocationCoordinates = Pick<LocationResponse, 'latitude' | 'longitude'>;

export interface ApiParams {
  latitude: number | number[];
  longitude: number | number[];
  current?: string;
  hourly?: string;
  daily: string | string[];
  timezone: string;
}

export interface IWeatherDataToView {
  condition: string;
  date: string;
  dayOfWeek: string;
  icon: string;
  maxTemperature: number;
  minTemperature: number;
  windSpeed: number;
}
