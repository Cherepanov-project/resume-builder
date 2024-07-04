import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

import { insertChild } from '@/utils';
import { addBaseScript } from '@/utils/scriptAssigner';
import { Layout } from 'react-grid-layout';
import { T_BlockElement } from '@/types/landingBuilder';
import { current } from '@reduxjs/toolkit';

type ElementsType = {
  activeElements: T_BlockElement[];
};

export type IGridContainers = {
  id: string;
  height: number;
  elements: ElementsType;
  layout: {
    i: null | string;
    w: number;
    h: number;
    x: number;
    y: number;
  };
};

type stateProps = {
  gridContainers: IGridContainers[];
  currentDraggableItem: Layout | null;
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
      },
      layout: {
        i: null,
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  ],
  currentDraggableItem: null,
  currentContainer: '',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Добавляем блок в рабочую область
    addElement(state, action) {
      console.log(action)
      const { draggableItem, layoutItem, parentElement, id } = action.payload;
      const containerId = id;
      // Задаем уникальный ID блоку и параметры
      //при дропе добавляем скрипт с эвент листенером в виде строки
      const elemId = nanoid();
      console.log(elemId)
      const newElement = {
        ...draggableItem,
        elementScript: addBaseScript(elemId, draggableItem),
        layout: {
          ...layoutItem,
          i: elemId,
          x: layoutItem.x,
          y: layoutItem.y,
          w: draggableItem.layout.w,
          h: draggableItem.layout.h + 1,
          minW: draggableItem.layout.minW || 0,
          maxW: draggableItem.layout.maxW ?? 6,
          minH: draggableItem.layout.minW || 0,
          //значение Infinity
          maxH: draggableItem.layout.maxH ?? 1000000,
        },
      };
      console.log(newElement)
      let activeElements: T_BlockElement[] = [];
      console.log(current(state.gridContainers))
      state.gridContainers.forEach((container /*, index*/) => {
        console.log(current(container))
        console.log(containerId)
        console.log(container.id)
        if (container.id === containerId) {
          for (const el of container.elements.activeElements) {
            console.log(current(el))
            if (
              newElement.layout.x >= el.layout.x &&
              newElement.layout.x < el.layout.x + el.layout.w
            ) {
              newElement.layout.y += el.layout.h;
              // const newContainer = {
              //   id: nanoid(),
              //   height: 30,
              //   elements: {
              //     activeElements: [],
              //   },
              //   layout: {
              //     i: null,
              //     w: 6,
              //     h: 2,
              //     x: 0,
              //     y: 0,
              //   },
              // };
              // state.gridContainers.splice(index + 1, 0, newContainer);
              // containerId = newContainer.id;
              // return activeElements = newContainer.elements.activeElements as T_BlockElement[];
            }
          }
          return (activeElements = container.elements.activeElements as T_BlockElement[]);
        }
      });
      console.log(current(activeElements))
      console.log(parentElement)
      console.log(newElement)
      const renewElements = insertChild(activeElements, parentElement, newElement);
      // console.log(current(renewElements))
      // console.log(current(renewElements[0]))
      state.gridContainers = state.gridContainers.map((container) => {
        if (container.id === containerId) {
          console.log(current(container))
          container.elements.activeElements = [...(renewElements as T_BlockElement[])];
        }
        return container;
      });
      state.currentDraggableItem = null;
    },
    // Копируем блок
    copyElement(state, action) {
      let indx: number;
      state.gridContainers.forEach((container, index) => {
        if (container.id === action.payload.id) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.layout.i,
          );
          const newElement = {
            ...container.elements.activeElements[indx],
            layout: {
              ...container.elements.activeElements[indx].layout,
              y:
                container.elements.activeElements[indx].layout.y +
                container.elements.activeElements[indx].layout.h,
              i: nanoid(),
            },
          };
          state.gridContainers[index].elements.activeElements.splice(indx + 1, 0, newElement);
        }
      });
    },
    // Изменяем положение блока в рабочей области
    changeElement(state, action) {
      let indx: number;
      state.gridContainers.forEach((container, index) => {
        if (container.id === state.currentContainer) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.i,
          );

          state.gridContainers[index].elements.activeElements[indx] = {
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
      // console.log(current(action))
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === action.payload.id) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.layout.i,
          );
          if (indx === -1) {
            console.log(indx)
            // console.log(current(container.elements.activeElements))
            console.log(current(container).elements)
            const formEls = container.elements.activeElements.filter((item) => item.name === "Form")
            console.log(current(formEls[0]))
            formEls.forEach((el) => {
              console.log(current(el))
              el.children?.forEach((elChild, index) => {
                console.log(elChild)
                if (elChild.layout.i === action.payload.layout.i) el.children!.splice(index, 1)
              })
            })
          }
          else container.elements.activeElements.splice(indx, 1);
        }
      });
    },
    addGridContainer(state, action) {
      console.log(action.payload)
      const indx = state.gridContainers.findIndex((container) => container.id === action.payload);
      const newContainer = {
        id: nanoid(),
        height: 30,
        elements: {
          activeElements: [],
        },
        layout: {
          i: null,
          w: 1,
          h: 1,
          x: 10,
          y: 0,
        },
      };
      state.gridContainers.splice(indx + 1, 0, newContainer);
    },
    copyGridContainer(state, action) {
      const indx = state.gridContainers.findIndex(
        (container) => container.id === action.payload.id,
      );
      const copy = {
        ...state.gridContainers[indx],
        id: nanoid(),
      };
      state.gridContainers.splice(indx + 1, 0, copy);
    },
    moveUpGridContainer(state, action) {
      if (state.gridContainers.length !== 1) {
        const indx = state.gridContainers.findIndex(
          (container) => container.id === action.payload.id,
        );
        if (indx !== 0) {
          [state.gridContainers[indx], state.gridContainers[indx - 1]] = [
            state.gridContainers[indx - 1],
            state.gridContainers[indx],
          ];
        }
      }
    },
    moveDownGridContainer(state, action) {
      if (state.gridContainers.length !== 1) {
        const indx = state.gridContainers.findIndex(
          (container) => container.id === action.payload.id,
        );
        if (indx !== state.gridContainers.length - 1) {
          [state.gridContainers[indx + 1], state.gridContainers[indx]] = [
            state.gridContainers[indx],
            state.gridContainers[indx + 1],
          ];
        }
      }
    },
    deleteGridContainer(state, action) {
      if (state.gridContainers.length === 1) {
        state.gridContainers[0].elements.activeElements = [];
      } else {
        state.gridContainers = state.gridContainers.filter(
          (container) => container.id !== action.payload.id,
        );
      }
    },
    setCurrentContainer(state, action) {
      state.currentContainer = action.payload;
    },
    // Увеличиваем количество колонок в блоке
    increaseElementColumns(state, action) {
      console.log("increaseElementColumns")
      console.log(state.gridContainers)
      console.log(action.payload)
      let indx: number;
      state.gridContainers.forEach((container) => {
        console.log(container.id)
        console.log(action.payload.id)
        if (container.id === action.payload.id) {
          console.log("container.id === action.payload.id")
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.layout.i,
          );
          container.elements.activeElements[indx].layout.w += 1;
          container.elements.activeElements[indx].columns! += 1;
        }
      });
    },
    // Уменьшаем количество колонок в блоке
    decreaseElementColumns(state, action) {
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === action.payload.id) {
          indx = container.elements.activeElements.findIndex(
            (element) => element.layout.i === action.payload.layout.i,
          );
          container.elements.activeElements[indx].layout.w -= 1;
          container.elements.activeElements[indx].columns! -= 1;
        }
      });
    },
    // Помещаем информацию о текущем перемещаемом блоке в стор
    setDraggableItem(state, action) {
      state.currentDraggableItem = action.payload.item;
    },
    setSectionStyle(state, action) {
      const containerID = state.currentContainer;
      state.gridContainers.forEach((container, i) => {
        if (container.id === containerID) {
          container.elements.activeElements.forEach((el, index) => {
            if (el.layout.i === action.payload.i) {
              state.gridContainers[i].elements.activeElements[index] = {
                ...el,
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
        }
      });
    },
    setProps(state, action) {
      // console.log("setProps")
      // console.log(action.payload)
      const containerID = state.currentContainer;
      // console.log(containerID)
      // console.log('h', action.payload)
      state.gridContainers.forEach((container, i) => {
        // console.log(container.id)
        if (container.id === containerID) {
          // console.log("container.id === containerID")
          // console.log(current(container.elements.activeElements))
          container.elements.activeElements.forEach((el, index) => {
            // console.log("forEach")
            // console.log(el.layout.i)
            // console.log(action.payload)
            // console.log(action.payload.id)
            // console.log(el.layout.i)
            if (el.layout.i === action.payload.id) {
              // console.log(action.payload)
              // console.log("el.layout.i === action.payload.id")
              state.gridContainers[i].elements.activeElements[index] = {
                ...el,
                props: {
                  [el.name]: [...action.payload.values],
                  text: '',
                  size: action.payload.size === 0 ? 1 : action.payload.size,
                  style: action.payload.style,
                },
              };
            } else if (el.children && el.children.length > 0) {
              console.log("else if")
              el.children.forEach((child, indx) =>  {
                if (child.layout.i === action.payload.id) {
                  // console.log('he')
                  state.gridContainers[i].elements.activeElements[index].children![indx] = {
                    ...child,
                    props: {
                      [child.name]: [...action.payload.values],
                      text: '',
                      size: action.payload.size === 0 ? 1 : action.payload.size,
                      style: action.payload.style,
                    }
                  }
                }
              })
            }
          });
        }
      });
    },
    clearStore(state) {
      state.gridContainers = initialState.gridContainers;
      state.currentDraggableItem = null;
      state.currentContainer = '';
    },
  },
});

export default layoutSlice.reducer;
export const {
  addElement,
  addGridContainer,
  deleteGridContainer,
  copyGridContainer,
  moveDownGridContainer,
  moveUpGridContainer,
  copyElement,
  changeElement,
  deleteElement,
  increaseElementColumns,
  decreaseElementColumns,
  setDraggableItem,
  setCurrentContainer,
  setSectionStyle,
  setProps,
  clearStore,
} = layoutSlice.actions;
