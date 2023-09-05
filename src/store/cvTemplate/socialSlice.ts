import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfSocials: number[];
};

const initialState: InitialState = {
  numOfSocials: [1],
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    addSocial: (state) => {
      [state.numOfSocials.push(1)];
    },
  },
});

export default socialSlice.reducer;
export const { addSocial } = socialSlice.actions;
