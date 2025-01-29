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
      {MainPage.name === 'chrono' && (
        <Box sx={{ position: 'absolute', height: '100%' }}>
          <Box sx={{ position: 'relative', backgroundColor: '#e2e2e2', width: '2px', minHeight: '1123px', height: '100%', left: '130px' }} />
        </Box>
      )}
      <div style={{pageBreakInside:'avoid', zIndex: '1'}}>
          <HeaderPDF {...propsHeader} />
      </div>
      <div>
          <MainPDF {...propsMain} />
      </div>
    </Box>
  );
};
