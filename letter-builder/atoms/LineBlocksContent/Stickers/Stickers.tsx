import { Button, Typography, ThemeProvider } from "@mui/material"
import { IconStickers } from "@components/atoms/Icons/LetterCardIcons"
import theme from "../Theme"

const StickersComponent = () => {
  return ( 
    <ThemeProvider theme={theme}>
      <Typography variant="body1" color="#515659">
        <IconStickers color="#515659" scale={1.3}/><br/>
        <Button variant="letterCard"> 
          Search for stickers with Giphy
        </Button>
      </Typography>
    </ThemeProvider>
  )
}

export default StickersComponent
