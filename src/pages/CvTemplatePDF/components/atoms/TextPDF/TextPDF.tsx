import { StyleOptionType, StyleType } from '../../../const';
import { Typography } from '@mui/material';

interface ITextProps {
  str: string;
  style: StyleOptionType | StyleType;
}

export const TextPDF = (props: ITextProps) => {
  const { str, style } = props;

  return <Typography style={style}>{str}</Typography>;
};
