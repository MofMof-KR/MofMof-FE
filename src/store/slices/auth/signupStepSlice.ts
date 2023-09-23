import {createSlice} from '@reduxjs/toolkit';

const signUpStepSlice = createSlice({
  name: 'signUpStep',
  initialState: 1,
  reducers: {
    decreaseStep: (state) => {
      return state - 1;
    },
    increaseStep: (state) => {
      return state + 1;
    },
  },
});

export default signUpStepSlice;
export const {decreaseStep, increaseStep} = signUpStepSlice.actions;
