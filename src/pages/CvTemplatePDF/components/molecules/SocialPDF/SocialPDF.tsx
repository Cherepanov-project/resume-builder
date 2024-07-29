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
    const { Social, SocialTitle, Text, SocialText } = style;
    const propsTitleText = { str: link, style: SocialTitle };
    const propsText = { str: name, style: SocialText ?? Text };

    return (
      <Box key={uniqueKey()} style={Social}>
        {Social.name === 'metro' ?
        <>
          <TextPDF {...propsText} />
          <TextPDF {...propsTitleText} />
        </> :
        <>
          <TextPDF {...propsTitleText} />
          <TextPDF {...propsText} />
        </>}
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
  const { Socials, Social, SocialTitle, SocialText, Subtitle, Text } = style;
  const currStyle = { Social, SocialTitle, SocialText, Subtitle, Text };
  const propsTitle = { str: 'Social', style: Subtitle };

  return (
    <Box style={Socials}>
      <SubtitlePDF {...propsTitle} />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        {socialContent(data, currStyle)}
      </Box>
    </Box>
  );
};
