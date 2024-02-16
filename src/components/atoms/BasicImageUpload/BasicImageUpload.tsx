import { ChangeEventHandler } from 'react';
import { Stack, Button } from '@mui/material';

interface IBasicImageUpload {
  id: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  sx?: object;
}

export const BasicImageUpload = (props: IBasicImageUpload) => {
  const { onChange, id, title, sx } = props;
  return (
    <Stack direction="row" alignItems="center">
      <label htmlFor={id}>
        <Button variant="outlined" component="span" sx={sx}>
          {title}
        </Button>
        <input id={id} hidden accept="image/*" type="file" onChange={onChange} />
      </label>
    </Stack>
  );
};
