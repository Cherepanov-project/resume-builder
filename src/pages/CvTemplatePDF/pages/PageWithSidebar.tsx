import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { SidebarPDF, MainPDF } from '../components/organisms';
import { Box } from '@mui/material';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageWithSidebarPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { Page, SidebarPage, MainPage, ...otherStyle } = style;

  const propsSidebar = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <Box style={Page} display="flex">
      <Box style={SidebarPage}>
        <SidebarPDF {...propsSidebar} />
      </Box>
      <Box style={MainPage}>
        <MainPDF {...propsMain} />
      </Box>
    </Box>
  );
};
