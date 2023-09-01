import React from 'react';
import classes from './BasicTextarea.module.scss';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

interface IBasicTextarea {
  id?: string;
  label?: string;
  placeholder?: string;
}

const BasicTextarea: React.FC<IBasicTextarea> = ({ id, placeholder }) => {
  return (
    <>
      <label className={classes.basicTextarea} htmlFor={id}>
        <TextareaAutosize
          className={classes.basicTextarea__textarea}
          id={id}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default BasicTextarea;
