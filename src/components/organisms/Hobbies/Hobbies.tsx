import React from 'react';
import { Box, Button } from '@mui/material';
import BasicH2 from '../../atoms/BasicH2';
import BasicInput from '../../atoms/BasicInput';
import classes from './Hobbies.module.scss';

const Hobbies = () => {
  return (
    <Box className={classes.hobbies}>
      <Box>
        <BasicH2 text="Hobbies" />
        <BasicInput label="Your hobby" />
      </Box>
      <Button variant="contained">Add another Hobby</Button>
    </Box>
  );
};

export default Hobbies;
