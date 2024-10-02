import { Typography } from "@mui/material"
import { IconVideo } from "@components/atoms/Icons/LetterCardIcons"

const VideoComponent = () => {
  return ( 
    <Typography variant="body1" color="#515659">
      <IconVideo color="#515659" scale={1.3}/><br/>
      Видео
    </Typography>
  )
}

export default VideoComponent