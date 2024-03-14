import { View } from '@react-pdf/renderer';

import { StyleOptionType } from '../../../const';
import { SubtitlePDF, TextPDF } from '../../atoms';

interface IAboutTypeProps {
  bio: string;
  style: StyleOptionType;
}

export const AboutPDF = (props: IAboutTypeProps) => {
  const { bio, style } = props;
  const { Text, Subtitle } = style;

  const propsSubtitle = { str: 'About me', style: Subtitle };
  const propsText = { str: bio, style: Text };

  return (
    <View>
      <SubtitlePDF {...propsSubtitle} />
      <TextPDF {...propsText} />
    </View>
  );
};
