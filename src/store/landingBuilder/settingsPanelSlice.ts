import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsPanelState {
  shown: boolean;
  imageMenu: boolean;
  type: string;
  sectionID: string;
  moduleID: string;
  selectedImageUrl: string;
}

const initialState: SettingsPanelState = {
  shown: false,
  imageMenu: false,
  type: "",
  sectionID: "",
  moduleID: "",
  selectedImageUrl: "",
};

const settingsPanelSlice = createSlice({
  name: "settingsPanel",
  initialState,
  reducers: {
    initPanel(
      state,
      action: PayloadAction<{ type?: string; sectionID?: string; moduleID?: string }>,
    ) {
      const { type = "", sectionID = "0", moduleID = "0" } = action.payload;
      state.shown = true;
      state.type = type;
      state.sectionID = sectionID;
      state.moduleID = moduleID;
    },
    closePanel(state) {
      state.shown = false;
    },
    initImageMenu(state) {
      state.shown = true;
      state.imageMenu = true;
    },
    closeImageMenu(state) {
      state.imageMenu = false;
    },
    applyImage(state, action: PayloadAction<string>) {
      state.selectedImageUrl = action.payload;
      state.imageMenu = false;
    },
  },
});

export const { initPanel, closePanel, initImageMenu, closeImageMenu, applyImage } =
  settingsPanelSlice.actions;

export default settingsPanelSlice.reducer;
