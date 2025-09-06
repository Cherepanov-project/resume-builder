/* eslint-disable @typescript-eslint/no-explicit-any */
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
export const addListValue = createAction<object>("settingsPanel/addListValue");
export const addTimer = createAction<object>("settingsPanel/addTimer");

const settingsPanelSlice = createSlice({
  name: "settingsPanel",
  initialState,
  reducers: {
    addElement: (state, { payload }: PayloadAction<ElementState>) => {
      state.elements[payload.id] = payload;
      state.history.push({ id: payload.id });
    },
    updateElement: (state, { payload }: PayloadAction<Style | Href>) => {
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
    },
    updateText: (state, { payload }: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = payload;

      if (state.elements[id]) state.elements[id].text = text;
    },
    undo: (state) => {
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
    },
    redo: (state) => {
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
    },
    clearElements: (state, { payload }: PayloadAction<string[]>) => {
      payload.forEach((id) => {
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
    },
    initPanel: (state, { payload }: PayloadAction<string>) => {
      if (!state.shown) {
        state.shown = true;
      }

      state.selectedElement = payload;
    },
    closePanel: (state) => {
      if (state.shown) {
        state.shown = false;
      }

      state.selectedElement = undefined;
    },
    addListValue: (
      state,
      { payload }: PayloadAction<{ id: string; key: number; textList?: string | undefined }>,
    ) => {
      const { id, key, textList } = payload;

      if (!state.elements[id]) return;

      if (!state.elements[id].valueList) {
        state.elements[id].valueList = {};
      }

      if (textList === undefined) {
        delete (state.elements[id].valueList as any)[key];
        const values = Object.values(state.elements[id].valueList || {});
        const keys = Object.keys(state.elements[id].valueList || {});

        state.elements[id].valueList = {};

        const newKeys = keys.map((item) => {
          if (Number(item) > key) item = String(Number(item) - 1);
          return item;
        });

        newKeys.map((k, i) => {
          if (state.elements[id].valueList) {
            (state.elements[id].valueList as any)[k] = values[i];
          }
        });
      } else {
        (state.elements[id].valueList as any)[key] = textList;
      }
    },
    addTimer: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        installDate?: number;
        installTime?: number;
        background?: string;
        color?: string;
        save?: boolean;
        size?: string;
        counter?: number;
      }>,
    ) => {
      const { id, ...rest } = payload;

      // Инициализация timerList если его нет
      if (!state.elements[id].timerList) {
        state.elements[id].timerList = {
          color: "#fff",
          background: "#457670",
          installTime: 0,
          installDate: 0,
          counter: 0,
          size: "0.8",
        };
      }

      // Обновляем только переданные поля
      state.elements[id].timerList = {
        ...state.elements[id].timerList,
        ...rest,
      };
    },
  },
});

function updateHistory(state: SettingsPanelState, action: HistoryState): void {
  state.history = state.history.slice(0, state.currentHistoryIndex + 1);

  if (state.history.length >= 20) state.history.shift();

  state.history.push(action);
  state.currentHistoryIndex = state.history.length - 1;
}

export default settingsPanelSlice.reducer;
