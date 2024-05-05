import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderShortPDF, SidebarShortPDF, MainPDF } from '../components/organisms';
import { Box } from '@mui/material';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageDefaultPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { PageWrapper, SidebarPage, MainPage, ...otherStyle } = style;

  const propsHeader = { ...personalData, style: otherStyle };
  const propsSidebar = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: { personalData, photoData, ...otherDate }, style: otherStyle };
  return (
    <Box>
      <HeaderShortPDF {...propsHeader} />
      <Box style={PageWrapper}>
        <Box style={SidebarPage}>
          <SidebarShortPDF {...propsSidebar} />
        </Box>
        <Box style={MainPage}>
          <MainPDF {...propsMain} />
        </Box>
      </Box>
    </Box>
  );
};
