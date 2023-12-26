import { IconButton } from '@mui/material';
import { OpenWith, Settings, ContentCopy, Delete } from '@mui/icons-material';

import classes from './ElementToolsPanel.module.scss';

interface HeaderComponentProps {
  onDragStart: () => void;
  onDragStop: () => void;
  onAddItem: () => void;
  onRemoveItem: () => void;
}

const ElementToolsPanel: React.FC<HeaderComponentProps> = ({
  onDragStart,
  onDragStop,
  onAddItem,
  onRemoveItem,
}) => {
  return (
    <div className={classes.header}>
      <IconButton
        aria-label="Move Item"
        color="primary"
        className="Move Item"
        onMouseEnter={onDragStart}
        onMouseLeave={onDragStop}
      >
        <OpenWith />
      </IconButton>
      <IconButton aria-label="Configure Item" color="primary" className="Configure Item">
        <Settings />
      </IconButton>
      <IconButton aria-label="Add Item" color="primary" className="Add Item" onClick={onAddItem}>
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        color="primary"
        className="Remove Item"
        onClick={onRemoveItem}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ElementToolsPanel;
