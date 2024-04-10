import { createSlice } from '@reduxjs/toolkit';

const swiperSlice = createSlice({
  name: 'swiperSlice',
  initialState: {
    presetName: 'default',
  },
  reducers: {
    changeStyle: (state, action) => {
      state.presetName = action.payload.presetName;
    },
  },
});

export default swiperSlice.reducer;

export const { changeStyle } = swiperSlice.actions;
