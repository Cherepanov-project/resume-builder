import { View } from '@react-pdf/renderer';

import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderPDF, MainPDF } from '../components/organisms';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageWithHeaderPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { Page, ...otherStyle } = style;

  const propsHeader = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <View style={Page}>
      <HeaderPDF {...propsHeader} />
      <MainPDF {...propsMain} />
    </View>
  );
};
