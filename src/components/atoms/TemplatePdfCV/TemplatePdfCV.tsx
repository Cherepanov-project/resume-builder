import { useMemo } from 'react';
import { Page, Document, PDFViewer, StyleSheet } from '@react-pdf/renderer';

import { PageContenClassic, PageContenProfessional } from './components';

// import { StyleCard } from '../StyleCard';
import { temporaryCvDataSlice, ITemporaryCvDataSliceProps } from '../../../assets/const';

// import tempalateCVClassic from '../../../assets/images/tempalteCVStyles/tempalteCVClaasic.png';
// import tempalateCVProfessional from '../../../assets/images/tempalteCVStyles/tempalteCVProfessional.png';

import classes from './TemplatePdfCV.module.scss';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

const TemplatePdfCVContent = (
  temporaryCvDataSlice: ITemporaryCvDataSliceProps,
): React.ReactNode => {
  return (
    <Page size="A4" style={styles.page}>
      <PageContenClassic {...temporaryCvDataSlice} />
      <PageContenProfessional {...temporaryCvDataSlice} />
    </Page>
  );
};

export const TemplatePdfCV = () => {
  const children = useMemo(() => {
    return TemplatePdfCVContent(temporaryCvDataSlice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temporaryCvDataSlice]);

  /* вот это перенести на отдельную страницу */
  // const handleOnClick = (e: React.MouseEvent<HTMLElement>, styleName: string) => {
  //   console.log('hey mazafaka', e.target, styleName);
  // };
  /* ------- */

  return (
    <div className={classes.TempaltePdfCV}>
      {/* 
      - создать отдельную страницу CvTemplateStyles
      - вот этот кусок перенести на страницу CvTemplateStyles
      - использовать StyleCard из atoms
      - в StyleCard можно подредактировать ширину картинки (maxWidth), чтобы выглядело ОК
      - 10 карточек должно получится на странице
      - изображения импортовать из assests -> images, названия будут начианться с temaplateCV...
      */}

      {/* <div>
        <h5 className={classes.TempaltePdfCV__title}>Choose your Resume template</h5>
        <div className={classes.TempaltePdfCV__cards}>
          <StyleCard
            styleName="Classic"
            styleImg={tempalateCVClassic}
            handleOnClick={handleOnClick}
          />
          <StyleCard
            styleName="Professional"
            styleImg={tempalateCVProfessional}
            handleOnClick={handleOnClick}
          />
        </div> 
      </div> */}

      {/* -----*/}
      <PDFViewer style={{ minHeight: '700px', minWidth: '500px' }} showToolbar={false}>
        <Document>{children}</Document>
      </PDFViewer>
    </div>
  );
};
