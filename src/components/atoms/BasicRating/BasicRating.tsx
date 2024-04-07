import Box from '@mui/material/Box';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BasicRating = (props) => {

  const { gridContainers } = useAppSellector((state) => state.layout);
  const elements = gridContainers.find((el) =>
    el.elements.activeElements.filter((el) => el.name === 'BasicRating'),
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
        size={props.columns === 2 ? 'small' : props.columns === 3 ? 'medium' : 'large'}
        defaultValue={2}
        max={props?.columns !== 0 && props?.columns < 20 ? props?.columns : 5}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 'l' : ''}`}
        precision={1}
        icon={
          <FavoriteIcon
            fontSize={props.columns === 2 ? 'small' : props.columns === 3 ? 'medium' : 'large'}
          />
        }
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
};
export default BasicRating;
