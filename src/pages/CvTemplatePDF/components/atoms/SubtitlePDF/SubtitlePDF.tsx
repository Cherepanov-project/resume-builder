import { Text } from '@react-pdf/renderer';

interface ISubtitleProps {
  str: string;
  style: React.CSSProperties;
}

export const SubtitlePDF = (props: ISubtitleProps) => {
  const { str, style } = props;

  return <Text style={style}>{str}</Text>;
};
