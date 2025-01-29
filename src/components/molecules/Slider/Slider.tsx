import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , FreeMode} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import classes from "./Slider.module.scss"
import Slide from "../../atoms/Slide";

const Slider = () => {
  return (
    <>
      <div className={classes['background-layout--light']}></div>
      <Swiper
        modules={[Pagination, FreeMode]}
        slidesPerView={'auto'}
        spaceBetween={70}
        pagination={{ clickable: true }}
        className={classes['swiper-wrapper']}
        freeMode
        initialSlide={0}
      >
        <SwiperSlide style={{width: '430px'}}><Slide /></SwiperSlide>
        <SwiperSlide style={{width: '430px'}}><Slide /></SwiperSlide>
        <SwiperSlide style={{width: '430px'}}><Slide /></SwiperSlide>
        <SwiperSlide style={{width: '430px'}}><Slide /></SwiperSlide>
        <SwiperSlide style={{width: '430px'}}><Slide /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
