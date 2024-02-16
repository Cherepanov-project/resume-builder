import classes from './Education.module.scss';
import { Box, Button } from '@mui/material';
import EducationForm from '../../molecules/EducationForm';
import { buttonStyle } from '../../../assets/style/buttonStyle';

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
  educationFromYear: string;
  'education-to-year': string;
};

const defaultValue: EducationType = {
  study: '',
  degree: '',
  school: '',
  educationFromYear: '',
  'education-to-year': '',
};

const Education = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('educationData', [...getValues('educationData'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [
        ...getValues('educationData').slice(0, index),
        ...getValues('educationData').slice(index + 1),
      ];
    } else {
      resp = [...getValues('educationData').slice(index + 1)];
    }
    setValue('educationData', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box className={classes.education}>
      {getValues('educationData').map((_: EducationType, index: number) => {
        const fieldName = `educationData[${index}]`;
        return (
          <Accordion disableGutters sx={{ mb: 2 }} key={index}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <div className="AccordionSummary__content">
                <Typography>Education {index + 1}</Typography>

                {index > 0 ? (
                  <Button onClick={() => removeField(index)} variant="contained" sx={buttonStyle}>
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
      <Button onClick={addField} variant="contained" sx={buttonStyle}>
        Add another Education
      </Button>
    </Box>
  );
};

export default Education;
