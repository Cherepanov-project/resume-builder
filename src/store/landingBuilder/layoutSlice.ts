import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

import { insertChild } from '@/utils';
import { addBaseScript } from '@/utils/scriptAssigner';
import { Layout } from 'react-grid-layout';
import { T_BlockElement } from '@/types/landingBuilder';

type ElementsType = {
  activeElements: T_BlockElement[];
  currentDraggableItem: Layout | null;
};

type GridContainers = {
  id: string;
  height: number;
  elements: ElementsType;
};

type stateProps = {
  gridContainers: GridContainers[];
  currentContainer: string;
};

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 15);

const initialState: stateProps = {
  gridContainers: [
    {
      id: nanoid(),
      height: 30,
      elements: {
        activeElements: [],
        currentDraggableItem: null,
      },
    },
  ],
  currentContainer: '',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Добавляем блок в рабочую область
    addElement(state, action) {
      const { draggableItem, layoutItem, parentElement, id } = action.payload;
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
      // console.log(action.payload);
      let activeElements: T_BlockElement[] = [];
      state.gridContainers.forEach((container) => {
        if (container.id === id)
          return (activeElements = container.elements.activeElements as T_BlockElement[]);
      });
      const renewElements = insertChild(activeElements, parentElement, newElement);
      // console.log('renew', renewElements);
      state.gridContainers = state.gridContainers.map((container) => {
        // console.log('kuku', container.id, id);
        if (container.id === id) {
          console.log('container', container);
          container.elements.activeElements = [...(renewElements as T_BlockElement[])];
          console.log('elems', container.elements.activeElements);
        }
        return container;
      });
    },
    // Копируем блок
    copyElement(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          const newElement = {
            ...container.elements.activeElements[indx],
            layout: {
              ...container.elements.activeElements[indx].layout,
              i: nanoid(),
            },
          };
          container.elements.activeElements.splice(indx + 1, 0, newElement);
        }
      });
    },
    // Изменяем положение блока в рабочей области
    changeElement(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );

          container.elements.activeElements[indx] = {
            ...container.elements.activeElements[indx],
            layout: {
              ...action.payload,
            },
          };
        }
      });
    },
    // Удаляем блок из рабочей области
    deleteElement(state, action) {
      // const containerID = action.payload.id;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === state.currentContainer) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          container.elements.activeElements.splice(indx, 1);
        }
      });
    },
    addGridContainer(state) {
      state.gridContainers.push({
        id: nanoid(),
        height: 30,
        elements: {
          activeElements: [],
          currentDraggableItem: null,
        },
      });
      // console.log(state.gridContainers);
    },
    deleteGridContainer(state, action) {
      // console.log(action.payload);
      state.gridContainers = state.gridContainers.filter(
        (container) => container.id !== action.payload,
      );
    },
    setCurrentContainer(state, action) {
      state.currentContainer = action.payload;
    },
    // Увеличиваем количество колонок в блоке
    increaseElementColumns(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          container.elements.activeElements[indx].layout.w += 1;
          container.elements.activeElements[indx].columns += 1;
        }
      });

      // state.gridContainers[containerID].elements.activeElements[indx].layout.w = state.gridContainers[containerID].elements.activeElements[indx].layout.w + 1;
      // state.gridContainers[containerID].elements.activeElements[indx].columns = state.gridContainers[containerID].elements.activeElements[indx].columns! + 1;
    },
    // Уменьшаем количество колонок в блоке
    decreaseElementColumns(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          container.elements.activeElements[indx].layout.w -= 1;
          container.elements.activeElements[indx].columns -= 1;
        }
      });
      // state.gridContainers[containerID].elements.activeElements[indx].layout.w = state.gridContainers[containerID].elements.activeElements[indx].layout.w - 1;
      // state.gridContainers[containerID].elements.activeElements[indx].columns = state.gridContainers[containerID].elements.activeElements[indx].columns! - 1;
    },
    // Помещаем информацию о текущем перемещаемом блоке в стор
    setDraggableItem(state, action) {
      // console.log('setDraggableItem', action.payload.item);
      const containerID = action.payload.currentContainer;
      state.gridContainers = state.gridContainers.map((container) => {
        if (container.id === containerID)
          container.elements.currentDraggableItem = action.payload.item;
        // console.log('setDraggableItem', container);
        return container;
      });
    },
    setSectionStyle(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          container.elements.activeElements[indx] = {
            ...container.elements.activeElements[indx],
            props: {
              style: {
                ...action.payload.style,
              },
              key: '',
              text: '',
              wrapperStyle: { '': '' },
              textStyle: { '': '' },
            },
          };
        }
      });
    },
    setProps(state, action) {
      const containerID = state.currentContainer;
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === containerID) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );
          container.elements.activeElements[indx] = {
            ...container.elements.activeElements[indx],
            props: {
              [container.elements.activeElements[indx].name]: [...action.payload.values],
              text: '',
              size: action.payload.size === 0 ? 1 : action.payload.size,
            },
          };
        }
      });
    },
  },
});

export default layoutSlice.reducer;
export const {
  addElement,
  addGridContainer,
  deleteGridContainer,
  setCurrentContainer,
  copyElement,
  changeElement,
  deleteElement,
  increaseElementColumns,
  decreaseElementColumns,
  setDraggableItem,
  setSectionStyle,
  setProps,
} = layoutSlice.actions;
