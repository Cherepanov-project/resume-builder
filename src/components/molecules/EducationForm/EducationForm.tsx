import { Box, Stack } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import BasicDatePicker from '../../atoms/BasicDatePicker';
import classes from './EducationForm.module.scss';

type EducationFormProps = {
  fieldName?: string;
};

const EducationForm = ({ fieldName }: EducationFormProps) => {
  return (
    <Box>
      <BasicInput id={`${fieldName}.study`} label="Field of study" />
      <BasicInput id={`${fieldName}.degree`} label="Degree" />
      <BasicInput id={`${fieldName}.school`} label="School" />
      <Stack className={classes.educationForm} spacing={2} direction="row">
        <BasicDatePicker id={`${fieldName}.education-from-year`} label="From year" />
        <BasicDatePicker id={`${fieldName}.education-to-year`} label="To year" />
      </Stack>
    </Box>
  );
};

export default EducationForm;
