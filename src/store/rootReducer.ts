import {combineReducers} from '@reduxjs/toolkit';
import authorizationSlice from './slices/authorizationSlice';

const rootReducer = combineReducers({
  authorization: authorizationSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
