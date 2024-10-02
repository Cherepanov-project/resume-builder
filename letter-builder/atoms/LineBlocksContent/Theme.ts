import { createTheme } from "@mui/material";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    letterCard: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'letterCard' },
              style: {
                marginTop: '10px',
                width: 'max-content',
                backgroundColor: "#898989", 
                color: "white", 
                textTransform: "none", 
                fontSize: '12px',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: "#898989", 
                  color: "white", 
                  textTransform: "none", 
                  fontSize: '12px',
                  padding: '6px 12px',
                },
              },
            },
          ],
        },
      },
    },
  },
});

export default theme