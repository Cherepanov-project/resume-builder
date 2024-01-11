import { Box, Button } from '@mui/material';
import SocialForm from '../../molecules/SocialForm';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

type SocialType = {
  'social-name': string;
  'social-link': string;
};

const defaultValue: SocialType = {
  'social-name': '',
  'social-link': '',
};

const Social = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('social', [...getValues('social'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [...getValues('social').slice(0, index), ...getValues('social').slice(index + 1)];
    } else {
      resp = [...getValues('social').slice(index + 1)];
    }
    setValue('social', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box>
      {getValues('social').map((_: SocialType, index: number) => {
        const fieldName = `social[${index}]`;
        return (
          <Accordion disableGutters sx={{ mb: 2 }} key={index}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Social {index + 1}</Typography>
              {index > 0 ? (
                <Button onClick={() => removeField(index)} variant="contained">
                  Remove
                </Button>
              ) : null}
            </AccordionSummary>
            <AccordionDetails>
              <fieldset name={fieldName} key={fieldName}>
                <SocialForm fieldName={fieldName} />
              </fieldset>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Button
        onClick={() => {
          addField();
        }}
        variant="contained"
      >
        Add another Social
      </Button>
    </Box>
  );
};

export default Social;
