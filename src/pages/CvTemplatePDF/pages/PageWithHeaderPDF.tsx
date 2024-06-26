import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderPDF, MainPDF } from '../components/organisms';
import { Box } from '@mui/material';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageWithHeaderPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { MainPage, ...otherStyle } = style;

  const propsHeader = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: { personalData, photoData, ...otherDate }, style: otherStyle };
  return (
    <Box style={MainPage} sx={{ display: 'flex', flexDirection: 'column', minHeight: '1123px' }}>
      <div style={{pageBreakInside:'avoid'}}>
          <HeaderPDF {...propsHeader} />
      </div>
      <div>
          <MainPDF {...propsMain} />
      </div>
    </Box>
  );
};
