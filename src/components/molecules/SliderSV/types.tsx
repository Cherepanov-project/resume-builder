export type TSliderInit = {
  effect: string;
  loop: boolean;
  navigation: boolean;
  pagination: boolean;
  spaceBetween: number;
  slideHeight?: number | string | undefined;
  slidesPerView: number | 'auto';
};

export interface ISliderSVProps {
  slides?: Array<string>;
  effect?: string;
}

export enum SliderEffects {
  Default = 'default',
  Fade = 'fade',
  Cube = 'cube',
  Coverflow = 'coverflow',
  Flip = 'flip',
  Cards = 'cards',
}

export enum EslideHeight {
  auto = 'auto',
  px50 = '50px',
  px75 = '75px',
  px100 = '100px',
  px125 = '125px',
  px150 = '150px',
  px175 = '175px',
  px200 = '200px',
  px225 = '225px',
}

export interface ISwiperSVTweek {
  changeSlider: (state: TSliderInit) => void;
  value: TSliderInit;
}
