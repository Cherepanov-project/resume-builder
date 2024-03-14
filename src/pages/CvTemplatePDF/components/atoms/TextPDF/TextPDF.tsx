import { Text } from '@react-pdf/renderer';

import { StyleOptionType, StyleType } from '../../../const';

interface ITextProps {
  str: string;
  style: StyleOptionType | StyleType;
}

export const TextPDF = (props: ITextProps) => {
  const { str, style } = props;

  return <Text style={style}>{str}</Text>;
};
