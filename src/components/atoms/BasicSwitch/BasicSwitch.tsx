import { Switch, FormControlLabel } from '@mui/material';
import { ChangeEventHandler } from 'react';

interface IBasicSwitch {
  checked: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const BasicSwitch = (props: IBasicSwitch) => {
  const { checked, onChange, label } = props;
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label={label}
      labelPlacement="start"
    />
  );
};
