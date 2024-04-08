import * as React from 'react';
import Box from '@mui/material/Box';
import { default as Rate } from '@mui/material/Rating';

const BasicRating: React.FC = () => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rate
        name="simple-controlled"
        onChange={(newValue) => {
          console.log(newValue);
        }}
      />
    </Box>
  );
};
export default BasicRating;
