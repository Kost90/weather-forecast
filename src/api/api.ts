import { FetchArgs } from '../constants/types';

class API {
  private readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async fetch<ResponseType = unknown>({ path = '', method = 'GET', body, signal, ...rest }: FetchArgs) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      signal,
      body: JSON.stringify(body),
      ...rest,
    });
    return (await response.json()) as Awaited<ResponseType>;
  }
}

export { API };
