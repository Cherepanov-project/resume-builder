import { Box, Typography, Button } from '@mui/material';
import { cloneElement, useEffect, useState } from 'react';

import { buttonStyle } from '@assets/style/buttonStyle.ts';
import classes from '@pages/CvTemplate/CvTemplate.module.scss';
import { steps } from '@pages/CvTemplate/utils';
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

interface CardFormType {
    handleChangeStep: (direction: 'plus' | 'minus') => void;
    onSubmit: () => void;
    activeStep: number;
    setShowElement: (show: boolean) => void;
    nameTemplate: string;
  } 


const CardForm: React.FC<CardFormType> = ({ handleChangeStep, onSubmit, activeStep, setShowElement, nameTemplate }) => {
  const currentCard = steps[activeStep];
  const preview = cloneElement(currentCard.preview, {styleName: nameTemplate})
  const style: StyleOptionType = templatePDFStyles[nameTemplate as keyof typeof templatePDFStyles].style;
  const structure = templatePDFStyles[nameTemplate as keyof typeof templatePDFStyles].structure;
  const isWithSidebar = structure.sidebar.isPresented;

  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    const handlePrintScreenDown = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.key === 'Meta') {
        setIsBlurred(true)
      }

      if (e.key !== 'PrintScreen' && e.key !== 'Meta' && e.key !== 'Shift') {
        setIsBlurred(false)
      }
    }

    const handlePrintScreenUp = (e: KeyboardEvent) => {
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
            onClick={currentCard.id === (style.MainPage.name === 'chrono' ? 5 : 6) ?
              style.MainPage.name === 'chrono' ? () => {onSubmit(); handleChangeStep('plus')} : onSubmit :
              () => handleChangeStep('plus')}
            variant="contained"
            sx={buttonStyle}
          >
            {currentCard.id === (style.MainPage.name === 'chrono' ? 5 : 6) ? 'Finish' : 'Next session'}
          </Button>
        </Box>
      </Box>
      {currentCard.id !== 6 && <Box sx={{mt: '50px', position: 'relative', overflow: 'hidden'}} className={`${classes.cvTemlpate__stepContent} ${isBlurred && classes.blur}`}>
        {style.MainPage.name === 'chrono' && currentCard.id !== 1 && (
          <Box 
            sx={{ 
              position: 'absolute', 
              backgroundColor: '#e2e2e2', 
              width: '2px', 
              top: 0, 
              bottom: 0, 
              left: '134px' 
            }} 
          />
        )}
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
      </Box>}
    </Box>
  );
};

export default CardForm;
