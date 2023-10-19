import { View } from '@react-pdf/renderer';

import { MainPDFContentFull, MainPDFContentShort } from './components';

export const MainPDF = () => {
  return (
    <View>
      <MainPDFContentFull />
      <MainPDFContentShort />
    </View>
  );
};
