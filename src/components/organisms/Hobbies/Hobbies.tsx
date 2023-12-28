import { Box, Button } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import classes from './Hobbies.module.scss';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

type HobbiesType = string;

const defaultValue: HobbiesType = '';

const Hobbies = () => {
  const { setValue, getValues } = useFormContext();
  const [counter, setCounter] = useState(0);

  const addField = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue('hobby', [...getValues('hobby'), defaultValue]);
  };

  const removeField = (index: number) => {
    let resp;
    if (counter === 0) {
      return;
    }
    if (index !== 0) {
      resp = [...getValues('hobby').slice(0, index), ...getValues('hobby').slice(index + 1)];
    } else {
      resp = [...getValues('hobby').slice(index + 1)];
    }
    setValue('hobby', resp);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Box className={classes.hobbies}>
      {getValues('hobby').map((_: HobbiesType, index: number) => {
        const fieldName = `hobby[${index}]`;

        return (
          <div key={index}>
            <BasicInput label="Your hobby" key={index} id={`${fieldName}.label`} />

            <Button onClick={() => removeField(index)} variant="contained">
              Remove
            </Button>
          </div>
        );
      })}

      <Button
        className={classes.hobbies}
        onClick={() => {
          addField();
        }}
        variant="contained"
      >
        Add another Hobby
      </Button>
    </Box>
  );
};

export default Hobbies;
