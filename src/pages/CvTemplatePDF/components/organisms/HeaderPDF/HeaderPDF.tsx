import { View } from '@react-pdf/renderer';

import { TitlePDF, SubtitlePDF } from '../../atoms';
import { ContactsPDF } from '../../molecules';

import { PersonalDateType } from '../../../../../assets/const';

export const HeaderPDF = (data: PersonalDateType) => {
  const { fullName, phone, mail, website, adress, position } = data;

  return (
    <View>
      <TitlePDF>{fullName}</TitlePDF>
      <ContactsPDF phone={phone} mail={mail} website={website} adress={adress} />
      <SubtitlePDF>{position}</SubtitlePDF>
    </View>
  );
};
