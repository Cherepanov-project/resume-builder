import { Box, Button } from '@mui/material';
import BasicInput from '@atoms/BasicInput';
import classes from './Hobbies.module.scss';
import { buttonStyle } from '@assets/style/buttonStyle';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

type HobbiesType = string;

const defaultValue: HobbiesType = '';

const Hobbies = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('hobbyData', [...getValues('hobbyData'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [
        ...getValues('hobbyData').slice(0, index),
        ...getValues('hobbyData').slice(index + 1),
      ];
    } else {
      resp = [...getValues('hobbyData').slice(index + 1)];
    }
    setValue('hobbyData', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box className={classes.hobbies}>
      {getValues('hobbyData').map((_: HobbiesType, index: number) => {
        const fieldName = `hobbyData[${index}]`;

        return (
          <div key={index}>
            <BasicInput label="Your hobby" key={index} id={`${fieldName}.label`} />

            {index > 0 ? (
              <Button onClick={() => removeField(index)} variant="contained" sx={buttonStyle}>
                Remove
              </Button>
            ) : null}
          </div>
        );
      })}

      <Button
        className={classes.hobbies}
        onClick={() => {
          addField();
        }}
        variant="contained"
        sx={buttonStyle}
      >
        Add another Hobby
      </Button>
    </Box>
  );
};

export default Hobbies;
