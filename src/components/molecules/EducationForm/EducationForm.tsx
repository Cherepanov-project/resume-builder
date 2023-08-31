import React from 'react';
import { Box, Stack } from '@mui/material';
import BasicH2 from '../../atoms/BasicH2';
import BasicInput from '../../atoms/BasicInput';
import BasicDatePicker from '../../atoms/BasicDatePicker';
import classes from './EducationForm.module.scss';

const EducationForm = () => {
  return (
    <Box>
      <BasicH2 text="Education" />
      <BasicInput id="study" label="Field of study" />
      <BasicInput id="degree" label="Degree" />
      <BasicInput id="school" label="School" />
      <Stack className={classes.educationForm} spacing={2} direction="row">
        <BasicDatePicker label="From" />
        <BasicDatePicker label="To" />
      </Stack>
    </Box>
  );
};

export default EducationForm;
