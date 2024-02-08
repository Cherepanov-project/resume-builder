import { createSlice } from '@reduxjs/toolkit';
import { ITemporaryCvDataSliceProps } from '../../assets/const';
import placeholderImage from '../../components/organisms/PersonalPhoto/placeholder.jpg';

const initialState: ITemporaryCvDataSliceProps = {
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
  photoData: { avatar: placeholderImage },
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
    addPersonalPhoto: (state, action) => {
      state.photoData = {
        ...state.photoData,
        ...action.payload,
      };
    },
  },
});

export default allPersonaInfoSlice.reducer;
export const { addAllPersonalInfo, addPersonalPhoto } = allPersonaInfoSlice.actions;
