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
    deleteLetter(state, action: { payload: string; type: string }) {
      const id = action.payload;
      state.letters = state.letters.filter((item) => item.id !== id);
    },
    deleteAllLetters(state) {
      state.letters = [];
    },
    setLetter(state, action: PayloadAction<IGridContainers>) {
      const existingIndex = state.letters.findIndex((item) => item.id === action.payload.id);

      if (existingIndex !== -1) {
        state.letters[existingIndex] = action.payload;
      } else {
        const newData = {
          ...action.payload,
          id: crypto.randomUUID(),
        };
        state.letters.push(newData);
      }
    },
  },
});

export const { setLetter, deleteAllLetters, deleteLetter } = savedLettersSlice.actions;
export default savedLettersSlice.reducer;
