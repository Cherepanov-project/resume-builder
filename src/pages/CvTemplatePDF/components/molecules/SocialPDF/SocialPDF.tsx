import { View } from '@react-pdf/renderer';

import { SocialDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { SubtitlePDF, TextPDF } from '../../atoms';

interface ISocialProps {
  data: SocialDataType[];
  style: StyleOptionType;
}

const socialContent = (data: SocialDataType[], style: StyleOptionType) => {
  const children = data.map((social) => {
    const { link, name } = social;
    const { Social, SocialTitle, Text } = style;
    const propsTitleText = { str: link, style: SocialTitle };
    const propsText = { str: name, style: Text };

    return (
      <View key={uniqueKey()} style={Social}>
        <TextPDF key={uniqueKey()} {...propsTitleText} />
        <TextPDF key={uniqueKey()} {...propsText} />
      </View>
    );
  });

  return children;
};

export const SocialPDF = (props: ISocialProps) => {
  const { data, style } = props;
  const { Socials, Social, SocialTitle, Subtitle, Text } = style;
  const currStyle = { Social, SocialTitle, Subtitle, Text };
  const propsTitle = { str: 'Social', style: Subtitle };

  return (
    <View style={Socials}>
      <SubtitlePDF {...propsTitle} />
      {socialContent(data, currStyle)}
    </View>
  );
};
