import { useMemo } from 'react';
import { Document, Page, PDFViewer } from '@react-pdf/renderer';

import { temporaryCvDataSlice } from '../../assets/const';
import { renderTemplatePDF } from './lib';

import classes from './CvTemplatePDF.module.scss';

import { useAppSellector } from '../../hooks/cvTemplateHooks';

// export const selectAllPersonaInfo = (state) => state.personalInfo;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectAllPersonaInfo = (state: { personalInfo: any }) => state.personalInfo;

export const CvTemplatePDF = () => {
  const userTemporaryCvDataSlice = useAppSellector(selectAllPersonaInfo);

  let newData = userTemporaryCvDataSlice;

  if (userTemporaryCvDataSlice.personalData.fullName === '') {
    newData = temporaryCvDataSlice;
  }

  console.log('temporaryCvDataSlice', temporaryCvDataSlice);

  // Примеры стилей

  // const styleName = 'default';
  // const styleName = 'defaultCustomized';
  // const styleName = 'classic';
  // const styleName = 'classicCustomized';

  const styleName = 'modern';

  const children = useMemo(() => {
    return renderTemplatePDF(styleName, newData);
  }, [styleName, newData]);

  console.log('CHILDREN', children);

  return (
    <div className={classes.CvTemplatePDF}>
      <PDFViewer style={{ minHeight: '750px', minWidth: '500px' }} showToolbar={true}>
        <Document>
          <Page size="A4" style={{ width: '100%' }}>
            {children}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
