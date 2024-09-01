import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: 'rgb(0, 0, 0)',
          width: '100%',
          borderRadius: '4px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '8px',
          padding: '8px',
          boxSizing: 'border-box',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          width: 'calc(100% - 8px)', // One Big block
          minHeight: '100px',
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
    },
  },
});

export default theme
  