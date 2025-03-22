import { IconButton, Tooltip } from "@mui/material";
import {
  OpenWith,
  Settings,
  ContentCopy,
  Delete,
} from "@mui/icons-material";

import {
  deleteElement,
  copyElement,
} from "@store/LetterBuilderStore/letterLayoutSlice";
import { useAppDispatch } from "@hooks/cvTemplateHooks";
import { Layout } from "react-grid-layout";
import classes from "./ElementToolsPanel.module.scss";
import { clearElements } from "@/store/LetterBuilderStore/styleModule";
import { useCallback } from "react";

type ElementToolsPanelProps = {
  layout: Layout;
  parentLayout?: Layout;
  id?: string;
  elementId?: string;
  setDraggingInnerItem: (isDragging: boolean) => void;
  elClass: string;
  elementsIds: string[];
};

const ElementToolsPanel: React.FC<ElementToolsPanelProps> = ({
  layout,
  id,
  elementId,
  parentLayout,
  setDraggingInnerItem,
  elementsIds,
  elClass,
}) => {
  const dispatch = useAppDispatch();

  const handleSettings = () => {};

  const handleInnerItemDragStart = useCallback((e: React.MouseEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.cursor = "grabbing";
      e.currentTarget.setAttribute("data-dragging", "true");
    }
    setDraggingInnerItem(true);
  }, [setDraggingInnerItem]);

  const handleInnerItemDragEnd = useCallback((e: React.MouseEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.cursor = "";
      e.currentTarget.removeAttribute("data-dragging");
    }
    setDraggingInnerItem(false);
  }, [setDraggingInnerItem]);

  const handleCopy = useCallback(() => {
    if (elementId) {
      dispatch(copyElement({ layout, id, elementId, parentLayout }));
    } else {
      dispatch(copyElement({ layout, id }));
    }
  }, [dispatch, layout, id, elementId, parentLayout]);

  const handleDelete = useCallback(() => {
    if (elementId) {
      dispatch(deleteElement({ layout, id, elementId, parentLayout }));
    } else {
      dispatch(deleteElement({ layout, id }));
    }
    dispatch(clearElements(elementsIds));
  }, [dispatch, layout, id, elementId, parentLayout, elementsIds]);

  return (
    <div className={classes["element-container"]}>
      <div className={classes["tools-panel-left"]}>
        <Tooltip title="Перетащить элемент" arrow>
          <IconButton
            aria-label="Move Item"
            color="primary"
            className={`${elClass} ${classes["drag-handle"]}`}
            onMouseDown={handleInnerItemDragStart}
            onMouseUp={handleInnerItemDragEnd}
            onMouseLeave={handleInnerItemDragEnd}
            onDragStart={(e) => {
              if (e.dataTransfer && e.currentTarget) {
                e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
                e.dataTransfer.effectAllowed = "move";
              }
            }}
          >
            <OpenWith />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes["tools-panel-right"]}>
        <Tooltip title="Дополнительные настройки" arrow>
          <IconButton
            aria-label="Configure Item"
            color="primary"
            onClick={handleSettings}
          >
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Скопировать блок" arrow>
          <IconButton
            aria-label="Copy Item"
            color="primary"
            onClick={handleCopy}
          >
            <ContentCopy />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить блок" arrow>
          <IconButton
            aria-label="Remove Item"
            color="primary"
            onClick={handleDelete}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default ElementToolsPanel;