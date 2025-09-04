import { createSlice } from "@reduxjs/toolkit";

interface VideoState {
  selectedVideos: Record<string, string>;
}

const initialState: VideoState = {
  selectedVideos: {},
};

const videoSelectionSlice = createSlice({
  name: "videoSelection",
  initialState,
  reducers: {
    setSelectedVideo(state, action) {
      const { elementId, url } = action.payload;
      state.selectedVideos[elementId] = url;
    },
  },
});
export const { setSelectedVideo } = videoSelectionSlice.actions;
export default videoSelectionSlice.reducer;
