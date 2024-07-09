import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

interface IBasicInput {
  id: string;
  label?: string;
  placeholder?: string;
}

const BasicInput: React.FC<IBasicInput> = ({ id, label, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={id || 'defaultName'}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextField
          id={id}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: '20px' }}
          helperText={error ? error.message : null}
          error={!!error}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default BasicInput;
