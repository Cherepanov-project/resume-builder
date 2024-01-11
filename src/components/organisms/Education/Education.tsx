import classes from './Education.module.scss';
import { Box, Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

type EducationType = {
  study: string;
  degree: string;
  school: string;
  'education-from-year': string;
  'education-to-year': string;
};

const defaultValue: EducationType = {
  study: '',
  degree: '',
  school: '',
  'education-from-year': '',
  'education-to-year': '',
};

const Education = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('education', [...getValues('education'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [
        ...getValues('education').slice(0, index),
        ...getValues('education').slice(index + 1),
      ];
    } else {
      resp = [...getValues('education').slice(index + 1)];
    }
    setValue('education', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box className={classes.education}>
      {getValues('education').map((_: EducationType, index: number) => {
        console.log('rerender');
        const fieldName = `education[${index}]`;
        return (
          <Accordion disableGutters sx={{ mb: 2 }} key={index}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <div className="AccordionSummary__content">
                <Typography>Education {index + 1}</Typography>

                {index > 0 ? (
                  <Button onClick={() => removeField(index)} variant="contained">
                    Remove
                  </Button>
                ) : null}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <fieldset name={fieldName} key={fieldName}>
                <EducationForm fieldName={fieldName} />
              </fieldset>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Button onClick={addField} variant="contained">
        Add another Education
      </Button>
    </Box>
  );
};

export default Education;
