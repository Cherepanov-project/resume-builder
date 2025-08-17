import React, { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { ISettingsInputItem } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import classes from './Checkboxes.module.scss';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface CheckboxItem extends ISettingsInputItem {
  id: string;
  value: string;
}

interface CheckboxesProps {
  props: {
    Checkboxes?: CheckboxItem[];
    CheckboxGroup?: CheckboxItem[];
    text?: string;
    style?: React.CSSProperties;
    onChange?: (value: string[]) => void;
  };
  layout: {
    i: string;
    direction?: 'row' | 'column';
    spacing?: number;
  };
}

const Checkboxes = ({ props, layout }: CheckboxesProps) => {
  const dispatch = useAppDispatch();
  const { Checkboxes, CheckboxGroup, onChange } = props;
  const currentList = CheckboxGroup || Checkboxes || []; 

  // Track checked states
  const [checkedValues, setCheckedValues] = React.useState<string[]>([]);

  useEffect(() => {
    if (currentList.length === 0) {
      const firstItem = { 
        id: layout.i, 
        values: [{ id: nanoid(), value: props.text || '' }] 
      };
      dispatch(setProps(firstItem));
    }
  }, [currentList.length, layout.i, props.text, dispatch]);

  const handleCheckboxChange = (value: string) => {
    const newCheckedValues = checkedValues.includes(value)
      ? checkedValues.filter(v => v !== value)
      : [...checkedValues, value];
    
    setCheckedValues(newCheckedValues);
    
    // Call external onChange if provided
    if (onChange) {
      onChange(newCheckedValues);
    }
  };

  const checkboxesList = currentList.map((item: CheckboxItem) => (
    <div 
      key={item.id} 
      style={{
        ...props.style,
        marginRight: layout.direction === 'row' ? (layout.spacing || 8) : 0,
        marginBottom: layout.direction === 'column' ? (layout.spacing || 8) : 0,
      }}
    >
      <FormControlLabel
        className={classes.container}
        control={
          <Checkbox 
            size="small" 
            className={classes.checkbox}
            checked={checkedValues.includes(item.value)}
            onChange={() => handleCheckboxChange(item.value)}
          />
        }
        label={
          <Typography className={classes.label}>
            {item.value || 'Text'}
          </Typography>
        }
      />
    </div>
  ));

  return (
    <div 
      className={classes.wrapper}
      style={{
        display: 'flex',
        flexDirection: layout.direction || 'column',
      }}
    >
      {checkboxesList}
    </div>
  );
};

export default Checkboxes;