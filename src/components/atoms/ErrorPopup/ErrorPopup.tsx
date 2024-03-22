import { Alert, Box } from '@mui/material';

const ErrorPopup = ({ message, severity }) => {
  return (
    <Box sx={{ position: 'absolute', left: '50%', zIndex: '1100' }}>
      <Alert severity={severity || 'success'}>{message}</Alert>
    </Box>
  );
};

export default ErrorPopup;
