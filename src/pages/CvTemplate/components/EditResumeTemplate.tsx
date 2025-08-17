import { Box, Button, Typography, useTheme } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { buttonStyle } from '@assets/style/buttonStyle.ts';
import EditColor from './EditColor.tsx';
import { templatePDFStyles } from '../../CvTemplatePDF/const';
import oslo from '../resumeTemplates/oslo-resume-templates.avif';
import toronto from '../resumeTemplates/toronto-resume-templates.avif';
import sydney from '../resumeTemplates/sydney-resume-templates.avif';

interface IProps {
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const EditResumeTemplate: FC<IProps> = ({ handleButtonClick }) => {
  const [chooseTemplate, setChooseTemplate] = useState(0);
  const theme = useTheme()
  return (
    <>
      {chooseTemplate != 0 ? (
        <EditColor setChooseTemplate={setChooseTemplate} />
      ) : (
        <Box>
          <Typography
            sx={{
              mt: 4,
              ml: 10,
              mb: 2,
              fontSize: 30,
              fontWeight: theme.custom.fontWeightBig,
            }}
          >
            step 1 choose right way of info position
          </Typography>
          <Box display="flex" sx={{ ml: 10, mb: 10 }}>
            <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
              <img src={`${oslo}`} alt={'oslo'} style={{ width: '500px' }} />
              <Button
                sx={{ ...buttonStyle }}
                onClick={() => {
                  templatePDFStyles.custom = JSON.parse(JSON.stringify(templatePDFStyles.oslo));
                  setChooseTemplate(1);
                }}
              >
                Choose
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
              <img src={`${sydney}`} alt={'sydney'} style={{ width: '500px' }} />
              <Button
                sx={buttonStyle}
                onClick={() => {
                  templatePDFStyles.custom = JSON.parse(JSON.stringify(templatePDFStyles.sydney));
                  setChooseTemplate(2);
                }}
              >
                Choose
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
              <img src={`${toronto}`} alt={'toronto'} style={{ width: '500px' }} />
              <Button
                sx={buttonStyle}
                onClick={() => {
                  templatePDFStyles.custom = JSON.parse(JSON.stringify(templatePDFStyles.toronto));
                  setChooseTemplate(3);
                }}
              >
                Choose
              </Button>
            </Box>
          </Box>
          <Button sx={buttonStyle} onClick={handleButtonClick}>
            Back
          </Button>
        </Box>
      )}
    </>
  );
};

export default EditResumeTemplate;
