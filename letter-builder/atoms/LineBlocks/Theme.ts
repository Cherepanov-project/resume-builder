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
          variants: [
            {
              props: { variant: 'letterBlockCell' },
              style: {
                width: 'calc(100% - 8px)', // One Big block
                minHeight: 'min-content',
                border: 'none',
                backgroundColor: 'background.paper',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                '&:hover': {
                  border: '2px solid blue',
                  backgroundColor: '#e8faff',
                }
              },
            },
          ],
        },
      },
    },
  },
});

export default theme
  