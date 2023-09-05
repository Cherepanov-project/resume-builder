import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfExperinces: number[];
};

const initialState: InitialState = {
  numOfExperinces: [1],
};

const experienceSlice = createSlice({
  name: 'experince',
  initialState,
  reducers: {
    addExperience: (state) => {
      [state.numOfExperinces.push(1)];
    },
  },
});

export default experienceSlice.reducer;
export const { addExperience } = experienceSlice.actions;
