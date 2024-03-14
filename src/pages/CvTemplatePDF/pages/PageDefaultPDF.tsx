import { View } from '@react-pdf/renderer';

import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderShortPDF, SidebarShortPDF, MainPDF } from '../components/organisms';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageDefaultPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { PageWrapper, SidebarPage, MainPage, ...otherStyle } = style;

  const propsHeader = { ...personalData, style: otherStyle };
  const propsSidebar = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <View>
      <HeaderShortPDF {...propsHeader} />
      <View style={PageWrapper}>
        <View style={SidebarPage}>
          <SidebarShortPDF {...propsSidebar} />
        </View>
        <View style={MainPage}>
          <MainPDF {...propsMain} />
        </View>
      </View>
    </View>
  );
};
