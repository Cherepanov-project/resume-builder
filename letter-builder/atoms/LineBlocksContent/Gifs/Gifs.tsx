import { Button, Typography, ThemeProvider } from "@mui/material"
import { IconGIFS } from "@components/atoms/Icons/LetterCardIcons"
import theme from "../Theme"

const GifsComponent = () => {
  return ( 
    <ThemeProvider theme={theme}>
      <Typography variant="body1" color="#515659">
        <IconGIFS color="#515659" scale={1.3}/><br/>
        <Button variant="letterCard"> 
          Search for gifs with Giphy
        </Button>
      </Typography>
    </ThemeProvider>
  )
}

export default GifsComponent