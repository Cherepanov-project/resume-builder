import { useMemo } from 'react';
import { useAppDispatch, useAppSellector } from '../../../hooks/cvTemplateHooks';
import { useForm } from 'react-hook-form';

import elements from '../../atoms/ConstructorElements';
import { closeEdit, edit } from '../../../store/LandigBuilder/previewElementsSlice';
import { Button } from '@mui/material';
import classes from './ElementEditMenu.module.scss';

type formObj = {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  content?: string;
  borderRadiusMeasurement?: string;
  width?: string;
  height?: string;
  widthMeasurement?: string;
  heightMeasurement?: string;
};

function defineNumsAndMeasure(str: string | number) {
  if (typeof str === 'number') return +str;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += !isNaN(+str[i]) ? str[i] : '';
  }
  return +result;
}

function makeStyleObj(obj: formObj) {
  const {
    color,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    content,
    borderRadiusMeasurement,
    width,
    height,
    widthMeasurement,
    heightMeasurement,
  } = obj;
  const style = {
    color,
    borderRadius: borderRadius + borderRadiusMeasurement,
    borderWidth: borderWidth + 'px',
    backgroundColor,
    borderColor,
    width: width + widthMeasurement,
    height: height + heightMeasurement,
  };
  return { style, content };
}

const ElementEdit = () => {
  // const [style, setStyle] = useState({})
  const dispatch = useAppDispatch();
  const editData = useAppSellector((state) => state.previewElements.edit);
  const dataBtn = elements[editData];
  console.log(dataBtn, 'databtn');

  const {
    content,
    style: {
      color,
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      width,
      height,
      widthMeasurement,
      heightMeasurement,
    },
  } = dataBtn;
  console.log(width, 'width');

  const { register, handleSubmit, setValue, watch } = useForm({
    mode: 'onBlur',
  });

  const styleForPreviewButton = !Object.keys(watch()).length ? dataBtn : makeStyleObj(watch());

  const onSubmit = (data: formObj) => {
    const {
      color,
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      content,
      borderRadiusMeasurement,
      width,
      height,
      widthMeasurement,
      heightMeasurement,
    } = data;
    const style = {
      color,
      borderRadius: borderRadius + borderRadiusMeasurement,
      borderWidth: borderWidth + 'px',
      backgroundColor,
      borderColor,
      width: width + widthMeasurement,
      height: height + heightMeasurement,
    };
    const payload = { style, content };
    dispatch(edit(payload));
    dispatch(closeEdit());
  };

  useMemo(() => {
    console.log(width, height);
    color ? setValue('color', color) : null;
    borderColor ? setValue('borderColor', borderColor) : null;
    borderWidth ? setValue('borderWidth', borderWidth) : null;
    backgroundColor ? setValue('backgroundColor', backgroundColor) : null;
    borderRadius ? setValue('borderRadius', defineNumsAndMeasure(borderRadius)) : null;
    content ? setValue('content', content) : null;
    width ? setValue('width', defineNumsAndMeasure(width)) : null;
    height ? setValue('height', defineNumsAndMeasure(height)) : null;
    widthMeasurement ? setValue('widthMeasurement', widthMeasurement) : null;
    heightMeasurement ? setValue('heightMeasurement', heightMeasurement) : null;
  }, [color, content, width, height]);

  return (
    <>
      <form className={classes['button-form']} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Text color
          <input type="color" placeholder="color" {...register('color')} />
        </label>
        <label>
          Background color
          <input type="color" {...register('backgroundColor')} />
        </label>
        <label>
          Border width
          <input type="number" placeholder="border width" {...register('borderWidth')} />
        </label>
        <label>
          Border color
          <input type="color" {...register('borderColor')} />
        </label>
        <label>
          Border radius
          <input placeholder="px" type="number" {...register('borderRadius')} />
          <Measurement prop={'borderRadius'} register={register} />
        </label>
        <label>
          size: width
          <input placeholder="width" type="number" {...register('width')} />
          <Measurement prop={'width'} register={register} />
          height
          <input placeholder="height" type="number" {...register('height')} />
          <Measurement prop={'height'} register={register} />
        </label>
        <label>
          Content
          <input type="text" placeholder="Content" {...register('content')} />
        </label>
        <div className={classes.line}></div>
        <div className={classes.preview}>
          <Button style={styleForPreviewButton.style}>{styleForPreviewButton.content}</Button>
        </div>
        <div className={classes.line}></div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

const Measurement = ({ register, prop }) => {
  return (
    <select {...register(`${prop}Measurement`)}>
      <option value={'px'}>px</option>
      <option value={'%'}>%</option>
    </select>
  );
};

export default ElementEdit;
