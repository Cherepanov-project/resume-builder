import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { templatePDFStyles, StylesNameKeys } from '../const';
import { PageDefaultPDF, PageWithSidebarPDF, PageWithHeaderPDF } from '../pages';
import { PageToronto } from '../pages/PageToronto';

export const renderTemplatePDF = (
  styleName: StylesNameKeys,
  temporaryCvDataSlice: ITemporaryCvDataSliceProps,
) => {
  const currStyle = templatePDFStyles[styleName];
  const { structure, style } = currStyle;

  const isShort = structure.isShort;
  const isWithHeader = structure.header.isPresented;
  const isWithSidebar = structure.sidebar.isPresented;

  const props = { ...temporaryCvDataSlice, style };

  if (styleName === 'toronto') return <PageToronto {...props} />;
  if (isShort) return <PageDefaultPDF {...props} />;
  else if (isWithHeader) return <PageWithHeaderPDF {...props} />;
  else if (isWithSidebar) return <PageWithSidebarPDF {...props} />;
};
