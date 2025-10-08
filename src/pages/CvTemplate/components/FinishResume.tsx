import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { FC, MouseEventHandler, useRef } from 'react';
import { CvTemplatePDF } from '../../CvTemplatePDF';
import { buttonStyle } from '@assets/style/buttonStyle.ts';
import { useReactToPrint } from 'react-to-print';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

interface IProps {
  handleReset: MouseEventHandler<HTMLButtonElement>;
  nameTemplate: StylesNameKeys;
}

const FinishResume: FC<IProps> = ({ handleReset, nameTemplate }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const theme = useTheme()
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 3 }}>
        <Typography sx={{ marginTop: 4, ml: 10, fontSize: 34 }}>Preview</Typography>
      </Box>
      <Box display="flex" justify-content="center" flexDirection="row" sx={{ mr: '80px' }}>
        <Box>
          <Typography sx={{ mt: 10, fontSize: theme.custom.fontSize60, ml: 10, fontWeight: theme.custom.fontWeightBig }}>
            Congratulations!
          </Typography>
          <Typography sx={{ fontSize: 34, ml: 10, mr: 4 }}>
            Your resume is awesome ready for download. Get it in any format of your choice.
          </Typography>
          <Box sx={{ ml: 10 }}>
            <Button sx={buttonStyle} onClick={handlePrint}>
              Print
            </Button>
          </Box>
        </Box>

        <Paper elevation={12} sx={{ marginLeft: '25px'}}>
          <CvTemplatePDF styleName={nameTemplate} ref={componentRef} />
        </Paper>
      </Box>

      <Box sx={{ mb: 4, ml: 7 }}>
        <Button sx={buttonStyle} onClick={handleReset}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default FinishResume;
