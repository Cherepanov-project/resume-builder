import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps, ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './Checkboxes.module.scss';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const Checkboxes = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { Checkboxes } = props;
  const currentList = Checkboxes || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '' }] };
      dispatch(setProps(firstItem));
    }
  });
  console.log('pr', props);
  return currentList.map((item: ISettingsInputItem) => (
    <FormControlLabel
      key={item.id}
      className={classes.container}
      control={<Checkbox size="small" className={classes.checkbox} />}
      label={<Typography className={classes.label}>{item.value ? item.value : 'Text'}</Typography>}
    />
  ));
};

export default Checkboxes;
