import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

interface IPasswordInput {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  authData: {
    password: string;
    repeatPassword?: string;
  };
  authType: string;
}

interface IPasswordState {
  text: string;
  isShown: boolean;
}

interface IPasswordFields {
  password: IPasswordState;
  repeatPassword: IPasswordState;
}

const PasswordInput: React.FC<IPasswordInput> = ({ handleChange, authData, authType }) => {
  const [passwordFields, setPasswordFields] = useState<IPasswordFields>({
    password: { text: 'Password', isShown: false },
    repeatPassword: { text: 'Repeat Password', isShown: false },
  });

  const handleClickShowPassword = (id: 'password' | 'repeatPassword') => {
    setPasswordFields((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], isShown: !prevState[id].isShown },
    }));
  };

  const renderPasswordField = (id: 'password' | 'repeatPassword') => {
    const field: IPasswordState = passwordFields[id];

    return (
      <TextField
        id={id}
        label={field.text}
        type={field.isShown ? 'text' : 'password'}
        required={true}
        value={authData[id]}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={`toggle password visibility`}
                onClick={() => handleClickShowPassword(id)}
                edge="end"
                sx={{ '&:focus': { outline: 'none' } }}
              >
                {field.isShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    );
  };

  return (
    <>
      {renderPasswordField('password')}

      {authType.includes('Up') && renderPasswordField('repeatPassword')}
    </>
  );
};

export default PasswordInput;
