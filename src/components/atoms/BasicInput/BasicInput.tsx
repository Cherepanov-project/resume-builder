import React from 'react';
import { IBasicInput } from '../../../types';
import TextField from '@mui/material/TextField';

const BasicInput: React.FC<IBasicInput> = ({ id, label }) => {
  return (
    <>
      <TextField id={id} label={label} variant="outlined" size="small" fullWidth />
    </>
  );
};

export default BasicInput;
