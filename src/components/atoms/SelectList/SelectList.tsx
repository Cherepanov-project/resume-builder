import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps } from '@/types/landingBuilder';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import { nanoid } from 'nanoid';
import classes from './SelectList.module.scss';

const SelectList = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { SelectList } = props;
  const currentList = SelectList || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '' }] };
      dispatch(setProps(firstItem));
    }
  }, []);

  return (
    <select name="select" className={classes.select}>
      {currentList.map((item) => (
        <option key={item.id} value={item.value}>
          {item.value ? item.value : 'Text'}
        </option>
      ))}
    </select>
  );
};

export default SelectList;
