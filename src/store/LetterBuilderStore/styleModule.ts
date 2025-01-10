import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  Href,
  Style,
  SettingsPanelState,
  ElementState,
  HistoryState,
} from "@/types/letterBuilder";
import { isHref, isStyle } from "@/types/letterBuilder";

const initialState: SettingsPanelState = {
  shown: false,
  selectedElement: undefined,
  elements: {},
  history: [],
  currentHistoryIndex: -1,
};

export const addElement = createAction<ElementState>("settingsPanel/addElement");
export const updateElement = createAction<Style | Href>("settingsPanel/updateElement");
export const updateText = createAction<{ id: string; text: string }>("settingsPanel/updateText");
export const undo = createAction("settingsPanel/undo");
export const redo = createAction("settingsPanel/redo");
export const initPanel = createAction<string>("settingsPanel/initPanel");
export const closePanel = createAction("settingsPanel/closePanel");
export const clearElements = createAction<string[]>("settingsPanel/clearElements");
export const addListValue = createAction<{}>("settingsPanel/addListValue");

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
          updateHistory(state, { id: selectedId, href: element.href });
        }

        if (isStyle(action.payload) && element.styles) {
          element.styles = { ...element.styles, ...action.payload };
          updateHistory(state, { id: selectedId, styles: element.styles });
        }
      }
    });
    builder.addCase(updateText, (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;

      const element = state.elements[id];

      if (element) {
        element.text = text;
      }
    });
    builder.addCase(undo, (state) => {
      if (state.currentHistoryIndex <= 0) return;

      state.currentHistoryIndex -= 1;
      const action = state.history[state.currentHistoryIndex];

      if (!action) return;

      const element = state.elements[action.id];
      if (!element) return;

      if (action.href) {
        element.href = action.href;
      }

      if (action.styles) {
        element.styles = { ...element.styles, ...action.styles };
      }
    });
    builder.addCase(redo, (state) => {
      if (state.currentHistoryIndex >= state.history.length - 1) return;

      state.currentHistoryIndex += 1;
      const action = state.history[state.currentHistoryIndex];

      if (!action) return;

      const element = state.elements[action.id];
      if (!element) return;

      if (action.href) {
        element.href = action.href;
      }

      if (action.styles) {
        element.styles = { ...element.styles, ...action.styles };
      }
    });
    builder.addCase(clearElements, (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((id) => {
        delete state.elements[id];

        if (state.history.length > 0) {
          state.history = state.history.filter((action) => action.id !== id);
        }

        if (state.currentHistoryIndex >= 0) {
          const currentAction = state.history[state.currentHistoryIndex];
          if (currentAction?.id === id) {
            state.currentHistoryIndex -= 1;
          }
        }

        if (state.selectedElement === id) {
          state.selectedElement = undefined;
          state.shown = false;
        }
      });
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
    builder.addCase(addListValue, (state, action: any) => {
      const { id, key, textList } = action.payload;
      const element = state.elements[id];

      if (!element.valueList) element.valueList = {};
      if (textList === undefined) {
        delete element.valueList[key];
        const values = Object.values(element.valueList);
        const keys = Object.keys(element.valueList);

        element.valueList = {};
        const newKeys = keys.map((item) => {
          if (Number(item) > key) item = String(Number(item) - 1);
          return item;
        });
        newKeys.map((k, i) => {
          element.valueList![k] = values[i];
        });
      } else {
        element.valueList[key] = textList;
      }
    });
  },
});

function updateHistory(state: SettingsPanelState, action: HistoryState): void {
  state.history = state.history.slice(0, state.currentHistoryIndex + 1);

  if (state.history.length >= 20) state.history.shift();

  state.history.push(action);
  state.currentHistoryIndex = state.history.length - 1;
}

export default settingsPanelSlice.reducer;
