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
export const addListValue = createAction<{ id: string; key: number; textList?: string }>(
  "settingsPanel/addListValue",
);

const settingsPanelSlice = createSlice({
  name: "settingsPanel",
  initialState,
  reducers: {
    updateText: (state, { payload }: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = payload;
      if (state.elements[id]) state.elements[id].text = text;
    },
    clearElements: (state, { payload }: PayloadAction<string[]>) => {
      payload.forEach((id) => {
        delete state.elements[id];
        state.history = state.history.filter((action) => action.id !== id);
        if (state.currentHistoryIndex >= 0 && state.history[state.currentHistoryIndex]?.id === id) {
          state.currentHistoryIndex -= 1;
        }
        if (state.selectedElement === id) {
          state.selectedElement = undefined;
          state.shown = false;
        }
      });
    },
    initPanel: (state, { payload }: PayloadAction<string>) => {
      state.shown = true;
      state.selectedElement = payload;
    },
    closePanel: (state) => {
      state.shown = false;
      state.selectedElement = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addElement, (state, { payload }) => {
        state.elements[payload.id] = payload;
        state.history.push({ id: payload.id });
      })
      .addCase(updateElement, (state, { payload }) => {
        const selectedId = state.selectedElement;
        if (!selectedId) return;

        const element = state.elements[selectedId];
        if (element) {
          if (isHref(payload)) {
            element.href = payload;
            updateHistory(state, { id: selectedId, href: element.href });
          }
          if (isStyle(payload) && element.styles) {
            element.styles = { ...element.styles, ...payload };
            updateHistory(state, { id: selectedId, styles: element.styles });
          }
        }
      })
      .addCase(undo, (state) => {
        if (state.currentHistoryIndex <= 0) return;
        state.currentHistoryIndex -= 1;
        const action = state.history[state.currentHistoryIndex];
        if (!action) return;

        const element = state.elements[action.id];
        if (!element) return;

        if (action.href) element.href = action.href;
        if (action.styles) element.styles = { ...element.styles, ...action.styles };
      })
      .addCase(redo, (state) => {
        if (state.currentHistoryIndex >= state.history.length - 1) return;
        state.currentHistoryIndex += 1;
        const action = state.history[state.currentHistoryIndex];
        if (!action) return;

        const element = state.elements[action.id];
        if (!element) return;

        if (action.href) element.href = action.href;
        if (action.styles) element.styles = { ...element.styles, ...action.styles };
      })
      .addCase(addListValue, (state, { payload }) => {
        const { id, key, textList } = payload;
        if (!state.elements[id]) return;

        if (!state.elements[id].valueList) {
          state.elements[id].valueList = {};
        }

        if (textList == null || textList.trim() === "") {
          delete state.elements[id].valueList?.[key];
          const newValueList: Record<string, string> = {};
          Object.entries(state.elements[id].valueList || {}).forEach(([k, v]) => {
            const newKey = Number(k) > key ? String(Number(k) - 1) : k;
            newValueList[newKey] = v;
          });
          state.elements[id].valueList = newValueList;
        } else {
          state.elements[id].valueList[key] = textList;
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
