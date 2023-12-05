import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import classes from './BasicDatePicker.module.scss';
import dayjs from 'dayjs'; // Import the Day.js library

import { Controller, useFormContext } from 'react-hook-form';

interface IBasicDatePicker {
  id?: string;
  label?: string;
}

const BasicDatePicker: React.FC<IBasicDatePicker> = ({ id, label }) => {
  const { control } = useFormContext();

  const initialDate = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={id || 'defaultName'}
        control={control}
        defaultValue={initialDate}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            className={classes.basicDatePicker}
            label={label}
            slotProps={{
              textField: {
                helperText: error ? error.message : null,
                size: 'small',
                error: !!error,
              },
            }}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
