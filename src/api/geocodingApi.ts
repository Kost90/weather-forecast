import { apiUrl } from '../constants/app-constants';
import { LocationResponse } from '../constants/types';
import { API } from './api';

type FetchArg = {
  signal: AbortSignal;
  query: string;
};

interface LocationResponseData{
  results:LocationResponse[];
  generationtime_ms:number;
}

class GeocodingAPI extends API {
  async getLocationData({ signal, query }: FetchArg) {
    return await this.fetch<LocationResponseData>({ path: `${query}`, signal: signal });
  }
}

export default new GeocodingAPI(apiUrl);
