import * as React from 'react';
import Box from '@mui/material/Box';
import {default as Rate} from '@mui/material/Rating';
import { T_BlockElement } from '@/types/landingBuilder';

const BasicRating: React.FC<T_BlockElement> = ( props ) => {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
       <Rate
        name="simple-controlled"
        value={props.value}
        onChange={(event, newValue) => {
          console.log(newValue)
        }}
      />      
    </Box>
  );
}
export default BasicRating;