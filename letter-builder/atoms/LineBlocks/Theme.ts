import { createTheme } from "@mui/material";


declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    letterBlockCell: true;
  }
}

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid rgb(221, 221, 221)',
          width: '50px',
          zIndex: "10",
          variants: [
            {
              props: { variant: 'letterBlockCell' },
              style: {
                color: "#4cb9ea",
                textAlign: "center",
                flexDirection: "column",
                gap: "15px",
                transition: "all 0.3s ease",
                width: '100%',
                minWidth: 'min-content',
                height: 'auto',
                minHeight: 'min-content',
                border: '1px dashed #999',
                // backgroundColor: 'background.paper',
                backgroundColor: "white",
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0',
                '&:hover': {
                  backgroundColor: '#e8faff',
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
