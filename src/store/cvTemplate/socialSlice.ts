import { createSlice } from '@reduxjs/toolkit';

type SocialType = {
  'social-name': string;
  'social-link': string;
};

type InitialState = {
  numOfSocials: SocialType[];
};

const initialState: InitialState = {
  numOfSocials: [
    {
      'social-name': '',
      'social-link': '',
    },
  ],
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    addSocial: (state, action) => {
      state.numOfSocials = action.payload;
    },
  },
});

export default socialSlice.reducer;
export const { addSocial } = socialSlice.actions;
