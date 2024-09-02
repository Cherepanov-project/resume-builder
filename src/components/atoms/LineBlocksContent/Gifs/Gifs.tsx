import { Button, Typography } from "@mui/material"
import { IconGIFS } from "@components/atoms/Icons/LetterCardIcons"

const GifsComponent = () => {
  return ( 
    <Typography variant="body1" color="#515659">
      <IconGIFS color="#515659" scale={1.3}/><br/>
      <Button 
        variant="contained" 
        sx={{
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
        }}>
        Search for gifs with Giphy
      </Button>
    </Typography>
  )
}

export default GifsComponent