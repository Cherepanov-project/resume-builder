import React from 'react';
import classes from './Social.module.scss';
import { Box, Button } from '@mui/material';
import SocialForm from '../../molecules/SocialForm';

const Social = () => {
  return (
    <Box className={classes.social}>
      <SocialForm />
      <Button variant="contained">Add another Social</Button>
    </Box>
  );
};

export default Social;
