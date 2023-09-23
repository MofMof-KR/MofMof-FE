import axios, {AxiosInstance} from 'axios';

export class HttpClient {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  fetch(options = {headers: {}}): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
    });
  }
}
