import { createSlice } from '@reduxjs/toolkit';

// type ExperienceType = {
//   fullName: string;
//   adress: string;
//   bio: string;
//   positionPers: string;
//   phone: string;
//   website: string;
//   mail: string;
//   description: string;
//   position: string;
//   fromYear: string;
//   toYear: string;
//   name: string;
//   link: string;
//   jobTitle: string;

// };

// type InitialState = {
//   numOfPersonaInfo: ExperienceType[];
//   educationData : ExperienceType[];
//   experienceData : ExperienceType[];
//   socialData : ExperienceType[];
//   hobbyData : ExperienceType[];

// };

const initialState = {
  personalData: {
    fullName: '',
    address: '',
    bio: '',
    position: '',
    phone: '',
    website: '',
    email: '',
  },

  educationData: [
    {
      description: '',
      position: '',
      fromYear: '',
      toYear: '',
      name: '',
    },
  ],
  experienceData: [
    {
      position: '',
      fromYear: '',
      toYear: '',
      name: '',
      description: '',
    },
  ],
  socialData: [{ link: '', name: '' }],
  hobbyData: [{ hobby: '' }],
};

const allPersonaInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,

  reducers: {
    addAllPersonalInfo: (state, action) => {
      state.personalData = action.payload;
    },
  },
});

export default allPersonaInfoSlice.reducer;
export const { addAllPersonalInfo } = allPersonaInfoSlice.actions;
