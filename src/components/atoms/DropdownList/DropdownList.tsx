import { useState, useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps, StateSelectList, T_Value } from '@/types/landingBuilder';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import { Select, MenuItem } from '@mui/material';
import { nanoid } from 'nanoid';

const DropdownList = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { DropdownList } = props;
  const currentList = DropdownList || props.SelectList || [];
  const firstItem = { id: layout.i, values: [{ id: nanoid(), value: 'Text' }] };

  const [selectList, setSelectList] = useState<StateSelectList>({
    value: currentList[0] && currentList[0].value ? currentList[0].value : '',
    array: currentList || firstItem.values,
  });
  
  const handleChange = (event: T_Value) => {
    setSelectList((prev) => ({ ...prev, value: event }));
  };

  useEffect(() => {
    if (currentList.length === 0) {
      dispatch(setProps(firstItem));
    }

    if (currentList.length === 1) {
      setSelectList({ value: currentList[0].value || '', array: currentList });
    }

    setSelectList((prev) => ({ ...prev, array: currentList }));

    if (!currentList.some((item) => item.value === selectList.value)) {
      setSelectList((prev) => ({ ...prev, value: currentList[0]?.value || '' }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentList]);

  return (
    <Select
      sx={{ minWidth: '100%', height: '40px' }}
      value={selectList.value}
      onChange={(e) => handleChange(e.target.value)}
    >
      {selectList.array.map((item) => (
        <MenuItem key={item.id} value={item.value}>
          {item.value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropdownList;
