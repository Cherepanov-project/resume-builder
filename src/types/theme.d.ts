import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
       [key: string]: any;
    };
  }

  interface ThemeOptions {
    custom?: {
       [key: string]: any;
    };
  }
}