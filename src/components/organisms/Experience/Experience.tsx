import React from 'react';
import classes from './Experience.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ExperienceForm from '../../molecules/ExperienceForm';

const Experience = () => {
  return (
    <Box className={classes.experience}>
      <ExperienceForm />
      <Button variant="contained">Add another Experience</Button>
    </Box>
  );
};

export default Experience;
