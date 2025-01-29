import Box from '@mui/material/Box';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
type BasicRatingType = {
  props: number;
}

const RatingSystem = ({props}: BasicRatingType) => {

  const { gridContainers } = useTypedSelector((state) => state.layout);
  const elements = gridContainers.find((el) =>
    el.elements.activeElements.filter((el) => el.name === 'RatingSystem'),
  );
  console.log(elements)

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#eba434',
    },
  });

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        size={props === 2 ? 'small' : props === 3 ? 'medium' : 'large'}
        defaultValue={2}
        max={props !== 0 && props < 20 ? props : 5}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 'l' : ''}`}
        precision={1}
        icon={
          <FavoriteIcon
            fontSize={props === 2 ? 'small' : props === 3 ? 'medium' : 'large'}
          />
        }
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
};
export default RatingSystem;
