import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IGridContainers } from "../landingBuilder/layoutSlice";

interface SavedLettersState {
  letters: IGridContainers[];
}

const savedLettersSlice = createSlice({
  name: "savedLetters",
  initialState: {
    letters: [],
  } as SavedLettersState,
  reducers: {
    setLetter(state, action: PayloadAction<IGridContainers>) {
      const newData = {
        ...action.payload,
        id: crypto.randomUUID(), // Генерируем новый ID
      };
      state.letters.push(newData);
    },
  },
});

export const { setLetter } = savedLettersSlice.actions;
export default savedLettersSlice.reducer;
