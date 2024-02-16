import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  numOfHobbies: { label: string }[];
};

const initialState: InitialState = {
  numOfHobbies: [{ label: '' }],
};

const hobbiesSlice = createSlice({
  name: 'hobbies',
  initialState,
  reducers: {
    addHobby: (state, action) => {
      // [state.numOfHobbies.push(1)];
      state.numOfHobbies = action.payload;
    },
  },
});

export default hobbiesSlice.reducer;
export const { addHobby } = hobbiesSlice.actions;
