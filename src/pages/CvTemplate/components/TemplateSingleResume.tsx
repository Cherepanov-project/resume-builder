import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { buttonStyle } from '@assets/style/buttonStyle.ts';

import {
  oslo,
  classicCustomized,
  modern,
  sydney,
  toronto,
  defaultCustomized,
  chrono,
  metro,
} from '../resumeTemplates/index';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

const objResume = {
  oslo,
  toronto,
  sydney,
  modern,
  classicCustomized,
  defaultCustomized,
  chrono,
  metro
};

interface IProps {
  nameResume: StylesNameKeys;
  handleButtonClick: (nameResume: StylesNameKeys) => void;
}

const TemplateSingleResume: FC<IProps> = ({ nameResume, handleButtonClick }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        src={objResume[nameResume as keyof typeof objResume]}
        alt={nameResume}
        style={{ width: '500px', height: '707px' }}
      />
      <Button
        style={{ width: '500px' }}
        sx={buttonStyle}
        onClick={() => handleButtonClick(nameResume)}
      >
        Choose
      </Button>
    </Box>
  );
};

export default TemplateSingleResume;
