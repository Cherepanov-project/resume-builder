import { Typography, List, ListItem } from "@mui/material"

const ListComponent = () => {
  return (
    <Typography variant="body1">
      <List sx={{ listStyle: 'disc' }}>
        <ListItem component="li">Это неупорядоченный список</ListItem>
      </List>  
    </Typography>
  )
}

export default ListComponent