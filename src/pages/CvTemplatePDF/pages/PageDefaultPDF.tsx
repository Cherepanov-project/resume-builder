import { View } from '@react-pdf/renderer';

import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderShortPDF, SidebarShortPDF, MainPDF } from '../components/organisms';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageDefaultPDF = (props: IPageDefaultPDF) => {
  const { personalData, style, ...otherDate } = props;
  const { PageWrapper, SidebarPage, MainPage, ...otherStyle } = style;

  const propsShort = { ...personalData, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <View>
      <HeaderShortPDF {...propsShort} />
      <View style={PageWrapper}>
        <View style={SidebarPage}>
          <SidebarShortPDF {...propsShort} />
        </View>
        <View style={MainPage}>
          <MainPDF {...propsMain} />
        </View>
      </View>
    </View>
  );
};
