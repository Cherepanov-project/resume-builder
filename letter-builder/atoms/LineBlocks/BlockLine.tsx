import { Table, TableBody, TableRow, TableCell, ThemeProvider } from "@mui/material";
import { T_BlockElement, T_BlockElementWithChild } from "@/types/landingBuilder";
import React, { useEffect, Suspense, lazy, memo, useRef } from "react";
import { useTypedSelector } from "../../hooks/cvTemplateHooks";
import { useAppDispatch } from "../../hooks/cvTemplateHooks";
import { addChildElement } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";
import { ISettingsInputItem } from "../../types/landingBuilder";
import ComponentPreloader from "../ComponentPreloader";
import { nanoid } from "nanoid";
import theme from "./Theme";

interface IChildElement {
  id: string;
  name: string;
  children?: IChildElement[];
}

export interface CustomLayout {
  i: string;
  w: number;
  h: number;
  x: number;
  y: number;
  isDraggable?: boolean;
  maxH?: number;
  maxW?: number;
  minH?: number;
  minW?: number;
  moved?: boolean;
  static?: boolean;
  isResizable?: boolean;
  isBounded?: boolean;
}

export interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  blockWidth: string[];
  props: {
    blockWidth: string[];
    [key: string]:
      | string
      | string[]
      | number
      | { [key: string]: string | number }
      | ISettingsInputItem[]
      | [string, string][];
  };
  columns? : number;
  source? : string;
  children? : T_BlockElement[] | undefined;
  layout : CustomLayout;
  containerId? : string | undefined;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
  onGifSelect?: (url: string) => void;
  selectedGif?: string;
  onStickerSelect?: (url: string) => void;
  selectedSticker?: string;
  selectedVideo?: string;
  onVideoSelect?: (url: string) => void;
}

interface DynamicChildComponentRendererProps {
  source?: string;
  Component: string;
  id: string;
  onGifSelect?: (url: string) => void;
  selectedGif?: string;
  onStickerSelect?: (url: string) => void;
  selectedSticker?: string;
  selectedVideo?: string;
  onVideoSelect?: (url: string) => void;
}

const cellStyles = {
  color: "#4cb9ea",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0",
  transition: "all 0.3s ease",
};

const DynamicChildComponentRenderer: React.FC<DynamicChildComponentRendererProps> = memo(
  ({
    Component,
    id,
    onGifSelect,
    selectedGif,
    onStickerSelect,
    selectedSticker,
    selectedVideo,
    onVideoSelect,
  }) => {
    if (!Component) return null;

    const DynamicComponent = lazy(() =>
      import(`../LineBlocksContent/${Component}/index.ts`).catch(() => ({
        default: () => <div>Компонент не найден</div>,
      })),
    );

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent
          key={id}
          id={id}
          onGifSelect={onGifSelect}
          selectedGif={selectedGif}
          onStickerSelect={onStickerSelect}
          selectedSticker={selectedSticker}
          selectedVideo={selectedVideo}
          onVideoSelect={onVideoSelect}
        />
      </Suspense>
    );
  },
);

const BlockLine = ({
  id,
  onDragStart,
  props,
  onGifSelect,
  selectedGif,
  onStickerSelect,
  selectedSticker,
  selectedVideo,
  onVideoSelect,
}: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();

  const resetAllCellStyles = () => {
    cellRefs.current.forEach((cell) => {
      if (cell) {
        cell.style.position = "";
        cell.style.zIndex = "";
        cell.style.transform = "";
        cell.style.boxShadow = "";
        cell.style.backgroundColor = "";
        cell.style.border = "";
      }
    });
  };

  const cellRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const isDraggingOverRef = useRef(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDrop = (index: number) => {
    if (currentDraggableItem?.props?.isChild) {
      dispatch(
        addChildElement({
          draggableItem: currentDraggableItem,
          idParentElement: id,
          indexChild: index,
        }),
      );

      resetAllCellStyles();
      isDraggingOverRef.current = false;
    }
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!currentDraggableItem?.props.isChild) return;

    resetAllCellStyles();

    const currentCell = cellRefs.current[index];
    if (currentCell) {
      // Только для текущей ячейки применяем стили
      currentCell.style.transform = "scale(1.05)";
      currentCell.style.zIndex = "1";
      currentCell.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
      currentCell.style.backgroundColor = "rgba(76, 185, 234, 0.1)";
      currentCell.style.border = "1px dashed #4cb9ea";
    }

    isDraggingOverRef.current = true;
  };

  const handleDragLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      if (isDraggingOverRef.current) {
        resetAllCellStyles();
        isDraggingOverRef.current = false;
      }
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const renderCells = () => {
    if (!gridContainers.length || !gridContainers[0]?.elements?.activeElements) {
      return [null];
    }

    const childrenElements: JSX.Element[][] = [];
    const index = gridContainers[0].elements.activeElements.findIndex(
      (item: T_BlockElementWithChild) => item.id === id
    );

    if (!props.blockWidth || !Array.isArray(props.blockWidth)) {
      return [null];
    }

    return props.blockWidth.map((width: string, indexBlock: number) => {
      if (index > -1) {
        const children = (gridContainers[0]?.elements?.activeElements[index]?.children ||
          []) as IChildElement[];
        const currentChild = children[indexBlock];

        if (currentChild?.children) {
          childrenElements[indexBlock] = currentChild.children
            .filter(Boolean)
            .map((child) => (
              <DynamicChildComponentRenderer
                key={nanoid()}
                Component={child.name}
                id={child.id}
                onGifSelect={onGifSelect}
                selectedGif={selectedGif}
                onStickerSelect={onStickerSelect}
                selectedSticker={selectedSticker}
                selectedVideo={selectedVideo}
                onVideoSelect={onVideoSelect}
              />
            ));
        }
      }

      return (
        <TableCell
          key={`${id}-${indexBlock}`}
          variant="letterBlockCell"
          ref={(el: HTMLTableCellElement | null) => {
            cellRefs.current[indexBlock] = el;
          }}
          sx={{
            width: width,
            ...cellStyles,
            color: childrenElements[indexBlock] ? "black" : cellStyles.color,
          }}
          onDrop={() => handleDrop(indexBlock)}
          onDragOver={(e) => handleDragOver(e, indexBlock)}
          onDragLeave={handleDragLeave}
        >
          {childrenElements[indexBlock] || "блок"}
        </TableCell>
      );
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Table key={id} onDragLeave={handleDragLeave}>
        <TableBody>
          <TableRow
            data-testid="0"
            id={id}
            draggable
            onDragStart={(e) => onDragStart?.(e, id)}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {renderCells()}
          </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default memo(BlockLine);
