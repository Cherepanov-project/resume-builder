import { Box, Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { CvTemplatePDF } from '../CvTemplatePDF';
import { buttonStyle } from '@/assets/style/buttonStyle';
import EditColor from './EditColor';
import { templatePDFStyles } from '../CvTemplatePDF/const';

const EditResumeTemplate: FC = ({ handleButtonClick }) => {
  const [chooseTemplate, setChooseTemplate] = useState(0);

  return (
    <>
      {chooseTemplate != 0 ? (
        <EditColor setChooseTemplate={setChooseTemplate} chooseTemplate={chooseTemplate} />
      ) : (
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
            <Box display="flex" flexDirection="column" sx={{ mr: 5 }}>
              <CvTemplatePDF styleName={'oslo'} />
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
              <CvTemplatePDF styleName={'sydney'} />
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
              <CvTemplatePDF styleName={'toronto'} />
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
