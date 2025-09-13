import { createSlice } from "@reduxjs/toolkit";

const containerElementSlice = createSlice({
  name: "container",
  initialState: {
    container: {},
  },
  reducers: {
    setContainer(state, action) {
      state.container = action.payload;
    },
  },
});

export const { setContainer } = containerElementSlice.actions;
export default containerElementSlice.reducer;
