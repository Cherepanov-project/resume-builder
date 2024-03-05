import { Document, Page, PDFViewer } from '@react-pdf/renderer';

import { temporaryCvDataSlice } from '../../assets/const';
import { renderTemplatePDF } from './lib';

import { useAppSellector } from '../../hooks/cvTemplateHooks';
import { Paper } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectAllPersonaInfo = (state: { personalInfo: any }) => state.personalInfo;

export const CvTemplatePDF = ({ styleName }) => {
  const userTemporaryCvDataSlice = useAppSellector(selectAllPersonaInfo);
  let newData = userTemporaryCvDataSlice;
  if (userTemporaryCvDataSlice.personalData.fullName === '') {
    newData = temporaryCvDataSlice;
  }

  return (
    <>
      <Paper sx={{ width: 500, height: 680 }} elevation={12}>
        {renderTemplatePDF(styleName, newData)}
      </Paper>
      {/* <PDFViewer height={680} width={500} showToolbar={false}>
        <Document>
          <Page size="A4" style={{ width: '100%' }}>
            {renderTemplatePDF(styleName, newData)}
          </Page>
        </Document>
      </PDFViewer> */}
    </>
  );
};
