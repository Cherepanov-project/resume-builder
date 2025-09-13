import { createSlice } from "@reduxjs/toolkit";
import { customAlphabet } from "nanoid";
import { insertChild } from "@/utils";
import { addBaseScript } from "@/utils/scriptAssigner";
import { T_BlockElementWithChild as T_BlockElement } from "@/types/landingBuilder";
import { replaceIdWithNanoid } from "@/utils/replaceIdWithId";

const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 15);

interface ElementsType {
  activeElements: T_BlockElement[];
}

interface LetterElementsType extends ElementsType {
  activeElements: T_BlockElement[];
}

export interface IGridContainers {
  id: string;
  height: number;
  elements: LetterElementsType;
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
  currentDraggableItem: T_BlockElement | null;
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

const letterLayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
    // Добавляем блок в рабочую область
    addElement(state, action) {
      const { draggableItem, layoutItem, parentElement, id } = action.payload;
      if (!draggableItem) {
        console.error("Invalid draggableItem or layoutItem:", draggableItem, layoutItem);
        return; // Прекращаем выполнение, если данные невалидны
      }
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
          activeElements = container.elements.activeElements as T_BlockElement[];
          return activeElements;
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
    addChildElement(state, action) {
      const { draggableItem, idParentElement, indexChild } = action.payload;

      const item = { ...draggableItem, id: nanoid() };

      state.gridContainers.map((container) => {
        const index = container.elements.activeElements.findIndex(
          (element) => element.id === idParentElement,
        );

        if (index > -1) {
          const parentElement = container.elements.activeElements[index];
          if (parentElement && parentElement.children) {
            if (!parentElement.children[indexChild]) {
              parentElement.children[indexChild] = {
                name: `Cell${indexChild}`,
                props: {
                  style: {},
                  text: "Пример текста",
                },
                layout: {
                  i: "",
                  x: 4,
                  y: 5,
                  w: 5,
                  h: 2,
                },
                source: "TableCell",
                children: [] as T_BlockElement[],
              };
            }
            parentElement.children[indexChild].children?.push(item);
          }
        }
      });
      state.currentDraggableItem = null;
    },
    copyElement(state, action) {
      const { id, elementId, layout, parentLayout } = action.payload;

      state.gridContainers.forEach((container) => {
        if (container.id !== id) return;

        const findElementIndex = (layoutId: string | null): number =>
          container.elements.activeElements.findIndex((element) => element.layout.i === layoutId);

        const parentIndex = findElementIndex(parentLayout?.i || layout.i);

        if (parentIndex === -1) return;

        if (elementId) {
          const parentElement = container.elements.activeElements[parentIndex];
          const childIndex = parentElement.children?.findIndex(
            (child) => child.layout.i === elementId,
          );

          if (childIndex !== undefined && childIndex !== -1) {
            const originalChild = parentElement.children?.[childIndex];
            if (originalChild) {
              const newChild = {
                ...originalChild,
                layout: {
                  ...originalChild.layout,
                  x: originalChild.layout.x + originalChild.layout.w,
                  i: nanoid(),
                },
              };
              parentElement.children?.splice(childIndex + 1, 0, newChild);
            }
          }
        } else {
          const originalElement = container.elements.activeElements[parentIndex];

          const newElement = {
            ...originalElement,
            layout: {
              ...originalElement.layout,
              y: originalElement.layout.y + originalElement.layout.h,
              i: nanoid(),
            },
          };

          const newElementWithNewId = replaceIdWithNanoid(newElement);

          container.elements.activeElements.splice(parentIndex + 1, 0, newElementWithNewId);
        }
      });
    },
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
    deleteElement(state, action) {
      const { id, elementId, layout, parentLayout } = action.payload;

      state.gridContainers.forEach((container) => {
        if (container.id !== id) return;

        const findElementIndex = (layoutId: string | null) =>
          container.elements.activeElements.findIndex((element) => element.layout.i === layoutId);

        const parentIndex = findElementIndex(parentLayout?.i || layout.i);

        if (parentIndex === -1) return;

        if (elementId) {
          const parentElement = container.elements.activeElements[parentIndex];
          const childIndex = parentElement.children?.findIndex(
            (child) => child.layout.i === elementId,
          );

          if (childIndex !== undefined && childIndex !== -1) {
            parentElement.children?.splice(childIndex, 1);
          }
        } else {
          container.elements.activeElements.splice(parentIndex, 1);
        }
      });
    },
    addGridContainer(state, action) {
      const indx = state.gridContainers.findIndex((container) => container.id === action.payload);
      if (indx !== -1) {
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
      } else {
        console.error("Container not found for ID:", action.payload);
      }
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
    setGridContainer(state, action) {
      state.gridContainers = action.payload;
    },
    setCurrentContainer(state, action) {
      state.currentContainer = action.payload;
    },
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
          let elIndx: number | undefined;

          if (action.payload.elementId) {
            const element = container.elements.activeElements[indx];
            if (element && element.children) {
              elIndx = element.children.findIndex(
                (child) => child.layout.i === action.payload.elementId,
              );
            }
          }

          if (elIndx !== undefined) {
            const element = container.elements.activeElements[indx];
            element.children![elIndx].layout.w += 1;
          } else {
            container.elements.activeElements[indx].layout.w += 1;
            container.elements.activeElements[indx].columns! += 1;
          }
        }
      });
    },
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
          let elIndx: number | undefined;

          if (action.payload.elementId) {
            const element = container.elements.activeElements[indx];
            if (element && element.children) {
              elIndx = element.children.findIndex(
                (child) => child.layout.i === action.payload.elementId,
              );
            }
          }
          if (elIndx !== undefined) {
            const element = container.elements.activeElements[indx];
            element.children![elIndx].layout.w -= 1;
          } else {
            container.elements.activeElements[indx].layout.w -= 1;
            container.elements.activeElements[indx].columns! -= 1;
          }
        }
      });
    },

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
  addChildElement,
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
  setGridContainer,
} = letterLayoutSlice.actions;

export default letterLayoutSlice.reducer;
