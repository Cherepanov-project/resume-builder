import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { T_BlockElement, T_SectionElements } from "@/types/landingBuilder";
import { syncSections } from "./LetterBuilderStore/letterLayoutSlice";

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
      action: PayloadAction<{ oldItem: T_BlockElement; newItem: T_SectionElements }>,
    ) => {
      const { oldItem, newItem } = action.payload;
      const { type, title } = oldItem;

      if (!type || !title) return;

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

  extraReducers: (builder) => {
    builder.addCase(syncSections, (state, action) => {
      state.sections = action.payload.map((section) => ({
        name: section.name,
        list: section.list,
      }));
    });
  },
});

export const { loadSections, postNewSection, deleteSection, editSection } = sectionSlice.actions;
export default sectionSlice.reducer;
