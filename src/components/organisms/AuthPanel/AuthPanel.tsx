import logo from '@assets/images/quickly_Logo.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  FormHelperText,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import MuiLink from '@mui/material/Link';

import PasswordInput from '../../molecules/PasswordInput';
import SocialSubmits from '../../molecules/SocialSubmits';

interface IAuthPanelProps {
  authType: string;
}
const AuthPanel: React.FC<IAuthPanelProps> = ({ authType }) => {
  const theme = useTheme()
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    remember: false,
    successMessage: null,
  });
  const [inputError] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setAuthData((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };

  const navigate = useNavigate();
  const mainPageNavigate = () => navigate('/');

  const handleSubmitClick = () => {
    console.log(authData);
    navigate('/intro');
  };
  
  const authDataBase = {
    in: { prompt: "Don't have an account? ", authText: 'Create now', linkTo: '/sign-up' },
    up: { prompt: 'Already have an account? ', authText: 'Sign in', linkTo: '/sign-in' },
  };

  const { prompt, authText, linkTo } = authDataBase[authType.includes('In') ? 'in' : 'up'];
  return (
    <>
      <Box px={1} sx={{ width: '582px', position: 'relative', minHeight: '768px' }}>
        <Box
          sx={{
            position: 'absolute',
            left: -15,
            top: -10,
            cursor: 'pointer',
          }}
        >
          <img src={logo} alt="Company logo" onClick={mainPageNavigate} />
        </Box>
        <Box>
          <Box sx={{ padding: '50px 0 25px 0' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ color: 'text.primary', fontWeight: theme.custom.fontWeightBig }}
              my={2}
            >
              {authType}
            </Typography>
            {/* Выдает ошибку вложенность <a> */}
            {/* <Typography>
              {prompt}
              <Link to={linkTo}>
                <MuiLink> {authText} </MuiLink>
              </Link>
            </Typography> */}
            <Typography>
              {prompt}
              <MuiLink component={Link} to={linkTo}>
                {authText}
              </MuiLink>
            </Typography>
          </Box>
          <FormControl sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <>
              <TextField
                id="email"
                label="E-mail"
                type="text"
                required={true}
                placeholder="example@gmail.com"
                aria-describedby="my-helper-text"
                value={authData.email}
                onChange={handleChange}
              />
              {inputError && (
                <FormHelperText id="my-helper-text" sx={theme.custom.colorRed}>
                  We'll never share your email.
                </FormHelperText>
              )}
            </>
            <>
              <PasswordInput authData={authData} handleChange={handleChange} authType={authType} />
              {inputError && (
                <FormHelperText id="my-helper-text" sx={theme.custom.colorRed}>
                  Something is incorrect
                </FormHelperText>
              )}
            </>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(authData.remember)}
                    onChange={handleChange}
                    id="remember"
                  />
                }
                label="Remember me"
              />
              <MuiLink sx={{ cursor: 'pointer' }}>Forgot Password?</MuiLink>
            </Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={handleSubmitClick}
              sx={{ height: '60px', background: '#1c4532' }}
            >
              {authType}
            </Button>
          </FormControl>
          <SocialSubmits />
        </Box>
      </Box>
    </>
  );
};

export default AuthPanel;
