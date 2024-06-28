import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { TemplateSingleResume } from './index.ts';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

interface IProps {
  handleButtonClick: (nameResume: StylesNameKeys) => void;
}

const arrResume: StylesNameKeys[] = ['oslo', 'sydney', 'toronto'];

const ChoosingResumeOption: FC<IProps> = ({ handleButtonClick }) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            mt: 4,
            ml: 10,
            mb: 2,
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          step 1 choose right way of info position
        </Typography>
        <Box display="flex" sx={{ ml: 10, mb: 10 }}>
          {arrResume.map((r) => (
            <TemplateSingleResume key={r} handleButtonClick={handleButtonClick} nameResume={r} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ChoosingResumeOption;
