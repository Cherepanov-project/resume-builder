import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfEducations: number[];
};

const initialState: InitialState = {
  numOfEducations: [1],
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation: (state) => {
      [state.numOfEducations.push(1)];
    },
  },
});

export default educationSlice.reducer;
export const { addEducation } = educationSlice.actions;
