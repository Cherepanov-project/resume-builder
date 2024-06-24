import { Box, Typography, Button } from '@mui/material';

import { buttonStyle } from '@assets/style/buttonStyle.ts';
import classes from '@pages/CvTemplate/CvTemplate.module.scss';
import { steps } from '@pages/CvTemplate/utils';

const CardForm = ({ handleChangeStep, onSubmit, activeStep }) => {
  const currentCard = steps[activeStep];

  return (
    <Box component="form" className={classes.cvTemlpate__stepContent}>
      <Typography variant="caption" className={classes.cvTemlpate__stepContentLabel}>
        {currentCard.label}
      </Typography>
      {currentCard.form}

      <Box className={classes.cvTemlpate__stepContentButton}>
        <Button
          disabled={currentCard.id === 1}
          onClick={() => handleChangeStep('minus')}
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
  );
};

export default CardForm;
