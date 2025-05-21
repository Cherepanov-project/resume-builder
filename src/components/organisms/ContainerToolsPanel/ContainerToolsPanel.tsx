import { IconButton } from "@mui/material";
import { ContentCopy, Delete, ArrowUpward, ArrowDownward } from "@mui/icons-material";

import {
  copyGridContainer,
  deleteGridContainer,
  moveDownGridContainer,
  moveUpGridContainer,
} from "@store/landingBuilder/layoutSlice";
import { useAppDispatch } from "@hooks/cvTemplateHooks";

import classes from "./ContainerToolsPanel.module.scss";

type ContainerToolsPanelProps = {
  id: string;
};

const ContainerToolsPanel: React.FC<ContainerToolsPanelProps> = (id: ContainerToolsPanelProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes["tools-panel"]}>
      <IconButton
        aria-label="Move Up Container"
        title="Сдвинуть вверх"
        color="primary"
        onClick={() => dispatch(moveUpGridContainer(id))}
      >
        <ArrowUpward />
      </IconButton>
      <IconButton
        aria-label="Move Down Container"
        title="Сдвинуть вниз"
        color="primary"
        onClick={() => dispatch(moveDownGridContainer(id))}
      >
        <ArrowDownward />
      </IconButton>
      <IconButton
        aria-label="Copy Container"
        title="Скопировать блок"
        color="primary"
        onClick={() => dispatch(copyGridContainer(id))}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        title="Удалить блок"
        color="primary"
        onClick={() => dispatch(deleteGridContainer(id))}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ContainerToolsPanel;
