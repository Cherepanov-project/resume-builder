import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import {ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './Checkboxes.module.scss';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const Checkboxes = ({ props, layout }) => {
  const dispatch = useAppDispatch();
  const { Checkboxes } = props;
  const currentList = props.CheckboxGroup ? props.CheckboxGroup : Checkboxes || []; // группа или один чекбокс

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: props.text || '' }] };
      dispatch(setProps(firstItem));
    }
  });

  const checkboxesList = currentList.map((item: ISettingsInputItem) => (
    <div style={props.style}>
      <FormControlLabel
        key={item.id}
        className={classes.container}
        control={<Checkbox size="small" className={classes.checkbox} />}
        label={<Typography className={classes.label}>{item.value ? item.value : 'Text'}</Typography>}
      />
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      {checkboxesList}
    </div>
  )
};

export default Checkboxes;
