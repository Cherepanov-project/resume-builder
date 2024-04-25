import { ILayoutBlock, T_SwiperPreset } from '@/types/landingBuilder';
import { FC, useEffect, useState } from 'react';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperPresets } from '@/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './Slider.module.scss';

const Slider: FC<ILayoutBlock> = ({ props }) => {
  const presetName = useAppSellector((state) => state.swiper.presetName);
  const { Slider } = props;
  const slidesList = Slider;
  const [currentPreset, setCurrentPreset] = useState<T_SwiperPreset>(swiperPresets[presetName]);
  const slides = () => {
    return (
      <>
        {slidesList?.map((el) => {
          return (
            <SwiperSlide key={el.id || '123'}>
              <img src={`${el.value}`} className={classes['slider-pics']} />
            </SwiperSlide>
          );
        })}
      </>
    );
  };

  const swiperInitialization = (preset: object): JSX.Element => (
    <Swiper {...preset}>{slides()}</Swiper>
  );

  useEffect(() => {
    setCurrentPreset(swiperPresets[presetName]);
  }, [presetName]);

  return (
    <div className={classes['slider-global']}>{swiperInitialization(currentPreset.params)}</div>
  );
};

export default Slider;
