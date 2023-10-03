import {HttpClient} from '@/httpClient/httpClient';
import {LocalStorage} from '@/storage/LocalStorage';
import {SignUpRequest} from '@/types/login';

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

  async checkNickNameAvaliability(nickName: string) {
    const response = await this.httpClient
      .fetch()
      .get(`/signup/nickname?nickName=${nickName}`);
    return response;
  }

  async signup(userInfo: SignUpRequest) {
    const response = await this.httpClient.fetch().post('/signup', userInfo);
    console.info('response: ', response);
    return response;
  }
}
