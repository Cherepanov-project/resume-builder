import { createSlice } from '@reduxjs/toolkit';

type ExperienceType = {
  fullName: string;
  adress: string;
  bio: string;
  positionPers: string;
  phone: string;
  website: string;
  mail: string;
  description: string;
  position: string;
  fromYear: string;
  toYear: string;
  name: string;
  link: string;
};

type InitialState = {
  numOfPersonaInfo: ExperienceType[];
};

const initialState: InitialState = {
  numOfPersonaInfo: [
    {
      fullName: '',
      adress: '',
      bio: '',
      positionPers: '',
      phone: '',
      website: '',
      mail: '',
      description: '',
      position: '',
      fromYear: '',
      toYear: '',
      name: '',
      link: '',
    },
  ],
};

const allPersonaInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,

  reducers: {
    addAllPersonalInfo: (state, action) => {
      state.numOfPersonaInfo = action.payload;
    },
  },
});

export default allPersonaInfoSlice.reducer;
export const { addAllPersonalInfo } = allPersonaInfoSlice.actions;
