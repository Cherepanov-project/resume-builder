import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shown: false,
  imageMenu: false,
  type: '',
  sectionID: '',
  moduleID: '',
};

const settingsPanelSlice = createSlice({
  name: 'settingsPanelSlice',
  initialState,
  reducers: {
   initPanel(state, action) {
    const { type='', sectionID='0', moduleID='0' } = action.payload;
    state.shown = true;
    state.type = type;
    state.sectionID = sectionID;
    state.moduleID = moduleID
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
   }
  },
});

export default settingsPanelSlice.reducer;
export const { initPanel, closePanel, initImageMenu, closeImageMenu } = settingsPanelSlice.actions;
