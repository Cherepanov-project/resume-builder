/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import classes from './ComponentC.module.scss';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const ComponentB = () => {
  const [isEditing, setEditing] = useState(false);
  const [isEditing2, setEditing2] = useState(false);

  const [titleText, setTitleText] = useState('Everything is Possible!');
  const [text, setText] = useState(
    'From logo design to video animation, web development to website copy, expert designers developers and digital talent are ready to complete your projects.',
  );

  const handleDoubleClickOnTitle = () => {
    setEditing(true);
  };

  const handleDoubleClickOnText = () => {
    setEditing2(true);
  };

  const handleChangeTitle = (e: any) => {
    setTitleText(e.target.value);
  };

  const handleChangeText = (e: any) => {
    setText(e.target.value);
  };

  const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      fontSize: 48,
    },
  });

  return (
    <div className={classes.container}>
      <h2 className={classes.title} onDoubleClick={handleDoubleClickOnTitle}>
        {isEditing ? (
          <CssTextField
            variant="standard"
            fullWidth
            type="text"
            value={titleText}
            onChange={handleChangeTitle}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        ) : (
          titleText
        )}
      </h2>
      <p className={classes.text} onDoubleClick={handleDoubleClickOnText}>
        {isEditing2 ? (
          <TextField
            variant="standard"
            fullWidth
            type="text"
            value={text}
            onChange={handleChangeText}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        ) : (
          text
        )}
      </p>
    </div>
  );
};

export default ComponentB;
