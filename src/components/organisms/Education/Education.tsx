/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from './Education.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useAppSellector, useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addEducation } from '../../../store/cvTemplate/educationSlice';

const Education = () => {
  const numOfEducations = useAppSellector((state: any) => state.education.numOfEducations);
  const dispatch = useAppDispatch();

  const render = numOfEducations.map((item: any, index: number) => {
    // переделать нормально
    console.log(item);
    return (
      <Accordion disableGutters sx={{ mb: 2 }}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Education {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EducationForm />
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Box className={classes.education}>
      {numOfEducations.length === 1 ? <EducationForm /> : render}
      <Button onClick={() => dispatch(addEducation())} variant="contained">
        Add another Education
      </Button>
    </Box>
  );
};

export default Education;
