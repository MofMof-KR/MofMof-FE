import {createSlice} from '@reduxjs/toolkit';

const portalSlice = createSlice({
  name: 'portal',
  initialState: false,
  reducers: {
    toggle: (state) => {
      console.log('state: ', state);
      return !state;
    },
  },
});

export default portalSlice;
export const {toggle} = portalSlice.actions;
