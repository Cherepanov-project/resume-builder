import { Box, Stack } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import BasicDatePicker from '../../atoms/BasicDatePicker';
import BasicTextarea from '../../atoms/BasicTextarea';
import classes from './ExperienceForm.module.scss';

const EducationForm = () => {
  return (
    <Box>
      <BasicInput id="work-title" label="Title" />
      <BasicInput id="company" label="Company" />
      <Stack className={classes.experienceForm} spacing={2} direction="row">
        <BasicDatePicker label="From year" />
        <BasicDatePicker label="To year" />
      </Stack>
      <BasicTextarea placeholder="Description (optional)" />
    </Box>
  );
};

export default EducationForm;
