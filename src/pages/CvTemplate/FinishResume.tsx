import { Box, Button, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import { CvTemplatePDF } from '../CvTemplatePDF';
import { buttonStyle } from '@/assets/style/buttonStyle';
import { useReactToPrint } from 'react-to-print';
interface IProps {
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  handleReset: React.MouseEventHandler<HTMLButtonElement>;
}

const FinishResume: FC<IProps> = ({ handleButtonClick, handleReset }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 3 }}>
        <Typography sx={{ marginTop: 4, ml: 7, fontSize: 34 }}>Preview</Typography>
        <Button sx={{ mr: 10 }} onClick={handleButtonClick}>
          Edit
        </Button>
      </Box>
      <Box display="flex" justify-content="center" flexDirection="row" sx={{ mr: '80px' }}>
        <Box>
          <Typography sx={{ mt: 10, fontSize: 60, ml: 10, fontWeight: 700 }}>
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

        <CvTemplatePDF styleName={'toronto'} ref={componentRef} />
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
