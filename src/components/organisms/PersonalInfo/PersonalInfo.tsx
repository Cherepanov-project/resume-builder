import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BasicInput from '../../atoms/BasicInput';
import BasicTextarea from '../../atoms/BasicTextarea';
import PortraitBox from '../../molecules/PortraitBox';
import classes from './PersonalInfo.module.scss';

const PersonalInfo = () => {
  return (
    <Box className={classes.personalInfo}>
      <PortraitBox />

      <Stack className={classes.personalInfo__inputGroup} spacing={2} direction="row">
        <BasicInput id="fullName" label="Full Name" />
        <BasicInput id="position" label="Job Title" />
      </Stack>

      <Stack className={classes.personalInfo__inputGroup} spacing={2} direction="row">
        <BasicInput id="address" label="Your Address" />
        <BasicInput id="email" label="Your Email" />
      </Stack>

      <Stack className={classes.personalInfo__inputGroup} spacing={2} direction="row">
        <BasicInput id="website" label="Website Link" />
        <BasicInput id="phone" label="Phone Number" />
      </Stack>
      <Stack className={classes.personalInfo__inputGroup} spacing={2} direction="row">
        <BasicTextarea id="bio" label="Your Bio" placeholder="About me" />
      </Stack>
    </Box>
  );
};

export default PersonalInfo;
