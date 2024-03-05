import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderPDF, MainPDF } from '../components/organisms';
import { Box } from '@mui/material';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageWithHeaderPDF = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { Page, ...otherStyle } = style;

  const propsHeader = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  return (
    <Box
      style={Page}
      sx={{ display: 'flex', flexDirection: 'column', height: '680px', width: '500px' }}
    >
      <HeaderPDF {...propsHeader} />
      <MainPDF {...propsMain} />
    </Box>
  );
};
