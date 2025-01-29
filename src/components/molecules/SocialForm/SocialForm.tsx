import { Box } from '@mui/material';
import BasicInput from '@atoms/BasicInput';

type SocialFormProps = {
  fieldName?: string;
};

const SocialForm = ({ fieldName }: SocialFormProps) => {
  return (
    <Box>
      <BasicInput id={`${fieldName}.social-name`} label="Social Name" />
      <BasicInput id={`${fieldName}.social-link`} label="Social Link" />
    </Box>
  );
};

export default SocialForm;
