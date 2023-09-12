import { Box } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';

const SocialForm = () => {
  return (
    <Box>
      <BasicInput id="social-name" label="Social Name" />
      <BasicInput id="social-link" label="Social Link" />
    </Box>
  );
};

export default SocialForm;
