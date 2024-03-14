import { useLocation } from 'react-router-dom';
import AdvertisementSection from '../../components/organisms/AdvertisementSection';
import AuthPanel from '../../components/organisms/AuthPanel';
import { Box, Container, useMediaQuery } from '@mui/material';

const AuthPage = () => {
  const formatPath = (path: string) => (path == '/sign-in' ? 'Sign In' : 'Sign Up');
  const authType = formatPath(useLocation().pathname);

  const isScreenSmall = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ background: '#f1fffc' }}>
      <Container
        fixed
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <AuthPanel authType={authType} />

        {!isScreenSmall && <AdvertisementSection />}
      </Container>
    </Box>
  );
};
export default AuthPage;
