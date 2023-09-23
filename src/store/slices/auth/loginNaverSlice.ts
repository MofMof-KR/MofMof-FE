import {authorizationService} from '@/store/rootReducer';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginNaver = createAsyncThunk(
  'loginNaverSlice/loginNaver',
  async (code: string) => {
    const response = await authorizationService.login(code);
    return response.data;
  },
);

const loginNaverSlice = createSlice({
  name: 'loginNaverSlice',
  initialState: {
    value: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginNaver.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginNaver.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loginNaver.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default loginNaverSlice;
