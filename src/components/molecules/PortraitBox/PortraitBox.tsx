import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import avatar from '../../../assets/images/avatar.png';
import classes from './PortraitBox.module.scss';
import { Typography } from '@mui/material';

const PortraitBox = () => {
  return (
    <Stack className={classes.portraitBox} direction="row">
      <Stack spacing={2} direction="row">
        <Stack className={classes.portraitBox__imageBox}>
          <img className={classes.portraitBox__image} src={avatar} width={150} alt="your photo" />
        </Stack>
        <Stack>
          <Typography className={classes.portraitBox__text}>Upload your picture</Typography>
          <Typography className={classes.portraitBox__text}>
            For best results, use image 300px by 300px in either .jpg or .png
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained">Upload</Button>
        <Button variant="outlined">Remove</Button>
      </Stack>
    </Stack>
  );
};

export default PortraitBox;
