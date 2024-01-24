import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { ElementsProps } from '@/types/landingBuilder';
import { Select } from 'antd';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import { nanoid } from 'nanoid';

const SelectList = ({ props, layout }: ElementsProps) => {
  const dispatch = useAppDispatch();
  const { SelectList } = props;
  const currentList = SelectList || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '', label: '' }] };
      dispatch(setProps(firstItem));
    }
  }, []);

  return <Select placeholder="Search to Select" style={{ width: '100%' }} options={currentList} />;
};

export default SelectList;
