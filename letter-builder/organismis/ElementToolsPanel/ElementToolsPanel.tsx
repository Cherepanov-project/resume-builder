import { IconButton, useTheme } from "@mui/material";
import {
  OpenWith,
  Settings,
  ContentCopy,
  Delete,
  // AddCircleOutline,
  // RemoveCircleOutline,
} from "@mui/icons-material";

import {
  deleteElement,
  copyElement,
  // increaseElementColumns,
  // decreaseElementColumns,
} from "@store/LetterBuilderStore/letterLayoutSlice";
import { useAppDispatch } from "@hooks/cvTemplateHooks";
import { Layout } from "react-grid-layout";
import classes from "./ElementToolsPanel.module.scss";
import { clearElements } from "@/store/LetterBuilderStore/styleModule";

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
  const theme = useTheme()
  const dispatch = useAppDispatch();

  const handleSettings = () => {};

  const handleInnerItemDragStart = () => {
    setDraggingInnerItem(true);
  };

  const handleInnerItemDragEnd = () => {
    setDraggingInnerItem(false);
  };

  return (
    <div className={classes["element-container"]}>
      <div className={classes["tools-panel-left"]}>
        <IconButton
          aria-label="Move Item"
          color={theme.custom.defaultColor}
          className={elClass}
          onMouseDown={handleInnerItemDragStart}
          onMouseUp={handleInnerItemDragEnd}
        >
          <OpenWith />
        </IconButton>
      </div>
      <div className={classes["tools-panel-right"]}>
        <IconButton
          aria-label="Configure Item"
          title="Дополнительные настройки"
          color={theme.custom.defaultColor}
          onClick={handleSettings}
        >
          <Settings />
        </IconButton>
        <IconButton
          aria-label="Copy Item"
          title="Скопировать блок"
          color={theme.custom.defaultColor}
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
          color={theme.custom.defaultColor}
          onClick={() => {
            if (elementId) {
              dispatch(deleteElement({ layout, id, elementId, parentLayout }));
            } else {
              dispatch(deleteElement({ layout, id }));
            }

            dispatch(clearElements(elementsIds));
          }}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ElementToolsPanel;
