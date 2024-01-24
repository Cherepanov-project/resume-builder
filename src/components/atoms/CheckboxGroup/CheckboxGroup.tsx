import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { ElementsProps, SettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './CheckboxGroup.module.scss';

const CheckboxGroup = ({ props, layout }: ElementsProps) => {
  const dispatch = useAppDispatch();
  const { CheckboxGroup } = props;
  const currentList = CheckboxGroup || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '', label: '' }] };
      dispatch(setProps(firstItem));
    }
  }, []);

  return currentList.map((item: SettingsInputItem) => (
    <div className={classes.container} key={item.id}>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox" name="checkbox" />
        {item.value ? item.value : 'Текст'}
      </label>
    </div>
  ));
};

export default CheckboxGroup;
