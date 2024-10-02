import { Button, Typography, ThemeProvider } from "@mui/material"
import { IconTimer } from "@components/atoms/Icons/LetterCardIcons"
import theme from "../Theme"

const TimerComponent = () => {
  return ( 
    <ThemeProvider theme={theme}>
      <Typography variant="body1" color="#515659">
        <IconTimer color="#515659" scale={1.3}/><br/>
        <Button variant="letterCard"> 
          Edit timer
        </Button>
      </Typography>
    </ThemeProvider>
  )
}

export default TimerComponent
