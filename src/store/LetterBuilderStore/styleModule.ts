import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Style = {
  [property: string]: string | number;
};

type Href = string;

type ElementState = {
  id: string;
  styles: Style;
  type: "button";
  href?: Href;
};

type HistoryState = {
  id: string;
  styles?: Style;
  href?: Href;
};

type SettingsPanelState = {
  shown: boolean;
  selectedElement?: string;
  elements: Record<string, ElementState>;
  history: HistoryState[];
};

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
      console.log(state.elements);
      state.elements[action.payload.id] = action.payload;
      state.history.push({ id: action.payload.id });
    });
    builder.addCase(updateElement, (state, action: PayloadAction<Style | Href>) => {
      const selectedId = state.selectedElement;
      if (!selectedId) return;

      const element = state.elements[selectedId];
      if (element) {
        if (element.href) {
          element.href = action.payload as Href;
          state.history.push({ id: selectedId, href: element.href });
        }
        if (element.styles) {
          element.styles = { ...element.styles, ...(action.payload as Style) };
          state.history.push({ id: selectedId, styles: element.styles });
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
