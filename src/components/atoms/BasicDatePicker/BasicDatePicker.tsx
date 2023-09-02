import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import classes from './BasicDatePicker.module.scss';

interface IBasicDatePicker {
  id?: string;
  label?: string;
}

const BasicDatePicker: React.FC<IBasicDatePicker> = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={classes.basicDatePicker}
        label={label}
        slotProps={{ textField: { size: 'small' } }}
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
