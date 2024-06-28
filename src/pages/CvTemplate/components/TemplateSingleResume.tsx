import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { buttonStyle } from '@assets/style/buttonStyle.ts';

import oslo from '../resumeTemplates/oslo-resume-templates.avif';
import toronto from '../resumeTemplates/toronto-resume-templates.avif';
import sydney from '../resumeTemplates/sydney-resume-templates.avif';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

const objResume = {
  oslo,
  toronto,
  sydney,
};

interface IProps {
  nameResume: StylesNameKeys;
  handleButtonClick: (nameResume: StylesNameKeys) => void;
}

const TemplateSingleResume: FC<IProps> = ({ nameResume, handleButtonClick }) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
      <img src={objResume[nameResume]} alt={nameResume} style={{ width: '500px' }} />
      <Button sx={buttonStyle} onClick={() => handleButtonClick(nameResume)}>
        Choose
      </Button>
    </Box>
  );
};

export default TemplateSingleResume;
