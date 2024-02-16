import React from 'react';
import classes from './BasicTextarea.module.scss';
import { Controller, useFormContext } from 'react-hook-form';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FormHelperText from '@mui/material/FormHelperText';

interface IBasicTextarea {
  id?: string;
  label?: string;
  placeholder?: string;
}

const BasicTextarea: React.FC<IBasicTextarea> = ({ id, placeholder }) => {
  const { control } = useFormContext();

  return (
    <>
      <label className={classes.basicTextarea} htmlFor={id}>
        <Controller
          name={id || 'defaultName'}
          control={control}
          defaultValue="" // Добавляем defaultValue
          render={({ field, fieldState: { error } }) => (
            <>
              <TextareaAutosize
                className={
                  !error ? classes.basicTextarea__textarea : classes.basicTextarea__textareaError
                }
                id={id}
                placeholder={placeholder}
                {...field}
              />
              {error && <FormHelperText error>{error.message}</FormHelperText>}
            </>
          )}
        />
      </label>
    </>
  );
};

export default BasicTextarea;
