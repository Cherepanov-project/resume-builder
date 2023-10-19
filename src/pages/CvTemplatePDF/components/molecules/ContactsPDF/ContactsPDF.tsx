import { View, StyleSheet } from '@react-pdf/renderer';

import { TitlePDF, ContactPDF } from '../../atoms';

import { PersonalDateType } from '../../../../../assets/const';

type ContactType = Omit<PersonalDateType, 'fullName' | 'bio' | 'position'>;

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    paddingTop: 30,
    paddingLeft: 15,
  },
  block: {
    marginBottom: 10,
  },
  link: { fontFamily: 'MonoSpaceBold', fontSize: 10 },
  name: { fontFamily: 'MonoSpace', fontSize: 10 },
});

export const ContactsPDF = ({ phone, mail, website, adress }: ContactType) => {
  return (
    <View style={styles.container}>
      <TitlePDF>Contacts</TitlePDF>
      <ContactPDF contactName="phone" contactData={phone} />
      <ContactPDF contactName="mail" contactData={mail} />
      <ContactPDF contactName="website" contactData={website} />
      <ContactPDF contactName="adress" contactData={adress} />
    </View>
  );
};
