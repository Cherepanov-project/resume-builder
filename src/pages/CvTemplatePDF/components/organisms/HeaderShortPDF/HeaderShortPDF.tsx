import { View } from '@react-pdf/renderer';

import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';
import { TitlePDF, TextPDF } from '../../atoms';

interface IHeaderShortPDF extends PersonalDataType {
  style: StyleOptionType;
}

export const HeaderShortPDF = (props: IHeaderShortPDF) => {
  const { fullName, position, style } = props;
  const { HeaderShort, HeaderShortWrapper, Title, Text, TextSpecial } = style;

  const propsTitle = { fullName, style: Title };
  const propsText = { str: position, style: { ...Text, ...TextSpecial } };

  return (
    <View style={HeaderShort}>
      <View style={HeaderShortWrapper}>
        <TitlePDF {...propsTitle} />
      </View>
      <View style={HeaderShortWrapper}>
        <TextPDF {...propsText} />
      </View>
    </View>
  );
};
