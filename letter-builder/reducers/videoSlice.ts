import { createSlice, PayloadAction, Middleware, AnyAction } from "@reduxjs/toolkit";

interface VideoState {
  isSidebarOpen: boolean;
  videoUrl: string;
}

const loadVideoState = (): VideoState | undefined => {
  try {
    const serializedState = localStorage.getItem("videoState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Failed to load video state:", e);
    return undefined;
  }
};

const initialState: VideoState = loadVideoState() || {
  isSidebarOpen: false,
  videoUrl: "",
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoUrl: (state, action: PayloadAction<string>) => {
      state.videoUrl = action.payload;
    },
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const videoMiddleware: Middleware = (store) => (next) => (action: AnyAction) => {
  const result = next(action);
  if (action.type.startsWith("video/")) {
    try {
      const serializedState = JSON.stringify(store.getState().video);
      localStorage.setItem("videoState", serializedState);
    } catch (e) {
      console.warn("Failed to save video state:", e);
    }
  }
  return result;
};

export const { setVideoUrl, toggleSidebar } = videoSlice.actions;
export default videoSlice.reducer;
