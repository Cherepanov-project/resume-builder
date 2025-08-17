import { createTheme } from "@mui/material/styles";
import { buttonStyle } from "./buttonStyle";

export const theme = createTheme({
  custom: {
    buttonStyle: buttonStyle,
    imageBoxStyles: {
      width: "300px",
      height: "218px",
      background: "#fff",
      boxShadow: 2,
      backgroundSize: "cover",
    },
    letterHeaderButton: 'px-4 py-2 rounded transition',
    fontSize: "small",
    fontSize60: {fontSize: 60},
    fontWeightBig: 700,
    defaultColor: 'primary',
    colorRed: { color: 'red' },
    colorDarkBlue: '#462174',
    colorDarkGray: '#33373a',
    colorLightGray: '#505659',
    colorAlmostBlack: '#222',
    colorGray: "#444",
    colorMetalGray: '#333',
    colorWhiteGray: '#999',
    plusCircleOutlined: { color: '#2dc08d', fontSize: 30 }
  },
});
