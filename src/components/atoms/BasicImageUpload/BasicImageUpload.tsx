import { ChangeEventHandler } from 'react';
import { Stack, Button } from '@mui/material';

interface IBasicImageUpload {
  id: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const BasicImageUpload = (props: IBasicImageUpload) => {
  const { onChange, id, title } = props;
  return (
    <Stack direction="row" alignItems="center">
      <label htmlFor={id}>
        <Button variant="outlined" component="span">
          {title}
        </Button>
        <input id={id} hidden accept="image/*" type="file" onChange={onChange} />
      </label>
    </Stack>
  );
};
