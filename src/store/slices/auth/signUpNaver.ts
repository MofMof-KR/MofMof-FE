import {authorizationService} from '@/store/rootReducer';
import {SignUpRequest, SignUpResponse} from '@/types/login';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {isAxiosError} from 'axios';

type initialStateType = {
  value: SignUpResponse | null;
  isLoading: boolean;
  error: Error | null | unknown;
};

const initialState: initialStateType = {
  value: null,
  isLoading: false,
  error: null,
};

export const signup = createAsyncThunk<SignUpResponse, SignUpRequest>(
  'signUpNaverSlice/signup',
  async (userInfo, {rejectWithValue}) => {
    try {
      const response = await authorizationService.signup(userInfo);
      if (response.status === 200) {
        return response.data?.responseValue;
      } else if (response.status === 209) {
        return '이미 회원';
      } else {
        return response.data?.message;
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error);
      }
    }
  },
);

const signUpNaverSlice = createSlice({
  name: 'signUpNaverSlice',
  initialState,
  reducers: {
    initState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.value = null;
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default signUpNaverSlice;
