import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps, ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './CheckboxGroup.module.scss';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const CheckboxGroup = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { CheckboxGroup } = props;
  const currentList = CheckboxGroup || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '' }] };
      dispatch(setProps(firstItem));
    }
  });

  return currentList.map((item: ISettingsInputItem) => (
    <FormControlLabel
      key={item.id}
      className={classes.container}
      control={<Checkbox size="small" className={classes.checkbox} />}
      label={<Typography className={classes.label}>{item.value ? item.value : 'Text'}</Typography>}
    />
  ));
};

export default CheckboxGroup;
