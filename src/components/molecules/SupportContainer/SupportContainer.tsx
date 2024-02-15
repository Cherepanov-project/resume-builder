// import classes from './SupportContainer.module.scss';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import { Box, Typography } from '@mui/material';

const SupportContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '20px',
        color: '#fff',
        gap: '10px',
        cursor: 'pointer',
        zIndex: '1',
        '&:hover': { opacity: '0.5' },
      }}
    >
      <SupportAgentTwoToneIcon />
      <Typography>Support</Typography>
    </Box>
  );
};
export default SupportContainer;
