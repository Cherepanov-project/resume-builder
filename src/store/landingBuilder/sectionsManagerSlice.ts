import { T_BlockElement } from "@/types/landingBuilder";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LayoutDateType = { [key: number]: T_BlockElement[] };

interface InitialState {
  layoutDate: LayoutDateType;
  curId: string;
  text: string;
  url: string;
}

const initialState: InitialState = {
  layoutDate: {
    1: [
      {
        name: "",
        type: "",
        source: "atoms",
        props: {
          text: "",
          key: "",
          wrapperStyle: { display: "block" },
          textStyle: { display: "block" },
          style: { backgroundColor: "", color: "", text: "", border: "" },
        },
        layout: { i: "11", x: 0, y: 0, w: 1, h: 1 },
      },
    ],
  },
  curId: "",
  text: "",
  url: "",
};

const sectionsManagerSlice = createSlice({
  name: "sectionsManager",
  initialState,
  reducers: {
    setLayoutDate(state, action) {
      state.layoutDate = action.payload;
    },
    editRowDate(state, action) {
      const { row, date } = action.payload;

      const [, curCol] = state.curId.split("");
      const newDate = date.map((col: T_BlockElement, index: number) => {
        if (+curCol - 1 === index) {
          return {
            ...col,
            layout: {
              ...col.layout,
              i: state.curId,
            },
          };
        }
        return col;
      });

      state.layoutDate = { ...state.layoutDate, [row]: newDate };
    },
    handleSettingsMenu(state, action: PayloadAction<{ type: string; value: string }>) {
      switch (action.payload.type) {
        case "UPDATE_ID": {
          if (action.payload.value !== state.curId) {
            return { ...state, curId: action.payload.value };
          }
          return state;
        }
        case "UPDATE_TEXT": {
          if (action.payload.value !== state.text) {
            return { ...state, text: action.payload.value };
          }
          return state;
        }
        case "UPDATE_URL": {
          if (action.payload.value !== state.url) {
            return { ...state, url: action.payload.value };
          }
          return state;
        }
        default:
          return state;
      }
    },
  },
});

export const { setLayoutDate, handleSettingsMenu, editRowDate } = sectionsManagerSlice.actions;

export default sectionsManagerSlice.reducer;
