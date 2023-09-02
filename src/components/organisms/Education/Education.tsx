import React, { useState } from 'react';
import classes from './Education.module.scss';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Education = () => {
  const [count, setCount] = useState([1]);

  const render = count.map((item, index) => {
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
      {count.length === 1 ? <EducationForm /> : render}
      <Button onClick={() => setCount((prev) => [...prev, 1])} variant="contained">
        Add another Education
      </Button>
    </Box>
  );
};

export default Education;
