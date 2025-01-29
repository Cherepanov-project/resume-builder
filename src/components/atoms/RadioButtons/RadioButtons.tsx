import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IElementsProps, ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import { Radio, RadioGroup as MuiRadioGroup, FormControlLabel, Typography } from '@mui/material';
import classes from './RadioButtons.module.scss';

const RadioButtons = ({ props, layout }: IElementsProps) => {
  const dispatch = useAppDispatch();
  const { RadioButtons } = props;
  const currentList = RadioButtons || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { id: layout.i, values: [{ id: nanoid(), value: '' }] };
      dispatch(setProps(firstItem));
    }
  });

  return (
    <MuiRadioGroup style={props.style} className={classes.wrapper} aria-labelledby="radio-buttons-group" name="radio-buttons-group">
      {currentList.map((item: ISettingsInputItem) => (
        <FormControlLabel
          key={item.id}
          value={item.value}
          control={<Radio size="small" className={classes.checkbox} />}
          label={
            <Typography className={classes.label}>{item.value ? item.value : 'Text'}</Typography>
          }
        />
      ))}
    </MuiRadioGroup>
  );
};

export default RadioButtons;
