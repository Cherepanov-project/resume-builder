
import Box from '@mui/material/Box';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BasicRating = () => {
  const { activeElements } = useAppSellector((state) => state.layout);
  const findName = activeElements.find(el => el.name === 'BasicRating'? el: null)


  const color = activeElements?.map(el => el.props.style?.color)
  const count: number = Number(activeElements?.map(el => el.props.style?.count).join())

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: color || '#eba434',
    }
  });

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        size={findName.columns === 2 ? 'small': findName.columns === 3 ? 'medium' : 'large'}
        defaultValue={2}
        max={count !== 0 && count < 20 ? count : 5}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 'l' : ''}`}
        precision={1}
        icon={<FavoriteIcon fontSize={findName.columns === 2 ? 'small': findName.columns === 3 ? 'medium' : 'large'} />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
export default BasicRating;