import React from 'react';
import { Box } from '@mui/material';
import BasicH2 from '../../atoms/BasicH2';
import BasicInput from '../../atoms/BasicInput';

const SocialForm = () => {
  return (
    <Box>
      <BasicH2 text="Social links" />
      <BasicInput id="social-name" label="Social Name" />
      <BasicInput id="social-link" label="Social Link" />
    </Box>
  );
};

export default SocialForm;
