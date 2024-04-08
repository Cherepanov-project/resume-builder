import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { default as Tool } from '@mui/material/Tooltip';
import React from 'react';

const BasicTooltip: React.FC = () => {
  return (
    <Tool title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tool>
  );
};

export default BasicTooltip;
