/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Experience.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ExperienceForm from '../../molecules/ExperienceForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useAppSellector, useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addExperience } from '../../../store/cvTemplate/experienceSlice';

const Experience = () => {
  const numOfExperiences = useAppSellector((state: any) => state.experience.numOfExperinces);
  const dispatch = useAppDispatch();

  const render = numOfExperiences.map((item: any, index: number) => {
    // переделать нормально
    console.log(item);
    return (
      <Accordion disableGutters sx={{ mb: 2 }}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Experience {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExperienceForm />
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Box className={classes.experience}>
      {numOfExperiences.length === 1 ? <ExperienceForm /> : render}
      <Button onClick={() => dispatch(addExperience())} variant="contained">
        Add another Experience
      </Button>
    </Box>
  );
};

export default Experience;
