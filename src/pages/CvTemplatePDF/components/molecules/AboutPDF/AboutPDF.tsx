import { StyleOptionType } from '../../../const';
import { SubtitlePDF, TextPDF } from '../../atoms';
import { Box } from '@mui/material';

interface IAboutTypeProps {
  bio: string;
  style: StyleOptionType;
}

export const AboutPDF = (props: IAboutTypeProps) => {
  const { bio, style } = props;
  const { Text, Subtitle, SubtitleWrapper } = style;

  const propsSubtitle = { str: 'About me', style: Subtitle };
  const propsText = { str: bio, style: Text };

  return (
    <Box style={SubtitleWrapper}>
      {Subtitle.name !== 'chrono' && <SubtitlePDF {...propsSubtitle} />}
      <TextPDF {...propsText} />
    </Box>
  );
};
