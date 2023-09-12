import { Box, Stack } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import BasicDatePicker from '../../atoms/BasicDatePicker';
import classes from './EducationForm.module.scss';

const EducationForm = () => {
  return (
    <Box>
      <BasicInput id="study" label="Field of study" />
      <BasicInput id="degree" label="Degree" />
      <BasicInput id="school" label="School" />
      <Stack className={classes.educationForm} spacing={2} direction="row">
        <BasicDatePicker label="From year" />
        <BasicDatePicker label="To year" />
      </Stack>
    </Box>
  );
};

export default EducationForm;
