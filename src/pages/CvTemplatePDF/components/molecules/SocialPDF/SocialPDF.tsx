import { SocialDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { SubtitlePDF, TextPDF } from '../../atoms';
import { Box } from '@mui/material';

interface ISocialProps {
  data: SocialDataType[];
  style: StyleOptionType;
}

const socialContent = (data: SocialDataType[] | undefined, style: StyleOptionType) => {
  if (!data) {
    return null;
  }
  const children = data.map((social) => {
    const { link, name } = social;
    const { Social, SocialTitle, Text } = style;
    const propsTitleText = { str: link, style: SocialTitle };
    const propsText = { str: name, style: Text };

    return (
      <Box key={uniqueKey()} style={Social}>
        <TextPDF key={uniqueKey()} {...propsTitleText} />
        <TextPDF key={uniqueKey()} {...propsText} />
      </Box>
    );
  });

  return children;
};

export const SocialPDF = (props: ISocialProps) => {
  const { data, style } = props;
  if (!data) {
    return null;
  }
  const { Socials, Social, SocialTitle, Subtitle, Text } = style;
  const currStyle = { Social, SocialTitle, Subtitle, Text };
  const propsTitle = { str: 'Social', style: Subtitle };

  return (
    <Box style={Socials}>
      <SubtitlePDF {...propsTitle} />
      {socialContent(data, currStyle)}
    </Box>
  );
};
