import { createSlice } from '@reduxjs/toolkit';

type ExperienceType = {
  'work-title': string;
  company: string;
  'experience-from-year': string;
  'experience-to-year': string;
  'company-info': string;
};

type InitialState = {
  numOfExperience: ExperienceType[];
};

const initialState: InitialState = {
  numOfExperience: [
    {
      'work-title': '',
      company: '',
      'experience-from-year': '',
      'experience-to-year': '',
      'company-info': '',
    },
  ],
};

const experienceSlice = createSlice({
  name: 'experince',
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.numOfExperience = action.payload;
    },
  },
});

export default experienceSlice.reducer;
export const { addExperience } = experienceSlice.actions;
