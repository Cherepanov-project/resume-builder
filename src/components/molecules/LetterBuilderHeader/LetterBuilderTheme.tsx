import { createTheme } from "@mui/material";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    buttonSave: true;
    visible: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, 
        disableFocusRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'buttonSave' },
              style: {
                color: 'white',
                textTransform: 'none',
                backgroundColor: '#4cb9ea',
                fontSize: '12px', 
                border: 'none',
                borderRadius: '4px',
                minWidth: '140px',
                fontWeight: '500',
                minHeight: '30px',
                height: '30px',
                lineHeight: '29px',
                padding: '0 8px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background .25s ease-in-out',
                '&:focus': {
                  outline: 'none',
                },
                '&:hover': {
                  scale: '1.05',
                  backgroundColor: '#4cb9ea',
                },
              },
            },
            {
              props: {variant: 'visible'},
              style: {
                borderRadius: '0', 
                color: 'white',
                fontSize: '12px',
                backgroundColor: '#505659',
                height: '100%',
                textTransform: 'none',
                outline: 'none',
                padding: '0 15px',
                '&:hover': {
                    color: 'white',
                    fontSize: '12px',
                    backgroundColor: '#505659',
                    outline: 'none',
                },
                '&:active': {
                    outline: 'none',
                },
                '&:focus': {
                  outline: 'none',
                },
              }
            }
          ],
        },
      },
    },
  },
});

export default theme
  