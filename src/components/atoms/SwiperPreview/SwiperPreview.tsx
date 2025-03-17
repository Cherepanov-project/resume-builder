import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { changeStyle } from "@/store/landingBuilder/swiperSlice";
import classes from "./SwiperPreview.module.scss";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { Checkbox } from "@mui/material";

const SwiperPreview = ({ params, name }: { params: object; name: string }) => {
  const storedName = useTypedSelector((state) => state.swiper.presetName);
  const dispatch = useAppDispatch();
  const check = name === storedName;
  const checkHandler = () => {
    const obj = {
      presetName: name,
    };
    dispatch(changeStyle(obj));
  };
  return (
    <li className={classes["swiper-preview"]}>
      <div className={classes["swiper-preview__title-container"]}>
        <Checkbox
          className={classes["swiper-preview__checkbox"]}
          checked={check}
          onChange={checkHandler}
        />
        <div className={classes["swiper-preview__title"]}>{name}</div>
      </div>
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay]}
        className={classes["swiper-preview__swiper"]}
        {...params}
      >
        <SwiperSlide className={classes["swiper-preview__swiper-slide"]}>1</SwiperSlide>
        <SwiperSlide className={classes["swiper-preview__swiper-slide"]}>2</SwiperSlide>
        <SwiperSlide className={classes["swiper-preview__swiper-slide"]}>3</SwiperSlide>
      </Swiper>
    </li>
  );
};

export default SwiperPreview;
