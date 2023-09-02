import React from 'react';
import { Box, Button } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import classes from './Hobbies.module.scss';

const Hobbies = () => {
  return (
    <Box className={classes.hobbies}>
      <Box>
        <BasicInput label="Your hobby" />
      </Box>
      <Button variant="contained">Add another Hobby</Button>
    </Box>
  );
};

export default Hobbies;
