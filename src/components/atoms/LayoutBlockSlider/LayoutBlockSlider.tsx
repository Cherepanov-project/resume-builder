import { ILayoutBlock } from '@/types/landingBuilder';
import { FC, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './LayoutBlockSlider.scss';

const LayoutBlockSlider: FC<ILayoutBlock> = ({ props }) => {
  const swiperPresets = {
    default: {
      name: 'default',
      params: {
        effect: 'default',
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
      },
    },
    navigation: {
      name: 'navigation',
      params: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: true,
        modules: [Navigation],
      },
    },
    pagination: {
      name: 'pagination',
      params: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
          clickable: true,
        },
        modules: [Pagination],
      },
    },
    vertical: {
      name: 'vertical',
      params: {
        direction: 'vertical',
        pagination: {
          clickable: true,
        },
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        modules: [Pagination],
      },
    },
    multiple: {
      name: 'multiple',
      params: {
        pagination: {
          clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        modules: [Pagination],
      },
    },
  };
  type presetType = {
    name: string;
    params: object;
  };
  const [filter, setFilter] = useState<presetType>(swiperPresets.pagination);
  const { LayoutBlockSlider } = props;
  const slidesList = LayoutBlockSlider;
  const handleClick = (filterValue: presetType) => {
    swiper = swiperInit(filterValue);
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

  const swiperInit = (params: object): JSX.Element => {
    return (
      <Swiper {...params} id="swiper">
        {slides()}
      </Swiper>
    );
  };

  let swiper = swiperInit(swiperInit(filter.params));

  // const defaultSwiper = () => {
  //   return <Swiper>{slides()}</Swiper>;
  // };

  // const navigationSwiper = () => {
  //   return (
  //     <Swiper navigation={true} modules={[Navigation]}>
  //       {slides()}
  //     </Swiper>
  //   );
  // };

  // const paginationSwiper = () => {
  //   return (
  //     <Swiper pagination={true} modules={[Pagination]}>
  //       {slides()}
  //     </Swiper>
  //   );
  // };

  // const verticalSwiper = () => {
  //   return (
  //     <Swiper
  //       direction={'vertical'}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination]}
  //     >
  //       {slides()}
  //     </Swiper>
  //   );
  // };

  // const multipleSwiper = () => {
  //   return (
  //     <Swiper
  //       slidesPerView={3}
  //       spaceBetween={30}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination]}
  //     >
  //       {slides()}
  //     </Swiper>
  //   );
  // };

  const activeFiler = (value: string) => {
    let classes = 'slider-filters__filter';
    if (value === filter.name) {
      classes += ' activeSliderFilter';
    }
    return classes;
  };

  return (
    <div className="slider-global">
      <div className="slider-filters">
        <button
          className={activeFiler('default')}
          onClick={() => handleClick(swiperPresets.default)}
        >
          default
        </button>
        <button
          className={activeFiler('navigation')}
          onClick={() => handleClick(swiperPresets.navigation)}
        >
          navigation
        </button>
        <button
          className={activeFiler('pagination')}
          onClick={() => handleClick(swiperPresets.pagination)}
        >
          pagination
        </button>
        <button
          className={activeFiler('vertical')}
          onClick={() => handleClick(swiperPresets.vertical)}
        >
          vertical
        </button>
        <button
          className={activeFiler('multiple')}
          onClick={() => handleClick(swiperPresets.multiple)}
        >
          multiple slides
        </button>
      </div>
      {swiperInit(filter.params)}
    </div>
  );
};

export default LayoutBlockSlider;
