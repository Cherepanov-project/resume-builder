import { Box, Typography, Button } from '@mui/material';
import { cloneElement, useEffect, useState } from 'react';

import { buttonStyle } from '@assets/style/buttonStyle.ts';
import classes from '@pages/CvTemplate/CvTemplate.module.scss';
import { steps } from '@pages/CvTemplate/utils';
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const CardForm = ({ handleChangeStep, onSubmit, activeStep, setShowElement, nameTemplate }) => {
  const currentCard = steps[activeStep];
  const preview = cloneElement(currentCard.preview, {styleName: nameTemplate})
  const style: StyleOptionType = templatePDFStyles[nameTemplate].style;
  const structure = templatePDFStyles[nameTemplate].structure;
  const isWithSidebar = structure.sidebar.isPresented;

  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    const handlePrintScreenDown = (e) => {
      if (e.key === 'PrintScreen' || e.key === 'Meta') {
        setIsBlurred(true)
      }

      if (e.key !== 'PrintScreen' && e.key !== 'Meta' && e.key !== 'Shift') {
        setIsBlurred(false)
      }
    }

    const handlePrintScreenUp = (e) => {
      if (e.key === 'PrintScreen') {
        setIsBlurred(false)
      }
    }

    const handleBlurOff = () => {
      setIsBlurred(false)
    }

    window.addEventListener('keydown', handlePrintScreenDown)
    window.addEventListener('keyup', handlePrintScreenUp)
    window.addEventListener('click', handleBlurOff)

    return () => {
      window.removeEventListener('keydown', handlePrintScreenDown)
      window.removeEventListener('keyup', handlePrintScreenUp)
      window.removeEventListener('click', handleBlurOff)
    }
  }, [])

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box component="form" className={classes.cvTemlpate__stepContent}>
        <Typography variant="caption" className={classes.cvTemlpate__stepContentLabel}>
          {currentCard.label}
        </Typography>
        {currentCard.form}

        <Box className={classes.cvTemlpate__stepContentButton}>
          <Button
            onClick={() => {
              if (currentCard.id !== 1) {
                handleChangeStep('minus');
              }
              if (currentCard.id === 1) {
                setShowElement(true);
              }
            }}
            sx={{ mt: 1, mr: 1 }}
          />

          <Button
            onClick={currentCard.id === 6 ? onSubmit : () => handleChangeStep('plus')}
            variant="contained"
            sx={buttonStyle}
          >
            {currentCard.id === 6 ? 'Finish' : 'Next session'}
          </Button>
        </Box>
      </Box>
      {currentCard.id !== 6 ? <Box sx={{mt: '50px'}} className={`${classes.cvTemlpate__stepContent} ${isBlurred && classes.blur}`}>
        <Typography variant="caption" className={classes.cvTemlpate__stepContentLabel}>
          <Typography variant="h5">Preview</Typography>
        </Typography>
        {isWithSidebar && activeStep === 0 ? (
          <Box style={style.SidebarPage}>
            {preview}
          </Box>
        ) : (
          <>
            {preview}
          </>
        )}
      </Box> : null}
    </Box>
  );
};

export default CardForm;
