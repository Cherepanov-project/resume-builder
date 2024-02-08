import { ILayoutBlock } from '@/types/landingBuilder';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './LayoutBlockSlider.scss';

const LayoutBlockSlider: FC<ILayoutBlock> = ({ props }) => {
  const [filter, setFilter] = useState<string>('default');
  const { LayoutBlockSlider } = props;
  const slidesList = LayoutBlockSlider;

  const handleClick = (filterValue: string) => {
    setFilter(filterValue);
  };

  const slides = () => {
    return (
      <>
        {slidesList?.map((el) => {
          return (
            <SwiperSlide key={el.id || '123'}>
              <img src={`${el.value}`} className="sliderPics" />
            </SwiperSlide>
          );
        })}
      </>
    );
  };

  const defaultSwiper = () => {
    return <Swiper>{slides()}</Swiper>;
  };

  const navigationSwiper = () => {
    return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides()}
      </Swiper>
    );
  };

  const paginationSwiper = () => {
    return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {slides()}
      </Swiper>
    );
  };

  const verticalSwiper = () => {
    return (
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides()}
      </Swiper>
    );
  };

  const multipleSwiper = () => {
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides()}
      </Swiper>
    );
  };

  const activeFiler = (value: string) => {
    let classes = 'slider-filters__filter';
    if (value === filter) {
      classes += ' activeSliderFilter';
    }
    return classes;
  };

  return (
    <div className="slider-global">
      <div className="slider-filters">
        <button className={activeFiler('default')} onClick={() => handleClick('default')}>
          default
        </button>
        <button className={activeFiler('navigation')} onClick={() => handleClick('navigation')}>
          navigation
        </button>
        <button className={activeFiler('pagination')} onClick={() => handleClick('pagination')}>
          pagination
        </button>
        <button className={activeFiler('vertical')} onClick={() => handleClick('vertical')}>
          vertical
        </button>
        <button className={activeFiler('multiple')} onClick={() => handleClick('multiple')}>
          multiple slides
        </button>
      </div>
      {filter === 'default' && defaultSwiper()}
      {filter === 'navigation' && navigationSwiper()}
      {filter === 'pagination' && paginationSwiper()}
      {filter === 'vertical' && verticalSwiper()}
      {filter === 'multiple' && multipleSwiper()}
    </div>
  );
};

export default LayoutBlockSlider;
