import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps, ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './RadioGroup.module.scss';

const RadioGroup = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { RadioGroup } = props;
  const currentList = RadioGroup || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '' }] };
      dispatch(setProps(firstItem));
    }
  }, []);

  return currentList.map((item: ISettingsInputItem) => (
    <div className={classes.container} key={item.id}>
      <label className={classes.label}>
        <input className={classes.radio} type="radio" name="radio" />
        {item.value ? item.value : 'Text'}
      </label>
    </div>
  ));
};

export default RadioGroup;
