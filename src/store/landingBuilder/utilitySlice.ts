import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDraggable: false,
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setDraggable(state, action) {
      state.isDraggable = action.payload;
      console.log(state.isDraggable);
    },
  },
});

export default utilitySlice.reducer;
export const { setDraggable } = utilitySlice.actions;
