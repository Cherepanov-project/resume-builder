import { Text } from '@react-pdf/renderer';

import { StyleType } from '../../../const';

interface ITitlePDF {
  fullName: string;
  style: StyleType;
}

export const TitlePDF = (props: ITitlePDF) => {
  const { fullName, style } = props;

  return <Text style={style}>{fullName}</Text>;
};
