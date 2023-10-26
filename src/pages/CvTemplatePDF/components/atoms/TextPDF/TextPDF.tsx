import { Text } from '@react-pdf/renderer';

import { StyleType } from '../../../const';

interface ITextProps {
  str: string;
  style: StyleType;
}

export const TextPDF = (props: ITextProps) => {
  const { str, style } = props;

  return <Text style={style}>{str}</Text>;
};
