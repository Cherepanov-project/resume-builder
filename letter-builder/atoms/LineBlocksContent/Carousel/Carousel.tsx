import { Typography } from "@mui/material"
import { IconCarousel } from "@components/atoms/Icons/LetterCardIcons"

const CarouselComponent = () => {
  return ( 
    <Typography variant="body1" color="#515659">
      <IconCarousel color="#515659" scale={1.3}/><br/>
      Карусель
    </Typography>
  )
}

export default CarouselComponent