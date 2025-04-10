import { Table, TableBody, TableRow, TableCell, ThemeProvider } from "@mui/material";
import { Suspense, lazy, memo } from "react";
import { useTypedSelector } from "../../hooks/cvTemplateHooks";
import { useAppDispatch } from "../../hooks/cvTemplateHooks";
import { addChildElement } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";
import ComponentPreloader from "../ComponentPreloader";
import { ISettingsInputItem } from "../../types/landingBuilder";
import { nanoid } from "nanoid";
import theme from "./Theme";
import React from "react";

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  blockWidth: string[];
  props: {
    [key: string]:
      | string
      | string[]
      | number
      | { [key: string]: string | number }
      | ISettingsInputItem[]
      | [string, string][];
  };
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onDragOver?: (e: React.DragEvent) => void;
}

interface DynamicChildComponentRendererProps {
  source?: string;
  Component: string;
  id: string;
}

const DynamicChildComponentRenderer: React.FC<DynamicChildComponentRendererProps> = memo(
  ({ Component, id }) => {
    if (typeof Component === "undefined") return null;

    const DynamicComponent = lazy(() => import(`../LineBlocksContent/${Component}/index.ts`));

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent key={id} id={id} />
      </Suspense>
    );
  },
);

const BlockLine = ({ id, onDragStart, props }: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();

  const handleDrop = (index: number) => {
    if (currentDraggableItem && currentDraggableItem.props.isChild) {
      console.log("Перетаскиваемый элемент:", currentDraggableItem);
      console.log("Индекс родительского элемента:", id);
      console.log("Индекс дочернего элемента:", index);
      dispatch(
        addChildElement({
          draggableItem: currentDraggableItem,
          idParentElement: id,
          indexChild: index,
        }),
      );
    }
  };

  const childrenElements: Array<Array<JSX.Element | null>> = [];

  let blockElements: Array<JSX.Element | null> = [];

  const index = gridContainers[0].elements.activeElements.findIndex((item) => item.id === id);

  if (typeof props.blockWidth === "object" && Array.isArray(props.blockWidth)) {
    blockElements = props.blockWidth.map((width, indexBlock) => {
      if (index > -1) {
        const children = gridContainers[0]?.elements?.activeElements[index]?.children || [];
        const currentChild = children[indexBlock];

        if (currentChild?.children) {
          currentChild.children.forEach((child) => {
            if (child) {
              if (!Array.isArray(childrenElements[indexBlock])) {
                childrenElements[indexBlock] = [];
              }
              childrenElements[indexBlock].push(
                <DynamicChildComponentRenderer
                  key={nanoid()}
                  source={"atoms"}
                  Component={child.name}
                  id={child.id}
                />,
              );
            }
          });
        }
      }

      return (
        <TableCell
          key={nanoid()}
          variant="letterBlockCell"
          sx={{
            width: width,
            color: childrenElements[indexBlock] ? "black" : "#4cb9ea",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onDrop={() => handleDrop(indexBlock)}
        >
          {childrenElements[indexBlock] ? childrenElements[indexBlock] : "блок"}
        </TableCell>
      );
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Table key={nanoid()}>
        <TableBody key={nanoid()}>
        <TableRow
          key={nanoid()}
          id={id}
          draggable
          onDragStart={(e) => typeof onDragStart === 'function' ? onDragStart(e, id) : undefined}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          {blockElements}
        </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default BlockLine;