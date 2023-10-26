import { useAppDispatch, useAppSellector } from '../../../hooks/cvTemplateHooks';
import { useForm } from 'react-hook-form';
import type { UseFormRegister } from 'react-hook-form';

import { addElement, edit, sideBar } from '../../../store/LandigBuilder/landingBuilder';
import { Button } from '@mui/material';
import { IStyleFormObj, IElement, IStyle } from '../../../types/landingBuilder';
import classes from './ButtonEditForm.module.scss';
import { nanoid } from '@reduxjs/toolkit';

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

function makeStyleObj(obj: IStyle, element?: string, sectionId?: string) {
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
  const id = sectionId + 'element' + nanoid(4);
  const style = {
    color,
    borderRadius: `${borderRadius}${borderRadiusMeasurement}`,
    borderWidth: borderWidth + 'px',
    backgroundColor,
    borderColor,
    width: `${width}${widthMeasurement}`,
    height: `${height}${heightMeasurement}`,
  };
  return { style, content, id, element };
}

function makeObjForDefaultValueForm(obj: IElement): IStyle {
  const result: IStyleFormObj = { content: obj.content };

  for (const prop in obj.style) {
    if (
      prop === 'borderRadius' ||
      prop === 'borderWidth' ||
      prop === 'width' ||
      prop === 'height'
    ) {
      const [value, measurement] = defineNumsAndMeasure(obj.style[prop]);
      result[prop] = value;
      result[`${prop}Measurement`] = measurement;
    } else {
      result[prop] = obj.style[prop];
    }
  }

  return result as IStyle;
}

const ButtonEditForm = () => {
  const dispatch = useAppDispatch();
  const editData: IElement | null = useAppSellector((state) => state.landigBuilder.edit);
  const defaulStyle = editData ? makeObjForDefaultValueForm(editData) : null;
  const [, sectionId] = useAppSellector((state) => state.landigBuilder.sideBar);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      ...defaulStyle,
    },
    mode: 'onBlur',
  });

  const watchs = watch();
  const newStyle = makeStyleObj(watchs);

  const onSubmit = (data: IStyleFormObj): void => {
    dispatch(addElement([sectionId, makeStyleObj(data, editData?.element, sectionId)]));
    dispatch(sideBar(['null', 'null']));
    dispatch(edit(null));
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

interface IMeasurement {
  register: UseFormRegister<IStyleFormObj>;
  prop: string;
}

const Measurement = ({ register, prop }: IMeasurement) => {
  return (
    <select {...register(`${prop}Measurement`)}>
      <option value={'px'}>px</option>
      <option value={'%'}>%</option>
    </select>
  );
};

export default ButtonEditForm;
