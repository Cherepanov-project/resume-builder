import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { IMasonryGalleryProps } from '@/types/landingBuilder';

const MasonryGallery = ({ props }: IMasonryGalleryProps) => {
  const { itemData } = props;

  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData &&
          itemData.map((item, index) => (
            <div key={index}>
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
          ))}
      </Masonry>
    </Box>
  );
};

export default MasonryGallery;
