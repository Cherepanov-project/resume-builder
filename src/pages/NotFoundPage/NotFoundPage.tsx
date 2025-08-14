import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const [auth] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme()
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  const goBackButton = () => {
    auth ? navigate('/landing-builder') : navigate('/');
  };
  return (
    <Box
      sx={{
        background: 'black',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Container
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: theme.custom.fontWeightBig,
            animation: 'colorChange 1.5s ease-in-out infinite',
            '@keyframes colorChange': {
              '100%,0%': theme.custom.colorRed,
              '33%': {
                color: getRandomColor(),
              },
              '66%': {
                color: getRandomColor(),
              },
            },
          }}
        >
          404
        </Typography>
        <Typography variant="h2" sx={{ color: '#fff', fontWeight: '600' }}>
          Oh no. Looks like you found this page but there is nothing.
        </Typography>
        <Box
          my={5}
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
            }}
          >
            Btw you can return
          </Typography>
          <ArrowDownwardIcon
            color="secondary"
            sx={{
              color: '#fff',
              margin: '15px',
              animation: 'scaled 1.5s ease-in-out infinite',
              '@keyframes scaled': {
                '0%,100%': {
                  transform: 'scale(1)',
                },
                '50%': {
                  transform: 'scale(1.5)',
                },
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ background: 'rgb(25,114,120)', width: '300px' }}
            onClick={goBackButton}
          >
            go back
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default NotFoundPage;
