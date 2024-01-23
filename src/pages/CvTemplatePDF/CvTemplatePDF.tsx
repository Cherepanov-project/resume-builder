import { useMemo, useEffect } from 'react';
import { Document, Page, PDFViewer } from '@react-pdf/renderer';

import { temporaryCvDataSlice } from '../../assets/const';
import { renderTemplatePDF } from './lib';

import classes from './CvTemplatePDF.module.scss';

// import { useSelector } from 'react-redux';

import { useAppSellector } from '../../hooks/cvTemplateHooks';

export const selectAllPersonaInfo = (state) => state.personalInfo;

export const CvTemplatePDF = () => {
  const pop = useAppSellector(selectAllPersonaInfo);

  console.log('POP', pop);
  console.log('temporaryCvDataSlice', temporaryCvDataSlice);

  // Заменил temporaryCvDataSlice на pop

  //используй useEffect для создания дефолтного стейта обновления данных для работы форм

  // использовать тулкитовый селектор

  useEffect(() => {
    // temporaryCvDataSlice.personalData = pop
    // temporaryCvDataSlice.personalData.fullName = pop.personalData.fullName || fullName;
    // temporaryCvDataSlice.personalData.adress = pop.personalData.address || adress;
    // temporaryCvDataSlice.personalData.bio = pop.personalData.bio || bio;
    // temporaryCvDataSlice.personalData.mail = pop.personalData.email || mail;
    // temporaryCvDataSlice.personalData.phone = pop.personalData.phone || phone;
    // temporaryCvDataSlice.personalData.position = pop.personalData.jobTitle || position;
    // temporaryCvDataSlice.personalData.website = pop.personalData.website || website;
    // temporaryCvDataSlice.educationData.description = pop.personalData.educationData.description || "nskcnacnna"
    // temporaryCvDataSlice.educationData.fromYear = pop.personalData.educationData.fromYear || "nskcnacnna"
    // temporaryCvDataSlice.educationData.name = pop.personalData.educationData.name || "nskcnacnna"
    // temporaryCvDataSlice.educationData.position = pop.personalData.educationData.position || "nskcnacnna"
    // temporaryCvDataSlice.educationData.toYear = pop.personalData.educationData.toYear || "nskcnacnna"
  }, []);

  // Примеры стилей

  // const styleName = 'default';
  // const styleName = 'defaultCustomized';
  // const styleName = 'classic';
  // const styleName = 'classicCustomized';

  const styleName = 'modern';

  const children = useMemo(() => {
    return renderTemplatePDF(styleName, pop);
  }, [styleName, pop]);

  console.log('CHILDREN', children);

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
