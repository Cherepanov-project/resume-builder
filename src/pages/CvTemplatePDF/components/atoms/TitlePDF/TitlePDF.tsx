import { Text } from '@react-pdf/renderer';

interface ITitlePDF {
  fullName: string;
  style: { [key: string]: string | number };
}

export const TitlePDF = (props: ITitlePDF) => {
  const { fullName, style } = props;

  return <Text style={style}>{fullName}</Text>;
};
