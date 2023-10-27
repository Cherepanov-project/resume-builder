import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

type StyleCardProps = {
  styleName: string;
  styleImg: string;
  handleOnClick: (e: React.MouseEvent<HTMLElement>, str: string) => string | void;
};

export const StyleCard = ({ styleName, styleImg, handleOnClick }: StyleCardProps) => {
  return (
    <Card sx={{ maxWidth: 200 }} onClick={(e) => handleOnClick(e, styleName)}>
      <CardActionArea>
        <CardMedia component="img" image={styleImg} alt={styleName} />
      </CardActionArea>
    </Card>
  );
};
