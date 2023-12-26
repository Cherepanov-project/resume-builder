import React from 'react';
import TextField from '@mui/material/TextField';
import classes from './BasicInput.module.scss';

interface IBasicInput {
  id?: string;
  label?: string;
  placeholder?: string;
}

const BasicInput: React.FC<IBasicInput> = ({ id, label }) => {
  return (
    <TextField
      className={classes.basicInput}
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ mb: '20px' }}
    />
  );
};

export default BasicInput;
