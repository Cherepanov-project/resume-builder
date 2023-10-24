import { Text } from '@react-pdf/renderer';

interface ITextProps {
  str: string;
  style: React.CSSProperties;
}

export const TextPDF = (props: ITextProps) => {
  const { str, style } = props;

  return <Text style={style}>{str}</Text>;
};
