import { createSlice } from '@reduxjs/toolkit';

// type EducationType = {
//   study: string;
//   degree: string;
//   school: string;
//   'education-from-year': string;
//   'education-to-year': string;
// };

type InitialState = {
  indexOfEducations: number[];
  countOfEducations: number;
};

// const initialState: InitialState = {
//   numOfEducations: [
//     {
//       study: '',
//       degree: '',
//       school: '',
//       'education-from-year': '',
//       'education-to-year': '',
//     },
//   ],
// };
const initialState: InitialState = {
  indexOfEducations: [],
  countOfEducations: 0,
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addIndexEducation: (state, action) => {
      state.indexOfEducations = action.payload;
    },
    addCountEducation: (state, action) => {
      state.countOfEducations = action.payload;
    },
  },
});

export default educationSlice.reducer;
export const { addIndexEducation, addCountEducation } = educationSlice.actions;
