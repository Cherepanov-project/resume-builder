import { createSlice } from '@reduxjs/toolkit';

const swiperSlice = createSlice({
  name: 'swiperSlice',
  initialState: {
    style: 'default',
    params: {
      effect: 'default',
      loop: false,
      navigation: true,
      pagination: true,
      spaceBetween: 10,
      slideHeight: 'auto',
      slidesPerView: 'auto',
    },
  },
  reducers: {
    changeStyle: (state, action) => {
      state.style = action.payload.styleName
      state.params = action.payload.params
    },
  },
});

export default swiperSlice.reducer;

export const { changeStyle } = swiperSlice.actions
