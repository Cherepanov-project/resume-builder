import { StyleOptionType, StyleType } from '../../../const';
import { Typography } from '@mui/material';

interface ISubtitleProps {
  str: string;
  style: StyleOptionType | StyleType;
}

export const SubtitlePDF = (props: ISubtitleProps) => {
  const { str, style } = props;

  return <Typography style={style}>{str}</Typography>;
};
