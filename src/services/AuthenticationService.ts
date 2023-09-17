import {HttpClient} from '@/httpClient/httpClient';
import {LocalStorage} from '@/storage/LocalStorage';

export class AuthenticationServiceImpl {
  httpClient;
  storage;
  constructor(httpClient: HttpClient, storage: LocalStorage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }
  async login(code: string) {
    const response = await this.httpClient
      .fetch({headers: {code}})
      .get('/login/naver');
    this.storage.save(response.data?.responseValue);
    return response;
  }
}
