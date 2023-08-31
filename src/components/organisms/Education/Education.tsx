import React from 'react';
import classes from './Education.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';

const Educatione = () => {
  return (
    <Box className={classes.education}>
      <EducationForm />
      <Button variant="contained">Add another Education +</Button>
    </Box>
  );
};

export default Educatione;
