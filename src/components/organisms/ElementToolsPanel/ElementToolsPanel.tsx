import { IconButton } from "@mui/material";
import {
  OpenWith,
  Settings,
  ContentCopy,
  Delete,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";

import {
  deleteElement,
  copyElement,
  increaseElementColumns,
  decreaseElementColumns,
} from "@store/landingBuilder/layoutSlice";
import { useAppDispatch } from "@hooks/cvTemplateHooks";
import { Layout } from "react-grid-layout";

import classes from "./ElementToolsPanel.module.scss";
import { initPanel } from "@/store/landingBuilder/settingsPanelSlice";

type ElementToolsPanelProps = {
  layout: Layout;
  parentLayout?: Layout;
  id?: string;
  elementId?: string;
  setDraggingInnerItem: (isDragging: boolean) => void;
  elClass: string;
};

const ElementToolsPanel: React.FC<ElementToolsPanelProps> = ({
  layout,
  id,
  elementId,
  parentLayout,
  setDraggingInnerItem,
  elClass,
}) => {
  const dispatch = useAppDispatch();

  const handleSettings = () => {
    dispatch(initPanel({ type: "section", sectionID: layout.i, moduleID: "0" }));
  };

  const handleInnerItemDragStart = () => {
    setDraggingInnerItem(true);
  };

  const handleInnerItemDragEnd = () => {
    setDraggingInnerItem(false);
  };

  return (
    <div className={classes["element-container"]}>
      <div className={classes["tools-panel"]}>
        <IconButton
          aria-label="Move Item"
          color="primary"
          className={elClass}
          onMouseDown={handleInnerItemDragStart}
          onMouseUp={handleInnerItemDragEnd}
        >
          <OpenWith />
        </IconButton>
        <IconButton
          aria-label="Decrease Item Width"
          title="Убрать колонку"
          color="primary"
          onClick={() => {
            if (elementId) {
              dispatch(decreaseElementColumns({ layout, id, elementId, parentLayout }));
            } else {
              dispatch(decreaseElementColumns({ layout, id }));
            }
          }}
        >
          <RemoveCircleOutline />
        </IconButton>
        <IconButton
          aria-label="Increase Item Width"
          title="Добавить колонку"
          color="primary"
          onClick={() => {
            if (elementId) {
              dispatch(increaseElementColumns({ layout, id, elementId, parentLayout }));
            } else {
              dispatch(increaseElementColumns({ layout, id }));
            }
          }}
        >
          <AddCircleOutline />
        </IconButton>
        <IconButton
          aria-label="Configure Item"
          title="Дополнительные настройки"
          color="primary"
          onClick={handleSettings}
        >
          <Settings />
        </IconButton>
        <IconButton
          aria-label="Copy Item"
          title="Скопировать блок"
          color="primary"
          onClick={() => {
            if (elementId) {
              dispatch(copyElement({ layout, id, elementId, parentLayout }));
            } else {
              dispatch(copyElement({ layout, id }));
            }
          }}
        >
          <ContentCopy />
        </IconButton>
        <IconButton
          aria-label="Remove Item"
          title="Удалить блок"
          color="primary"
          onClick={() => {
            if (elementId) {
              dispatch(deleteElement({ layout, id, elementId, parentLayout }));
            } else {
              dispatch(deleteElement({ layout, id }));
            }
          }}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ElementToolsPanel;
