import { T_BlockElement } from '@/types/landingBuilder';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {default as Tool} from '@mui/material/Tooltip';
import React from 'react';

const BasicTooltip: React.FC<T_BlockElement> = () => {
  return (
    <Tool title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tool>
  );
}

export default BasicTooltip;