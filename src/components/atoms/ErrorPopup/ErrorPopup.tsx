import { Alert, Box, Slide, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

const ErrorPopup = ({ message, severity }) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (message) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [message]);
  return (
    <Box sx={{ position: 'absolute', left: '50%', zIndex: '1100' }}>
      <Snackbar
        open={open}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={severity || 'success'}>{message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default ErrorPopup;
