import type { Theme } from "@mui/material/styles";

interface Style {
  [key: string]: string;
}

const getButtonStyles = (theme: Theme, index: number, activeStep: number): Style => {
  if (index === activeStep) {
    return {
      color: theme.custom.colorDarkBlue as string,
      backgroundColor: 'white',
      border: `2px solid ${theme.custom.colorDarkBlue as string}`
    };
  }

  if (index < activeStep) {
    return {
      color: 'white',
      backgroundColor: theme.custom.colorDarkBlue as string,
      border: theme.custom.colorDarkBlue as string,
    };
  }

  return {
    color: '#4E4D4D',
    backgroundColor: '#dddbdb',
    border: '2px solid #4E4D4D',
  };
};

export default getButtonStyles;
