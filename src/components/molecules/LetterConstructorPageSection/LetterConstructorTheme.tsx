import { createTheme } from '@mui/material';
import InterFontRegular from '@assets/fonts/Inter-Regular.ttf'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 992,
      lg: 1200,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: 'Inter, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterFontRegular}) format('ttf');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          marginTop: '40px',
          textDecoration: 'none',
          textTransform: 'none',
          padding: '13px 20px',
          backgroundColor: '#852876',
          border: '1px solid #852876',
          borderRadius: '16px',
          transition: 'background-color .3s',
          textAlign: 'center',
          width: '100%',
          color: '#fff',

          '@media (min-width:768px)': {
            width: 'auto',
            padding: '15px 40px',
          },

          '@media (min-width:1200px)': {
            width: 'auto',
            padding: '7px 30px 7px 30px',
          },

          '&:hover': {
              backgroundColor: '#5d145f',
              color: '#fff',
          }
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          letterSpacing: '-.2px',
          color: '#852876',
          fontWeight: '600',
          borderBottom: '2px solid #852876',
          transition: 'all .25s ease',
          textDecoration: 'solid',
      
          '&:hover': {
              color: '#5d145f',
              borderBottom: '2px solid #5d145f',
          }
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontFamily: 'Inter, sans-serif',
  color: 'black',
  textAlign: 'center',
  letterSpacing: '-.4px', 
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '1.3',
  '@media (min-width:992px)': {
    fontSize: '64px',
    letterSpacing: '-1.4px',
    textAlign: 'start',
  }
}

theme.typography.h2 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '1.3',
  letterSpacing: '-.8px',
  color: 'black',
  '@media (min-width:992px)': {
    fontSize: '40px'
  }
}

theme.typography.h3 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  textAlign: 'center',
  fontSize: '24px',
  lineHeight: '1.3',
  letterSpacing: '-.8px',
  color: 'black',
  '@media (min-width:992px)': {
    textAlign: 'start',
    fontSize: '40px'
  }
}

theme.typography.h4 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '1.3',
  letterSpacing: '-.2px',
  color: 'black',

  '@media (min-width:992px)': {
    fontSize: '32px',
    letterSpacing: '-.8px'
  }
}

theme.typography.h5 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '1.3',
  letterSpacing: '-.8px',
  color: 'black',
  '@media (min-width:992px)': {
    fontSize: '22px',
    letterSpacing: '-.7px'
  }
}

theme.typography.body1 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '1.5',
  letterSpacing: '-0.6px',
  color: 'black',

  '@media (min-width:992px)': {
    fontSize: '20px',
  }
}

theme.typography.body2 = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400',
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '1.5',
  letterSpacing: '-0.6px',
  color: 'black',

  '@media (min-width:992px)': {
    fontSize: '20px',
    textAlign: 'start',
  }
}

theme.typography.button = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: '600',
  fontSize: '16px',
  color: '#fff',

  '@media (min-width:992px)': {
    fontSize: '22px',
    color: '#fff',
  }
}

export default theme