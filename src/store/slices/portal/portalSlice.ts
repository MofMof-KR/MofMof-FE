import {PortalChildren} from '@/constants/PortalChildren';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialValue = [false, PortalChildren.OFF];

const portalSlice = createSlice({
  name: 'portal',
  initialState: initialValue,
  reducers: {
    openPortal: (_, actions: PayloadAction<PortalChildren>) => {
      return [true, actions.payload];
    },
    closePortal: () => {
      return initialValue;
    },
  },
});

export default portalSlice;
export const {openPortal, closePortal} = portalSlice.actions;
