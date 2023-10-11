import { useAppDispatch, useAppSellector } from '../../../hooks/cvTemplateHooks';
import { useForm } from 'react-hook-form';

import { edit, openEdit } from '../../../store/LandigBuilder/previewElementsSlice';
import { Button } from '@mui/material';
import { IStyleFormObj, IElement, IStyle } from '../../../types/landingBuilder';
import classes from './ElementEditMenu.module.scss';

function defineNumsAndMeasure(str: string | number): [number, string] {
  let num = '';
  let measure = '';
  if (typeof str === 'number') return [str, 'px'];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      num += str[i];
    } else {
      measure += str[i];
    }
  }
  return [+num, measure];
}

function makeStyleObj(obj: IStyle) {
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
    borderRadius: `${borderRadius}${borderRadiusMeasurement}`,
    borderWidth: borderWidth + 'px',
    backgroundColor,
    borderColor,
    width: `${width}${widthMeasurement}`,
    height: `${height}${heightMeasurement}`,
  };
  return { style, content };
}

function makeObjForDefaultValueForm(obj: IElement): IStyle {
  const result = { content: obj.content } as IStyle;
  for (const prop in obj.style) {
    if (
      prop === 'borderRadius' ||
      prop === 'borderWidth' ||
      prop === 'width' ||
      prop === 'height'
    ) {
      result[prop] = defineNumsAndMeasure(obj.style[prop])[0];
      result[`${prop}Measurement`] = defineNumsAndMeasure(obj.style[prop])[1];
    } else {
      result[prop] = obj.style[prop];
    }
  }
  return result;
}

const ElementEdit = () => {
  const dispatch = useAppDispatch();
  const editData: IElement | null = useAppSellector((state) => state.previewElements.edit);
  const o = editData ? makeObjForDefaultValueForm(editData) : null;

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      ...o,
    },
    mode: 'onBlur',
  });

  const watchs = watch();
  const newStyle = makeStyleObj(watchs);

  const onSubmit = (data: IStyleFormObj): void => {
    dispatch(edit(makeStyleObj(data)));
    dispatch(openEdit(null));
  };

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
          <Button style={newStyle.style}>{newStyle.content}</Button>
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
