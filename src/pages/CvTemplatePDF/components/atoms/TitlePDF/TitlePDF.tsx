import { StyleType } from '../../../const';
import { Typography } from '@mui/material';

interface ITitlePDF {
  fullName: string;
  style: StyleType;
}

export const TitlePDF = (props: ITitlePDF) => {
  const { fullName, style } = props;

  return <Typography style={style}>{fullName}</Typography>;
};
