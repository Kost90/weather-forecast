import { geocodingApiUrl, weatherApiUrl } from '../constants/app-constants';
import { LocationResponse, ApiParams } from '../constants/types';
import { API } from './api';
import { fetchWeatherApi } from 'openmeteo';

type FetchArg = {
  signal: AbortSignal;
  query: string;
};

interface LocationResponseData {
  results: LocationResponse[];
  generationtime_ms: number;
}

class GeocodingAPI extends API {
  private readonly weatherApiUrl: string;

  constructor(geocodingApiUrl: string, weatherApiUrl: string) {
    super(geocodingApiUrl);
    this.weatherApiUrl = weatherApiUrl;
  }

  async getLocationData({ signal, query }: FetchArg) {
    return await this.fetch<LocationResponseData>({ path: `${query}`, signal: signal });
  }

  async fetchWeatherData(params: ApiParams) {
    const response = await fetchWeatherApi(this.weatherApiUrl, params);
    return response;
  }
}

export default new GeocodingAPI(geocodingApiUrl, weatherApiUrl);
