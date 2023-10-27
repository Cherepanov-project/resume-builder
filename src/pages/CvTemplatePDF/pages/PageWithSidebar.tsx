import { View } from '@react-pdf/renderer';

import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { SidebarPDF, MainPDF } from '../components/organisms';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageWithSidebarPDF = (props: IPageDefaultPDF) => {
  const { personalData, style, ...otherDate } = props;
  const { Page, SidebarPage, MainPage, ...otherStyle } = style;

  const propsSidebar = { ...personalData, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <View style={Page}>
      <View style={SidebarPage}>
        <SidebarPDF {...propsSidebar} />
      </View>
      <View style={MainPage}>
        <MainPDF {...propsMain} />
      </View>
    </View>
  );
};
