/* eslint-disable @typescript-eslint/no-explicit-any */
import { Biotech } from '@mui/icons-material';

import classes from './ComponentA.module.scss';
import { useState } from 'react';
import { TextField } from '@mui/material';

const ComponentA = () => {
  const [isEditing, setEditing] = useState(false);
  const [isEditing2, setEditing2] = useState(false);

  const [titleText, setTitleText] = useState('Discover core features');
  const [text, setText] = useState(
    'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
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

  return (
    <div className={classes.container}>
      {/* Компонент иконки */}
      <Biotech sx={{ fontSize: 100, color: 'orange' }} />

      {/* Компонент Изменяемый заголовок */}
      <div className={classes.container2}>
        <h5 className={classes.title} onDoubleClick={handleDoubleClickOnTitle}>
          {isEditing ? (
            <TextField
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
        </h5>
      </div>

      {/* Компонент Изменяемый параграф */}
      <div className={classes.container2}>
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

      {/* Конец компонента */}
    </div>
  );
};

export default ComponentA;
