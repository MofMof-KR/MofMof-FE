import {authorizationService} from '@/store/rootReducer';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {isAxiosError} from 'axios';

type initialStateType = {
  value: string;
  isLoading: boolean;
  error: Error | null | unknown;
};

const initialState: initialStateType = {
  value: '',
  isLoading: false,
  error: null,
};

export const checkNickName = createAsyncThunk<string, string>(
  'checkNickNameAvailabilitySlice/checkNickName',
  async (nickName, {rejectWithValue}) => {
    try {
      const response = await authorizationService.checkNickNameAvaliability(
        nickName,
      );
      if (response.status === 200) {
        return response.data?.message;
      } else if (response.status === 209) {
        return '닉네임 중복';
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

const checkNickNameAvailabilitySlice = createSlice({
  name: 'checkNickNameAvailabilitySlice',
  initialState,
  reducers: {
    initState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkNickName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkNickName.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
    builder.addCase(checkNickName.rejected, (state, action) => {
      state.value = '';
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default checkNickNameAvailabilitySlice;
export const {initState} = checkNickNameAvailabilitySlice.actions;
