import React, { useState } from 'react';

import style from './SwiperSVTweek.module.scss';
import { FormControlLabel, Checkbox, Select, MenuItem, TextField } from '@mui/material';
import { SliderEffects, EslideHeight, TSliderInit, ISwiperSVTweek } from '../types';

function EnumToItemList(varible: typeof SliderEffects | typeof EslideHeight): JSX.Element[] {
  let key = 0;
  return Object.values(varible).map((el: string) => {
    key++;
    return (
      <MenuItem key={key} value={el}>
        {el}
      </MenuItem>
    );
  });
}

const SwiperSVTweek: React.FC<ISwiperSVTweek> = (props) => {
  const [tweekVisible, setTweekVisible] = useState(false);
  const [mainTweekClasses, setMainTweekClasses] = useState([style.SwiperSVTweek, style.hiden]);

  const stateSlider = props.value;
  const { effect, loop, spaceBetween, navigation, pagination } = props.value;
  const slideHeight = stateSlider.slideHeight?.toString();

  const buttonRef = React.createRef<HTMLButtonElement>();

  //Change Slider value in state
  function onChangeSliderState<P extends keyof TSliderInit>(
    parametr: P,
    value: TSliderInit[P],
  ): void {
    const newState = { ...stateSlider };
    if (parametr == 'effect') {
      if (
        value == SliderEffects.Cards ||
        value == SliderEffects.Flip ||
        value == SliderEffects.Fade
      ) {
        newState.slidesPerView = 1;
      } else {
        newState.slidesPerView = 'auto';
      }
    }
    newState[parametr] = value;
    props.changeSlider(newState);
  }

  //скрывает и раскрывает меню настроек
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
          onChange={(event) => {
            onChangeSliderState('effect', event.target.value);
          }}
          size="small"
        >
          {EnumToItemList(SliderEffects)}
        </Select>

        <FormControlLabel
          control={
            <Checkbox
              checked={loop}
              onChange={(event) => onChangeSliderState('loop', event.target.checked)}
            />
          }
          label="Use Loop"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={navigation}
              onChange={(event) => onChangeSliderState('navigation', event.target.checked)}
            />
          }
          label="Use Navigation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={pagination}
              onChange={(event) => onChangeSliderState('pagination', event.target.checked)}
            />
          }
          label="Use Pagination"
        />
        <TextField
          label="Space Between"
          type="number"
          value={spaceBetween}
          onChange={(event) => onChangeSliderState('spaceBetween', Number(event.target.value))}
          style={{ marginBottom: 5 }}
        />
        <h6 className={style.titleh6}>Slide height</h6>
        <Select
          labelId="slideHeight"
          id="SlideHeightSelect"
          value={slideHeight}
          label="Slide Height"
          onChange={(event) => onChangeSliderState('slideHeight', event.target.value)}
          size="small"
        >
          {EnumToItemList(EslideHeight)}
        </Select>
      </div>
    </div>
  );
};

export default SwiperSVTweek;
