import React, { useState } from 'react';

import style from './SwiperSVTweek.module.scss';
import {
  FormControlLabel,
  Checkbox,
  Select,
  SelectChangeEvent,
  MenuItem,
  TextField,
} from '@mui/material';

enum SliderEffects {
  Default = 'default',
  Fade = 'fade',
  Cube = 'cube',
  Coverflow = 'coverflow',
  Flip = 'flip',
  Cards = 'cards',
  Creative = 'creative',
}

type TSliderInit = {
  effect: string;
  loop: boolean;
  navigation: boolean;
  pagination: boolean;
  spaceBetween: number;
  slidesPerView: number | 'auto';
};

interface ISwiperSVTweek {
  changeSlider: (state: TSliderInit) => void;
  value: TSliderInit;
}

const SwiperSVTweek: React.FC<ISwiperSVTweek> = (props) => {
  const [tweekVisible, setTweekVisible] = useState(false);
  const [mainTweekClasses, setMainTweekClasses] = useState([style.SwiperSVTweek, style.hiden]);

  const stateSlider = props.value;
  const { effect, loop, spaceBetween, navigation, pagination } = props.value;

  //Функция меняет значение кольцевой прокрутки
  const onChangeLoop = (event: React.ChangeEvent<HTMLInputElement>) => {
    const loop = event.target.checked;
    const newState = { ...stateSlider, loop: loop };
    props.changeSlider(newState);
  };

  //Функция меняет показывать или нет кнопки навигации
  const onChangeNavigation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const navigation = event.target.checked;
    const newState = { ...stateSlider, navigation: navigation };
    props.changeSlider(newState);
  };

  //Функция меняет значение показывать или нет пагинацию
  const onChangePagination = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pagination = event.target.checked;
    const newState = { ...stateSlider, pagination: pagination };
    props.changeSlider(newState);
  };

  //Меняет эффект показа слайдов
  const handleSliderStyle = (event: SelectChangeEvent) => {
    const effect = event.target.value as string;
    const newState = { ...stateSlider, effect: effect };
    if (
      effect == SliderEffects.Cards ||
      effect == SliderEffects.Flip ||
      effect == SliderEffects.Fade
    ) {
      newState.slidesPerView = 1;
      console.log('state from tweek', newState);
    } else {
      newState.slidesPerView = 'auto';
    }
    props.changeSlider(newState);
  };

  //Меняет расстояние между слайдами
  const handleSpaceBetween = (event: React.ChangeEvent<HTMLInputElement>) => {
    const space = Number(event.target.value);
    const newState: TSliderInit = { ...stateSlider, spaceBetween: space };
    props.changeSlider(newState);
  };

  const buttonRef = React.createRef<HTMLButtonElement>();
  const handleButton = () => {
    if (tweekVisible) {
      buttonRef?.current?.innerHTML ? (buttonRef.current.innerHTML = 'Settings') : null;

      setTweekVisible(false);
      setMainTweekClasses((state) => {
        const newState = [...state];
        newState.push(style.hiden);
        return newState;
      });
    } else {
      buttonRef?.current?.innerHTML ? (buttonRef.current.innerHTML = 'Hide') : null;

      setTweekVisible(true);
      setMainTweekClasses((state) => {
        const newState = [...state];
        newState.pop();
        return newState;
      });
    }
  };

  return (
    <div className={mainTweekClasses.join(' ')}>
      <button className={style.TweekButton} ref={buttonRef} onClick={() => handleButton()}>
        Settings
      </button>
      <div key={Date.now()} className={style.mainTweek}>
        <h6 className={style.title}>Slider style</h6>
        <Select
          labelId="SliderStyle"
          id="SliderStyleSelect"
          value={effect}
          label="Slider Style"
          onChange={handleSliderStyle}
          size="small"
        >
          <MenuItem value={SliderEffects.Default}>Default</MenuItem>
          <MenuItem value={SliderEffects.Fade}>Fade</MenuItem>
          <MenuItem value={SliderEffects.Cards}>Cards</MenuItem>
          <MenuItem value={SliderEffects.Coverflow}>Coverflow</MenuItem>
          <MenuItem value={SliderEffects.Cube}>Cube</MenuItem>
        </Select>

        <FormControlLabel
          control={<Checkbox checked={loop} onChange={(event) => onChangeLoop(event)} />}
          label="Use Loop"
        />
        <FormControlLabel
          control={
            <Checkbox checked={navigation} onChange={(event) => onChangeNavigation(event)} />
          }
          label="Use Navigation"
        />
        <FormControlLabel
          control={
            <Checkbox checked={pagination} onChange={(event) => onChangePagination(event)} />
          }
          label="Use Pagination"
        />
        <TextField
          label="Space Between"
          type="number"
          value={spaceBetween}
          onChange={handleSpaceBetween}
        />
      </div>
    </div>
  );
};

export default SwiperSVTweek;
