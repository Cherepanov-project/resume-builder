import { useMemo } from 'react';
import { Page, Document, PDFViewer, StyleSheet } from '@react-pdf/renderer';

import { PageContenClassic, PageContenProfessional } from './componentsOld';

import { temporaryCvDataSlice, ITemporaryCvDataSliceProps } from '../../assets/const';

import classes from './CvTemplatePDF.module.scss';

// type styles = 'classic' | 'professional';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

// импортовать функцию-конструктор, передавать в нее название стиля
const CvTemplatePDFContent = (
  temporaryCvDataSlice: ITemporaryCvDataSliceProps,
): React.ReactNode => {
  return (
    <Page size="A4" style={styles.page}>
      <PageContenClassic {...temporaryCvDataSlice} />
      <PageContenProfessional {...temporaryCvDataSlice} />
    </Page>
  );
};

export const CvTemplatePDF = () => {
  const children = useMemo(() => {
    return CvTemplatePDFContent(temporaryCvDataSlice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temporaryCvDataSlice]);

  return (
    <div className={classes.CvTemplatePDF}>
      <PDFViewer style={{ minHeight: '700px', minWidth: '500px' }} showToolbar={false}>
        <Document>{children}</Document>
      </PDFViewer>
    </div>
  );
};
