import { useMemo } from 'react';
import { Page, Document, PDFViewer } from '@react-pdf/renderer';

import { temporaryCvDataSlice } from '../../assets/const';
import { renderTemplatePDF } from './lib';

import classes from './CvTemplatePDF.module.scss';

export const CvTemplatePDF = () => {
  // Примеры стилей

  const styleName = 'default';
  // const styleName = 'defaultCustomized';
  // const styleName = 'classic';
  // const styleName = 'classicCustomized';
  // const styleName = 'modern';
  // const styleName = 'modernRigth';

  const children = useMemo(() => {
    return renderTemplatePDF(styleName, temporaryCvDataSlice);
  }, [styleName]);

  return (
    <div className={classes.CvTemplatePDF}>
      <PDFViewer style={{ minHeight: '700px', minWidth: '500px' }} showToolbar={false}>
        <Document>
          <Page size="A4" style={{ width: '100%' }}>
            {children}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
