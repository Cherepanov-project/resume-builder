/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Social.module.scss';
import { Box, Button } from '@mui/material';
import SocialForm from '../../molecules/SocialForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useAppSellector, useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addSocial } from '../../../store/cvTemplate/socialSlice';

const Social = () => {
  const numOfSocials = useAppSellector((state: any) => state.social.numOfSocials);
  const dispatch = useAppDispatch();

  const render = numOfSocials.map((item: any, index: number) => {
    // переделать нормально
    console.log(item);
    return (
      <Accordion disableGutters sx={{ mb: 2 }}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Social {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SocialForm />
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Box className={classes.social}>
      {numOfSocials.length === 1 ? <SocialForm /> : render}
      <Button onClick={() => dispatch(addSocial())} variant="contained">
        Add another Social
      </Button>
    </Box>
  );
};

export default Social;
