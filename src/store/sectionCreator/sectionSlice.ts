import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { T_SectionElements, T_BlockElement } from "@/types/landingBuilder";

interface SectionModule {
  name: string;
  list: T_SectionElements[];
}
interface SectionState {
  sections: SectionModule[];
}

const initialState: SectionState = {
  sections: [],
};

export const sectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    loadSections: (state) => {
      const ls = localStorage.getItem("sections");
      if (ls) state.sections = JSON.parse(ls);
    },

    postNewSection: (
      state,
      action: PayloadAction<{ moduleName: string; section: T_SectionElements }>,
    ) => {
      const { moduleName, section } = action.payload;
      const moduleIndex = state.sections.findIndex((m) => m.name === moduleName);

      if (moduleIndex >= 0) {
        if (!state.sections[moduleIndex].list.some((item) => item.title === section.title)) {
          state.sections[moduleIndex].list.push(section);
        }
      } else {
        state.sections.push({ name: moduleName, list: [section] });
      }

      localStorage.setItem("sections", JSON.stringify(state.sections));
    },

    deleteSection: (state, action: PayloadAction<T_BlockElement>) => {
      const { type, title } = action.payload;

      if (!type || !title) return;

      const moduleIndex = state.sections.findIndex((mod) => mod.name === type);

      if (moduleIndex >= 0) {
        state.sections[moduleIndex].list = state.sections[moduleIndex].list.filter(
          (item) => item.title !== title,
        );

        localStorage.setItem("sections", JSON.stringify(state.sections));
      }
    },
    editSection: (
      state,
      action: PayloadAction<{ oldItem: T_SectionElements; newItem: T_SectionElements }>,
    ) => {
      const { oldItem, newItem } = action.payload;
      const { type, title } = oldItem;

      if (oldItem.type !== newItem.type) {
        console.error("Changing section type is not allowed");
        return;
      }

      if (!title || !type) return;

      const moduleIndex = state.sections.findIndex((mod) => mod.name === type);

      if (moduleIndex >= 0) {
        const sectionIndex = state.sections[moduleIndex].list.findIndex(
          (item) => item.title === title,
        );
        if (sectionIndex >= 0) {
          state.sections[moduleIndex].list[sectionIndex] = {
            ...state.sections[moduleIndex].list[sectionIndex],
            ...newItem,
          };
          localStorage.setItem("sections", JSON.stringify(state.sections));
        }
      }
    },
  },
});

export const { loadSections, postNewSection, deleteSection, editSection } = sectionSlice.actions;
export default sectionSlice.reducer;
