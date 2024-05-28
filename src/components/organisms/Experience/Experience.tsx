import classes from './Experience.module.scss';
import { Button, Box } from '@mui/material';
import ExperienceForm from '@molecules/ExperienceForm';
import { buttonStyle } from '@assets/style/buttonStyle';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

type ExperienceType = {
  'work-title': string;
  company: string;
  'experience-from-year': string;
  'experience-to-year': string;
  'company-info': string;
};

const defaultValue: ExperienceType = {
  'work-title': '',
  company: '',
  'experience-from-year': '',
  'experience-to-year': '',
  'company-info': '',
};

const Experience = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('experienceData', [...getValues('experienceData'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [
        ...getValues('experienceData').slice(0, index),
        ...getValues('experienceData').slice(index + 1),
      ];
    } else {
      resp = [...getValues('experienceData').slice(index + 1)];
    }
    setValue('experienceData', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box className={classes.experience}>
      {getValues('experienceData').map((_: ExperienceType, index: number) => {
        const fieldName = `experienceData[${index}]`;

        return (
          <Box key={index}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="AccordionSummary__content">
                <Typography>Experience {index + 1}</Typography>

                {index > 0 ? (
                  <Button onClick={() => removeField(index)} variant="contained" sx={buttonStyle}>
                    Remove
                  </Button>
                ) : null}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <fieldset name={fieldName} key={fieldName}>
                <ExperienceForm fieldName={fieldName} />
              </fieldset>
            </AccordionDetails>
          </Box>
        );
      })}
      <Button
        onClick={() => {
          addField();
        }}
        variant="contained"
        sx={buttonStyle}
      >
        Add another Experience
      </Button>
    </Box>
  );
};

export default Experience;
