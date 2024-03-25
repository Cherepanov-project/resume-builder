import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

import { insertChild } from '@/utils';
import { addBaseScript } from '@/utils/scriptAssigner';
import { Layout } from 'react-grid-layout';
import { T_BlockElement } from '@/types/landingBuilder';

type stateProps = {
  activeElements: T_BlockElement[];
  currentDraggableItem: Layout | null;
};

const initialState: stateProps = {
  activeElements: [],
  currentDraggableItem: null,
};

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 15);

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Добавляем блок в рабочую область
    addElement(state, action) {
      const { draggableItem, layoutItem, parentElement } = action.payload;
      // Задаем уникальный ID блоку и параметры
      //при дропе добавляем скрипт с эвент листенером в виде строки
      const elemId = nanoid();
      const newElement = {
        ...draggableItem,
        elementScript: addBaseScript(elemId, draggableItem),
        layout: {
          ...layoutItem,
          i: elemId,
          x: layoutItem.x,
          y: layoutItem.y,
          w: draggableItem.layout.w,
          h: draggableItem.layout.h,
          minW: draggableItem.layout.minW || 0,
          maxW: draggableItem.layout.maxW ?? 6,
          minH: draggableItem.layout.minW || 0,
          //значение Infinity
          maxH: draggableItem.layout.maxH ?? 1000000,
        },
      };
      // console.log(newElement);
      const renewElements = insertChild(state.activeElements, parentElement, newElement);
      state.activeElements = [...(renewElements as T_BlockElement[])];
    },
    // Копируем блок
    copyElement(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      const newElement = {
        ...state.activeElements[indx],
        layout: {
          ...state.activeElements[indx].layout,
          i: nanoid(),
        },
      };
      state.activeElements.splice(indx + 1, 0, newElement);
    },
    // Изменяем положение блока в рабочей области
    changeElement(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx] = {
        ...state.activeElements[indx],
        layout: {
          ...action.payload,
        },
      };
    },
    // Удаляем блок из рабочей области
    deleteElement(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements.splice(indx, 1);
    },
    // Увеличиваем количество колонок в блоке
    increaseElementColumns(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx].layout.w = state.activeElements[indx].layout.w + 1;
      state.activeElements[indx].columns = state.activeElements[indx].columns! + 1;
    },
    // Уменьшаем количество колонок в блоке
    decreaseElementColumns(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx].layout.w = state.activeElements[indx].layout.w - 1;
      state.activeElements[indx].columns = state.activeElements[indx].columns! - 1;
    },
    // Помещаем информацию о текущем перемещаемом блоке в стор
    setDraggableItem(state, action) {
      state.currentDraggableItem = action.payload;
    },
    setSectionStyle(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx] = {
        ...state.activeElements[indx],
        props: {
          style: {
            ...action.payload.style,
          },
          key: '',
          text: action.payload.text,
          wrapperStyle: action.payload.wrapperStyle,
          textStyle: action.payload.textStyle,
          inputStyle: action.payload.InputStyle,
        },
      };
    },
    setProps(state, action) {
      const idx = state.activeElements.findIndex((item) => item.layout.i === action.payload.id);

      state.activeElements[idx] = {
        ...state.activeElements[idx],
        props: {
          [state.activeElements[idx].name]: [...action.payload.values],
          text: '',
          size: action.payload.size === 0 ? 1 : action.payload.size,
        },
      };
    },
  },
});

export default layoutSlice.reducer;
export const {
  addElement,
  copyElement,
  changeElement,
  deleteElement,
  increaseElementColumns,
  decreaseElementColumns,
  setDraggableItem,
  setSectionStyle,
  setProps,
} = layoutSlice.actions;
