import { Table, TableBody, TableRow, TableCell, ThemeProvider } from "@mui/material";
import { useState, useEffect, Suspense, lazy, memo, useRef } from "react";
import { useTypedSelector } from "../../hooks/cvTemplateHooks";
import { useAppDispatch } from "../../hooks/cvTemplateHooks";
import { addChildElement } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";
import { ISettingsInputItem } from "../../types/landingBuilder";
import ComponentPreloader from "../ComponentPreloader";
import { nanoid } from "nanoid";
import theme from "./Theme";
import React from "react";

interface IChildElement {
  id: string;
  name: string;
  children?: IChildElement[];
}

interface LineCardProps {
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
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onDragOver?: (e: React.DragEvent) => void;
}

interface DynamicChildComponentRendererProps {
  source?: string;
  Component: string;
  id: string;
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
  transition: 'all 0.3s ease',
};

const DynamicChildComponentRenderer: React.FC<DynamicChildComponentRendererProps> = memo(
  ({ Component, id }) => {
    if (!Component) return null;

    const DynamicComponent = lazy(() => 
      import(`../LineBlocksContent/${Component}/index.ts`)
        .catch(() => ({ default: () => <div>Компонент не найден</div> }))
    );

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent key={id} id={id} />
      </Suspense>
    );
  }
);

const BlockLine = ({ id, onDragStart, props }: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();
  
  const cellRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const isDraggingOverRef = useRef(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [videoCells, setVideoCells] = useState<Record<number, boolean>>({});

  const handleDrop = (index: number) => {
    if (currentDraggableItem?.props?.isChild) {
      const isVideo = currentDraggableItem?.name?.toLowerCase().includes("video");
      
      dispatch(addChildElement({
        draggableItem: currentDraggableItem,
        idParentElement: id,
        indexChild: index,
        isVideo
      }));
  
      const cell = cellRefs.current[index];
      if (isVideo && cell) {
        setVideoCells(prev => ({ ...prev, [index]: true }));
        console.log(videoCells);
        
        try {
          const currentWidth = cell.getBoundingClientRect().width;
          if (currentWidth < 500) {
            cell.style.width = '520px';
            cell.style.minWidth = '520px';
          }

        } catch (error) {
          console.error('Ошибка при изменении размера ячейки:', error);
        }
      }
    }
  
    resetAllCellStyles();
    isDraggingOverRef.current = false;
    logContentSizes();
  };

  useEffect(() => {
    console.log(videoCells);
  }, [videoCells])
  

  const logContentSizes = () => {
    cellRefs.current.forEach((item, index) => {
      if (item) {
        const rect = item.getBoundingClientRect().width;
        console.log(`Содержимое ${index}:`);console.log("Ширина:", rect);
      }
    });
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!currentDraggableItem?.props.isChild) return;

    if (!isDraggingOverRef.current) {
      isDraggingOverRef.current = true;
      cellRefs.current.forEach(cell => {
        if (cell) {
          cell.style.position = 'relative';
          cell.style.zIndex = '-10';
        }
      });
    }

    const currentCell = cellRefs.current[index];
    if (currentCell) {
      currentCell.style.transform = 'scale(1.05)';
      currentCell.style.zIndex = '1';
      currentCell.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
      currentCell.style.backgroundColor = 'rgba(76, 185, 234, 0.1)';
      currentCell.style.border = '1px dashed #4cb9ea';
    }
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

  const resetAllCellStyles = () => {
    cellRefs.current.forEach(cell => {
      if (cell) {
        cell.style.position = '';
        cell.style.zIndex = '';
        cell.style.transform = '';
        cell.style.boxShadow = '';
        cell.style.backgroundColor = '';
        cell.style.border = '';
      }
    });
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
      (item: { id: string }) => item.id === id
    );
  
    if (!props.blockWidth || !Array.isArray(props.blockWidth)) {
      return [null];
    }
  
    return props.blockWidth.map((width: string, indexBlock: number) => {
      const isVideoCells = videoCells[indexBlock]; // Состояние гарантированно обновлено
      const cellWidth = isVideoCells ? "520px" : width;
  
      // console.log("Текущее состояние videoCells:", videoCells);
      // console.log(`Индекс блока ${indexBlock}, isVideoCells:`, isVideoCells);
  
      if (index > -1) {
        const children = (gridContainers[0]?.elements?.activeElements[index]?.children || []) as IChildElement[];
        const currentChild = children[indexBlock];
  
        if (currentChild?.children) {
          childrenElements[indexBlock] = currentChild.children
            .filter(Boolean)
            .map((child) => (
              <DynamicChildComponentRenderer
                key={nanoid()}
                Component={child.name}
                id={child.id}
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
            width: cellWidth,
            minWidth: cellWidth,
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
            id={id}
            draggable
            onDragStart={(e) => onDragStart?.(e, id)}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
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