import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Href, Style, SettingsPanelState, ElementState } from "@/types/letterBuilder";
import { isHref, isStyle } from "@/types/letterBuilder";

const initialState: SettingsPanelState = {
  shown: false,
  selectedElement: undefined,
  elements: {},
  history: [],
};

export const addElement = createAction<ElementState>("settingsPanel/addElement");
export const updateElement = createAction<Style | Href>("settingsPanel/updateElement");
export const initPanel = createAction<string>("settingsPanel/initPanel");
export const closePanel = createAction("settingsPanel/closePanel");

const settingsPanelSlice = createSlice({
  name: "settingsPanel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addElement, (state, action: PayloadAction<ElementState>) => {
      state.elements[action.payload.id] = action.payload;
      state.history.push({ id: action.payload.id });
    });
    builder.addCase(updateElement, (state, action: PayloadAction<Style | Href>) => {
      const selectedId = state.selectedElement;
      if (!selectedId) return;

      const element = state.elements[selectedId];

      if (element) {
        if (isHref(action.payload)) {
          element.href = action.payload;
          state.history.push({ id: selectedId, href: element.href });
        }

        if (isStyle(action.payload) && element.styles) {
          element.styles = { ...element.styles, ...action.payload };
          state.history.push({ id: selectedId, styles: action.payload });
        }
      }
    });
    builder.addCase(initPanel, (state, action: PayloadAction<string>) => {
      if (!state.shown) {
        state.shown = true;
      }

      state.selectedElement = action.payload;
    });
    builder.addCase(closePanel, (state) => {
      if (state.shown) {
        state.shown = false;
      }

      state.selectedElement = undefined;
    });
  },
});

export default settingsPanelSlice.reducer;
