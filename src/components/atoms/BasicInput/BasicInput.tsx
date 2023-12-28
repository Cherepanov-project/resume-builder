import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

interface IBasicInput {
  id: string;
  label?: string;
  placeholder?: string;
  // methods: UseFormMethods<FieldValues> | undefined;
}

const BasicInput: React.FC<IBasicInput> = ({ id, label, placeholder }) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      name={id || 'defaultName'}
      control={control}
      defaultValue="" // Добавляем defaultValue
      render={({ field: { onChange }, fieldState: { error } }) => (
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
          value={watch(id)}
          onChange={onChange}
        />
      )}
    />
  );
};

export default BasicInput;
