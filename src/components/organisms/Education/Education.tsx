import React from 'react';
import classes from './Education.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';

const Education = () => {
  return (
    <Box className={classes.education}>
      <EducationForm />
      <Button variant="contained">Add another education +</Button>
    </Box>
  );
};

export default Education;
