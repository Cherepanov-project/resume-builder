import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import classes from "./Slider.module.scss"
import Slide from "../../atoms/Slide";

const Slider = () => {
  return (
    <>
      <div className={classes['background-layout--light']}></div>
      <Swiper
        modules={[FreeMode, Pagination]}
        slidesPerView={3}
        freeMode={true}
        pagination={{ clickable: true }}
        className={classes['swiper-wrapper']}
      >
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
