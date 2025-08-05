import { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { TemplateSingleResume } from './index.ts';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface IProps {
  handleButtonClick: (nameResume: StylesNameKeys) => void;
}

const arrResume: StylesNameKeys[] = [
  'oslo',
  'sydney',
  'toronto',
  'modern',
  'classicCustomized',
  'defaultCustomized',
  'chrono',
  'metro'
];

const ChoosingResumeOption: FC<IProps> = ({ handleButtonClick }) => {
  const theme = useTheme()
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          sx={{
            mt: 2,
            mb: 2,
            fontSize: 30,
            fontWeight: theme.custom.fontWeightBig,
            textAlign: 'center',
            width: 600,
          }}
        >
          step 1 choose right way of info position
        </Typography>
        <Box display="flex" sx={{ mb: 10, width: 800 }}>
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {arrResume.map((r) => (
              <SwiperSlide key={r} style={{ width: '500px' }}>
                <TemplateSingleResume
                  key={r}
                  handleButtonClick={handleButtonClick}
                  nameResume={r}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default ChoosingResumeOption;
