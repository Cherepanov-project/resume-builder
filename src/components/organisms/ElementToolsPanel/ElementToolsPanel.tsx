import { IconButton } from '@mui/material';
import {
  OpenWith,
  Settings,
  ContentCopy,
  Delete,
  AddCircleOutline,
  RemoveCircleOutline,
} from '@mui/icons-material';

import {
  deleteElement,
  copyElement,
  increaseElementColumns,
  decreaseElementColumns,
} from '@store/landingBuilder/layoutSlice';
import { useAppDispatch } from '@hooks/cvTemplateHooks';
import { Layout } from 'react-grid-layout';

import classes from './ElementToolsPanel.module.scss';

type ElementToolsPanelProps = {
  layout: Layout;
};

const ElementToolsPanel: React.FC<ElementToolsPanelProps> = ({ layout }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes['tools-panel']}>
      <IconButton aria-label="Move Item" color="primary" className="drag-area">
        <OpenWith />
      </IconButton>
      <IconButton
        aria-label="Decrease Item Width"
        title="Убрать колонку"
        color="primary"
        onClick={() => dispatch(decreaseElementColumns(layout))}
      >
        <RemoveCircleOutline />
      </IconButton>
      <IconButton
        aria-label="Increase Item Width"
        title="Добавить колонку"
        color="primary"
        onClick={() => dispatch(increaseElementColumns(layout))}
      >
        <AddCircleOutline />
      </IconButton>
      <IconButton
        aria-label="Configure Item"
        title="Дополнительные настройки"
        color="primary"
        onClick={() => console.log(layout)}
      >
        <Settings />
      </IconButton>
      <IconButton
        aria-label="Copy Item"
        title="Скопировать блок"
        color="primary"
        onClick={() => dispatch(copyElement(layout))}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        title="Удалить блок"
        color="primary"
        onClick={() => dispatch(deleteElement(layout))}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ElementToolsPanel;
