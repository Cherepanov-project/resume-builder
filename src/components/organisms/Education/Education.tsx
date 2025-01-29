import classes from './Education.module.scss';
import { Box, Button } from '@mui/material';
import EducationForm from '@molecules/EducationForm';
import { buttonStyle } from '@assets/style/buttonStyle';
import { uniqueKey } from '@/assets/lib';

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
        return (
          <Box key={uniqueKey()}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              {index > 0 ? (
                <>
                  <Typography>
                    Education {index + 1}
                    <Button onClick={() => removeField(index)} variant="contained" sx={buttonStyle}>
                      Remove
                    </Button>
                  </Typography>
                </>
              ) : (
                <Typography>Education {index + 1}</Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <EducationForm fieldName={`educationData[${index}]`} />
            </AccordionDetails>
          </Box>
        );
      })}
      <Button onClick={addField} variant="contained" sx={buttonStyle}>
        Add Education
      </Button>
    </Box>
  );
};

export default Education;
