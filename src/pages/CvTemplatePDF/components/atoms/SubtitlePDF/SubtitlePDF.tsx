import { Text } from '@react-pdf/renderer';

import { StyleOptionType, StyleType } from '../../../const';

interface ISubtitleProps {
  str: string;
  style: StyleOptionType | StyleType;
}

export const SubtitlePDF = (props: ISubtitleProps) => {
  const { str, style } = props;

  return <Text style={style}>{str}</Text>;
};
