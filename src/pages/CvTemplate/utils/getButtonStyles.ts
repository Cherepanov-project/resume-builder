import { useTheme } from "@mui/material";

interface Style {
  [key: string]: string;
}

const getButtonStyles = (index: number, activeStep: number): Style => {
  const theme = useTheme()
  if (index === activeStep) {
    return {
      color: theme.custom.colorDarkBlue,
      backgroundColor: 'white',
      border: `2px solid ${theme.custom.colorDarkBlue}`
    };
  }

  if (index < activeStep) {
    return {
      color: 'white',
      backgroundColor: theme.custom.colorDarkBlue,
      border: theme.custom.colorDarkBlue,
    };
  }

  return {
    color: '#4E4D4D',
    backgroundColor: '#dddbdb',
    border: '2px solid #4E4D4D',
  };
};

export default getButtonStyles;
