import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SwiperState {
  presetName: string;
}

const initialState: SwiperState = {
  presetName: 'default',
};

const swiperSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    changeStyle(state, action: PayloadAction<{ presetName: string }>) {
      state.presetName = action.payload.presetName;
    },
  },
});

export const { changeStyle } = swiperSlice.actions;

export default swiperSlice.reducer;
