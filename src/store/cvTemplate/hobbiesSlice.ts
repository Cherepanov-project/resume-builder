import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfHobbies: number[];
};

const initialState: InitialState = {
  numOfHobbies: [1, 1],
};

const hobbiesSlice = createSlice({
  name: 'hobbies',
  initialState,
  reducers: {
    addHobby: (state) => {
      [state.numOfHobbies.push(1)];
    },
  },
});

export default hobbiesSlice.reducer;
export const { addHobby } = hobbiesSlice.actions;
