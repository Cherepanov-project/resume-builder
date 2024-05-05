import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';
import { TitlePDF, TextPDF } from '../../atoms';
import { Box } from '@mui/material';

interface IHeaderShortPDF extends PersonalDataType {
  style: StyleOptionType;
}

export const HeaderShortPDF = (props: IHeaderShortPDF) => {
  const { fullName, position, style } = props;

  const { HeaderShort, HeaderShortWrapper, Title, Text, TextSpecial } = style;

  const propsTitle = { fullName, style: Title };
  const propsText = { str: position, style: { ...Text, ...TextSpecial } };
  return (
    <Box style={HeaderShort}>
      <Box style={HeaderShortWrapper}>
        <TitlePDF {...propsTitle} />
      </Box>
      <Box style={HeaderShortWrapper}>
        <TextPDF {...propsText} />
      </Box>
    </Box>
  );
};
