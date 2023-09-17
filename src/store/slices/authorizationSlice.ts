import {HttpClient} from '@/httpClient/httpClient';
import {AuthenticationServiceImpl} from '@/services/AuthenticationService';
import {LocalStorage} from '@/storage/LocalStorage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const httpClient = new HttpClient(
  `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}`,
);
const localStorage = new LocalStorage();
const authorizationService = new AuthenticationServiceImpl(
  httpClient,
  localStorage,
);
const authorizationSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login: (_, action: PayloadAction<string>) => {
      authorizationService.login(action.payload);
    },
  },
});

export default authorizationSlice;
export const {login} = authorizationSlice.actions;
