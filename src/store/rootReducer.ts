import {combineReducers} from '@reduxjs/toolkit';
import {HttpClient} from '@/httpClient/httpClient';
import {LocalStorage} from '@/storage/LocalStorage';
import {AuthenticationServiceImpl} from '@/services/AuthenticationService';
import signUpStepSlice from './slices/auth/signupStepSlice';
import loginNaverSlice from './slices/auth/loginNaverSlice';
import checkNickNameAvailabilitySlice from './slices/auth/checkNickNameAvailabilitySlice';
import portalSlice from './slices/portal/portalSlice';

const httpClient = new HttpClient(
  `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}`,
);
const storage = new LocalStorage();
const authorizationService = new AuthenticationServiceImpl(httpClient, storage);

const rootReducer = combineReducers({
  loginNaver: loginNaverSlice.reducer,
  checkNickNameAvailability: checkNickNameAvailabilitySlice.reducer,
  signUpStep: signUpStepSlice.reducer,
  portal: portalSlice.reducer,
});

export {authorizationService};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
