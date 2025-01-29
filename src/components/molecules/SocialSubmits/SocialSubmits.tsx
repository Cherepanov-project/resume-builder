import { Box, Button, Divider } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';

const SocialSubmits = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Divider sx={{ fontSize: '14px' }}>OR</Divider>
      {['Google', 'Facebook'].map((provider) => (
        <Button
          variant="outlined"
          size="large"
          key={provider}
          sx={{
            height: '60px',
            color: '#000',
            borderColor: '#1c4532',
            '&:focus': { outline: 'none' },
          }}
          // disabled
          onClick={() => {
            alert('clicked');
          }}
          startIcon={provider === 'Google' ? <Google /> : <Facebook />}
        >
          <Box>Continue with {provider}</Box>
        </Button>
      ))}
    </Box>
  );
};
export default SocialSubmits;
