import { createSlice } from '@reduxjs/toolkit';

type PersonalDataType = {
  fullName: string;
  address: string;
  bio: string;
  position: string;
  phone: string;
  website: string;
  email: string;
};

type EducationDataType = {
  description: string;
  position: string;
  fromYear: string;
  toYear: string;
  name: string;
};

type ExperienceDataType = {
  position: string;
  fromYear: string;
  toYear: string;
  name: string;
  description: string;
};

type SocialDataType = {
  link: string;
  name: string;
};

type HobbyDataType = {
  hobby: string;
};

interface InitialState {
  personalData: PersonalDataType;
  educationData: EducationDataType[];
  experienceData: ExperienceDataType[];
  socialData: SocialDataType[];
  hobbyData: HobbyDataType[];
}

const initialState: InitialState = {
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
      const { personalData, educationData, experienceData, socialData, hobbyData } = action.payload;
      state.personalData = { ...state.personalData, ...personalData };
      state.educationData = [...educationData];
      state.experienceData = [...experienceData];
      state.socialData = [...socialData];
      state.hobbyData = [...hobbyData];
    },
  },
});

export default allPersonaInfoSlice.reducer;
export const { addAllPersonalInfo } = allPersonaInfoSlice.actions;
