import { createSlice } from "@reduxjs/toolkit";
import { customAlphabet } from "nanoid";

import { insertChild } from "@/utils";
import { addBaseScript } from "@/utils/scriptAssigner";
import { Layout } from "react-grid-layout";
import { T_BlockElement } from "@/types/landingBuilder";

const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 15);

interface ElementsType {
  activeElements: T_BlockElement[];
}

export interface IGridContainers {
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
}

interface LayoutState {
  gridContainers: IGridContainers[];
  currentDraggableItem: Layout | null;
  currentContainer: string;
  windowWidth: number;
}

const initialState: LayoutState = {
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
  currentContainer: "",
  windowWidth: window.innerWidth,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
    // Добавляем блок в рабочую область
    addElement(state, action) {
      const { draggableItem, layoutItem, parentElement, id } = action.payload;
      const containerId = id;
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
      let activeElements: T_BlockElement[] = [];
      state.gridContainers.forEach((container /*, index*/) => {
        if (container.id === containerId) {
          for (const el of container.elements.activeElements) {
            if (
              newElement.layout.x >= el.layout.x &&
              newElement.layout.x < el.layout.x + el.layout.w
            ) {
              newElement.layout.y += el.layout.h;
            }
          }
          return (activeElements = container.elements.activeElements as T_BlockElement[]);
        }
      });
      const renewElements = insertChild(activeElements, parentElement, newElement);
      state.gridContainers = state.gridContainers.map((container) => {
        if (container.id === containerId) {
          container.elements.activeElements = [...(renewElements as T_BlockElement[])];
        }
        return container;
      });
      state.currentDraggableItem = null;
    },
    // Копируем блок
    copyElement(state, action) {
      state.gridContainers.forEach((container, index) => {
        let indx: number;
        if (container.id === action.payload.id) {
          if (action.payload.elementId) {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.parentLayout.i,
            );
          } else {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.layout.i,
            );
          }
          // Если elementId передан в payload, дублируем элемент внутри секции
          if (action.payload.elementId) {
            // Находим индекс элемента внутри children
            const element = container.elements.activeElements[indx];
            const elIndx = element.children!.findIndex(
              (child) => child.layout.i === action.payload.elementId,
            );

            // Если нашли индекс элемента внутри children, дублируем его внутри секции
            if (elIndx !== undefined && elIndx !== -1) {
              const newElement = {
                ...element.children![elIndx],
                layout: {
                  ...element.children![elIndx].layout,
                  x: element.children![elIndx].layout.x + element.children![elIndx].layout.w, //// если хотим чтобы скопированный элемент появлялся cправа от элемента
                  i: nanoid(),
                },
              };
              // Вставляем новый элемент внутри children
              state.gridContainers[index].elements.activeElements[indx].children?.splice(
                elIndx + 1,
                0,
                newElement,
              );
            }
          } else {
            // Иначе, дублируем саму секцию
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
            // Вставляем новый элемент после текущего элемента
            state.gridContainers[index].elements.activeElements.splice(indx + 1, 0, newElement);
          }
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
      state.gridContainers.forEach((container) => {
        let indx: number;
        if (container.id === action.payload.id) {
          if (action.payload.elementId) {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.parentLayout.i,
            );
          } else {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.layout.i,
            );
          }

          // Если elementId передан в payload, удаляем элемент внутри секции
          if (action.payload.elementId) {
            // Находим индекс элемента внутри children
            const element = container.elements.activeElements[indx];
            const elIndx = element.children!.findIndex(
              (child) => child.layout.i === action.payload.elementId,
            );

            // Если нашли индекс элемента внутри children, удаляем его
            if (elIndx !== undefined && elIndx !== -1) {
              state.gridContainers.forEach((container) => {
                const containerIndx = container.elements.activeElements.findIndex(
                  (element) => element.layout.i === action.payload.parentLayout.i,
                );
                container.elements.activeElements[containerIndx].children!.splice(elIndx, 1);
              });
            }
          } else {
            // Иначе, удаляем саму секцию
            container.elements.activeElements.splice(indx, 1);
          }
        }
      });
    },
    addGridContainer(state, action) {
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
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === action.payload.id) {
          if (action.payload.elementId) {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.parentLayout.i,
            );
          } else {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.layout.i,
            );
          }
          // Находим индекс элемента внутри children, если elementId определен
          let elIndx: number | undefined;

          if (action.payload.elementId) {
            const element = container.elements.activeElements[indx];
            if (element && element.children) {
              elIndx = element.children.findIndex(
                (child) => child.layout.i === action.payload.elementId,
              );
            }
          }

          // Если нашли индекс элемента внутри children, уменьшаем его ширину
          if (elIndx !== undefined) {
            const element = container.elements.activeElements[indx];
            element.children![elIndx].layout.w += 1;
          } else {
            // Иначе уменьшаем ширину самого элемента
            container.elements.activeElements[indx].layout.w += 1;
            container.elements.activeElements[indx].columns! += 1;
          }
        }
      });
    },
    // Уменьшаем количество колонок в блоке
    decreaseElementColumns(state, action) {
      let indx: number;
      state.gridContainers.forEach((container) => {
        if (container.id === action.payload.id) {
          if (action.payload.elementId) {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.parentLayout.i,
            );
          } else {
            indx = container.elements.activeElements.findIndex(
              (element) => element.layout.i === action.payload.layout.i,
            );
          }
          // Находим индекс элемента внутри children, если elementId определен
          let elIndx: number | undefined;

          if (action.payload.elementId) {
            const element = container.elements.activeElements[indx];
            if (element && element.children) {
              elIndx = element.children.findIndex(
                (child) => child.layout.i === action.payload.elementId,
              );
            }
          }
          // Если нашли индекс элемента внутри children, уменьшаем его ширину
          if (elIndx !== undefined) {
            const element = container.elements.activeElements[indx];
            element.children![elIndx].layout.w -= 1;
          } else {
            // Иначе уменьшаем ширину самого элемента
            container.elements.activeElements[indx].layout.w -= 1;
            container.elements.activeElements[indx].columns! -= 1;
          }
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
                  ...el.props,
                  style: {
                    ...el.props.style,
                  },
                  text: el.props.text,
                  wrapperStyle: { ...el.props.wrapperStyle, ...action.payload.wrapperStyle },
                  textStyle: { ...action.payload.textStyle },
                },
              };
            }
          });
        }
      });
    },
    setProps(state, action) {
      const containerID = state.currentContainer;

      state.gridContainers.forEach((container, i) => {
        if (container.id === containerID) {
          container.elements.activeElements.forEach((el, index) => {
            if (el.layout.i === action.payload.id) {
              state.gridContainers[i].elements.activeElements[index] = {
                ...el,
                props: {
                  ...el.props,
                  [el.name]: [...action.payload.values],
                  size: action.payload.size === 0 ? 1 : action.payload.size,
                  style: {
                    ...el.props.style,
                    ...action.payload.style,
                  },
                  textStyle: {
                    ...el.props.textStyle,
                    ...action.payload.textStyle,
                  },
                },
              };
            } else if (el.children && el.children.length > 0) {
              el.children.forEach((child, indx) => {
                if (child.layout.i === action.payload.id) {
                  state.gridContainers[i].elements.activeElements[index].children![indx] = {
                    ...child,
                    props: {
                      [child.name]: [...action.payload.values],
                      text: "",
                      size: action.payload.size === 0 ? 1 : action.payload.size,
                      style: action.payload.style,
                    },
                  };
                }
              });
            }
          });
        }
      });
    },
    clearStore(state) {
      state.gridContainers = initialState.gridContainers;
      state.currentDraggableItem = null;
      state.currentContainer = "";
    },
  },
});

export const {
  setWindowWidth,
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

export default layoutSlice.reducer;
