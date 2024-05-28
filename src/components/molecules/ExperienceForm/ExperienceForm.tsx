import { Box, Stack } from '@mui/material';
import BasicInput from '@atoms/BasicInput';
import BasicDatePicker from '@atoms/BasicDatePicker';
import BasicTextarea from '@atoms/BasicTextarea';
import classes from './ExperienceForm.module.scss';

interface EducationFormProps {
  fieldName: string;
}

const EducationForm = ({ fieldName }: EducationFormProps) => {
  return (
    <Box>
      <BasicInput id={`${fieldName}.work-title`} label="Title" />
      <BasicInput id={`${fieldName}.company`} label="Company" />
      <Stack className={classes.experienceForm} spacing={2} direction="row">
        <BasicDatePicker id={`${fieldName}.experience-from-year`} label="From year" />
        <BasicDatePicker id={`${fieldName}.experience-to-year`} label="To year" />
      </Stack>
      <BasicTextarea id={`${fieldName}.company-info`} placeholder="Description (optional)" />
    </Box>
  );
};

export default EducationForm;
