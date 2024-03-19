import { IconButton } from '@mui/material';
import {
  // Settings,
  ContentCopy,
  Delete,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';

import {
  copyGridContainer,
  deleteGridContainer,
  moveDownGridContainer,
  moveUpGridContainer,
} from '@store/landingBuilder/layoutSlice';
import { useAppDispatch } from '@hooks/cvTemplateHooks';
// import { Layout } from 'react-grid-layout';

import classes from './ContainerToolsPanel.module.scss';
// import { initPanel } from '@/store/landingBuilder/settingsPanelSlice';

// type ContainerToolsPanelProps = {
//   layout: Layout;
// };

const ContainerToolsPanel: React.FC /*<ContainerToolsPanelProps>*/ = (/*{ layout }*/) => {
  const dispatch = useAppDispatch();
  // const currentContainer = useAppSellector((state) => state.layout.currentContainer);

  // const handleSettings = () => {
  //   dispatch(initPanel({ type: 'section', sectionID: layout.i, moduleID: '0' }));
  // };

  return (
    <div className={classes['tools-panel']}>
      <IconButton
        aria-label="Move Up Container"
        title="Сдвинуть вверх"
        color="primary"
        onClick={() => dispatch(moveUpGridContainer())}
      >
        <ArrowUpward />
      </IconButton>
      <IconButton
        aria-label="Move Down Container"
        title="Сдвинуть вниз"
        color="primary"
        onClick={() => dispatch(moveDownGridContainer())}
      >
        <ArrowDownward />
      </IconButton>
      {/* <IconButton
        aria-label="Configure Item"
        title="Дополнительные настройки"
        color="primary"
        onClick={handleSettings}
      >
        <Settings />
      </IconButton> */}
      <IconButton
        aria-label="Copy Container"
        title="Скопировать блок"
        color="primary"
        onClick={() => dispatch(copyGridContainer())}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        title="Удалить блок"
        color="primary"
        onClick={() => dispatch(deleteGridContainer())}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ContainerToolsPanel;
