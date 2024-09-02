import { Typography } from "@mui/material"
import { IconMenu } from "@components/atoms/Icons/LetterCardIcons"

const MenuComponent = () => {
  return ( 
    <Typography variant="body1" color="#515659">
      <IconMenu color="#515659" scale={1.3}/><br/>
      Меню
    </Typography>
  )
}

export default MenuComponent