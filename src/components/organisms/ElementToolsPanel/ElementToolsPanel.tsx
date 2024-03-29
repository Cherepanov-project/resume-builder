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
import { initPanel } from '@/store/landingBuilder/settingsPanelSlice';

type ElementToolsPanelProps = {
  layout: Layout;
  id: string;
};

const ElementToolsPanel: React.FC<ElementToolsPanelProps> = ({ layout, id }) => {
  const dispatch = useAppDispatch();
  // const currentContainer = useAppSellector((state) => state.layout.currentContainer);

  const handleSettings = () => {
    dispatch(initPanel({ type: 'section', sectionID: layout.i, moduleID: '0' }));
  };

  return (
    <div className={classes['tools-panel']}>
      <IconButton aria-label="Move Item" color="primary" className="drag-area">
        <OpenWith />
      </IconButton>
      <IconButton
        aria-label="Decrease Item Width"
        title="Убрать колонку"
        color="primary"
        onClick={() => dispatch(decreaseElementColumns({ layout, id }))}
      >
        <RemoveCircleOutline />
      </IconButton>
      <IconButton
        aria-label="Increase Item Width"
        title="Добавить колонку"
        color="primary"
        onClick={() => dispatch(increaseElementColumns({ layout, id }))}
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
        onClick={() => dispatch(copyElement({ layout, id }))}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        title="Удалить блок"
        color="primary"
        onClick={() => dispatch(deleteElement({ layout, id }))}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ElementToolsPanel;
