import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FreeMode,
  Autoplay,
  Mousewheel,
  EffectCoverflow,
  EffectCube,
  EffectCards,
  EffectFade,
  EffectCreative,
  EffectFlip,
  Navigation,
  Pagination,
} from 'swiper/modules';
import SlideSV from '../../atoms/SlideSV';

import style from './SliderSV.module.scss';
import './SliderSV.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cards';
import 'swiper/scss/effect-cube';
import 'swiper/scss/effect-flip';
import 'swiper/css/effect-fade';
import 'swiper/scss/effect-coverflow';

import SwiperSVTweek from './SwiperSVTweek';
import { useState } from 'react';
import { defaulSlides } from './DefaultSlides';
import { ISliderSVProps, TSliderInit } from './types';

const sliderInit: TSliderInit = {
  effect: 'default',
  loop: false,
  navigation: true,
  pagination: true,
  spaceBetween: 10,
  slideHeight: 'auto',
  slidesPerView: 'auto',
};

const SliderSV: React.FC<ISliderSVProps> = ({ slides = defaulSlides }) => {
  const [sliderProps, setSliderProps] = useState(sliderInit);
  const slideHeight = sliderProps.slideHeight;
  let slideKey = 0;
  const slidesSlider = slides.map((el) => {
    return <SlideSV src={el} height={slideHeight} />;
  });

  const sliderSlides = slidesSlider.map((el: JSX.Element, index: number) => {
    slideKey++;
    return (
      <SwiperSlide
        key={slideKey}
        style={{ height: '100%' }}
        className={style.SwiperSliderContainer}
        virtualIndex={index}
      >
        {el}
      </SwiperSlide>
    );
  });

  const changeSlider = (state: TSliderInit) => {
    setSliderProps(() => {
      return state;
    });
  };

  return (
    <div className={style.swiperContainer}>
      <SwiperSVTweek changeSlider={changeSlider} value={sliderProps} />

      <Swiper
        key={Date.now()}
        modules={[
          FreeMode,
          Autoplay,
          Mousewheel,
          EffectCoverflow,
          EffectCards,
          EffectCreative,
          EffectCube,
          EffectFade,
          EffectFlip,
          Navigation,
          Pagination,
        ]}
        spaceBetween={sliderProps.spaceBetween.toString()}
        navigation={sliderProps.navigation}
        pagination={sliderProps.pagination}
        slidesPerView={sliderProps.slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 20,
        }}
        grabCursor={true}
        loop={sliderProps.loop}
        effect={sliderProps.effect}
        className={style.swiper1}
      >
        {sliderSlides}
      </Swiper>
    </div>
  );
};

export default SliderSV;
