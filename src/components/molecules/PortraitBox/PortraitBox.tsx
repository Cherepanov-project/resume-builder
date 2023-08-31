import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import avatar from '../../../assets/images/avatar.png';
import BasicH2 from '../../atoms/BasicH2';

import classes from './PortraitBox.module.scss';

const PortraitBox = () => {
  return (
    <>
      <BasicH2 text="Personal Info" />
      <Stack className={classes.portraitBox} direction="row">
        <Stack spacing={2} direction="row">
          <img src={avatar} width={150} alt="your photo" />

          <Stack sx={{ width: '400px' }}>
            <p className={classes.portraitBox__text}>Upload your picture</p>
            <p className={classes.portraitBox__text}>
              For best results, use image 300px by 300px in either .jpg or .png
            </p>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained">Upload</Button>
          <Button variant="outlined">Remove</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PortraitBox;
