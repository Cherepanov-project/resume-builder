import { createSlice } from '@reduxjs/toolkit';
import { IElement, ISection } from '../../types/landingBuilder';

type InitialState = {
  workSpace: ISection[];
  edit: IElement | null;
  sideBar: string[];
};

const initialState: InitialState = {
  workSpace: [],
  edit: null,
  sideBar: ['null', 'null'],
};

const landingBuilder = createSlice({
  name: 'landigBuilder',
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.workSpace.push(action.payload);
    },
    addColumn: (state, action) => {
      const [sectionId, col] = action.payload;

      state.workSpace = state.workSpace.map((section) => {
        if (section.i === sectionId) {
          section.columns.push(col);
        }
        return section;
      });
    },
    changeColumnStyle: (state, action) => {
      const [sectionId, style] = action.payload;
      state.workSpace = state.workSpace.map((section) => {
        if (section.i === sectionId) {
          section.columnStyle = style;
        }
        return section;
      });
    },
    addElement: (state, action) => {
      const [id, element] = action.payload;
      const sectionId = id.slice(0, 11);
      state.workSpace = state.workSpace.map((section) => {
        if (section.i === sectionId) {
          section.columns = section.columns.map((column) => {
            if (column.id === id) {
              column.elements.push(element);
            }
            return column;
          });
        }
        return section;
      });
    },
    edit: (state, action) => {
      state.edit = action.payload;
    },
    sideBar: (state, action) => {
      state.sideBar = action.payload;
    },
  },
});

export default landingBuilder.reducer;
export const { addElement, edit, addSection, sideBar, addColumn, changeColumnStyle } =
  landingBuilder.actions;
