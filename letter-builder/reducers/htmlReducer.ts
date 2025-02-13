import { createSlice, PayloadAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
=======
import { Middleware } from "redux";
>>>>>>> origin/nekrasov

interface HtmlState {
  htmlCode: string;
  previewHtml: string;
}

const loadHtmlState = (): HtmlState | undefined => {
  try {
    const serializedState = localStorage.getItem("htmlState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Failed to load HTML state:", e);
    return undefined;
  }
};

const initialState: HtmlState = loadHtmlState() || {
  htmlCode: "",
  previewHtml: "",
};

export const htmlSlice = createSlice({
  name: "html",
  initialState,
  reducers: {
    setHtmlCode: (state, action: PayloadAction<string>) => {
      state.htmlCode = action.payload;
    },
    setPreviewHtml: (state, action: PayloadAction<string>) => {
      state.previewHtml = action.payload;
    },
  },
});

<<<<<<< HEAD
export const htmlMiddleware: any = (store: any) => (next: any) => (action: any) => {
=======
export const htmlMiddleware: Middleware = (store) => (next) => (action) => {
>>>>>>> origin/nekrasov
  const result = next(action);
  if (action.type.startsWith("html/")) {
    try {
      const serializedState = JSON.stringify(store.getState().html);
      localStorage.setItem("htmlState", serializedState);
    } catch (e) {
      console.warn("Failed to save HTML state:", e);
    }
  }
  return result;
};

export const { setHtmlCode, setPreviewHtml } = htmlSlice.actions;
export default htmlSlice.reducer;
