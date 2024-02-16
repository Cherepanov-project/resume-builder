import { View } from '@react-pdf/renderer';

import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { SubtitlePDF, ContactPDF } from '../../atoms';

type ContactType = Omit<PersonalDataType, 'fullName' | 'bio' | 'position'>;
interface IContact {
  data: ContactType;
  style: StyleOptionType;
}

export const ContactsPDF = (props: IContact) => {
  const { data, style } = props;
  const { phone, email, website, address } = data;
  const { Subtitle, Contact, ContactLink, ContactIcon, Text } = style;

  const propsSubtitle = { str: 'Contacts ', style: Subtitle };
  const propsContact = { Contact, ContactLink, ContactIcon, Text };

  return (
    <View>
      <SubtitlePDF {...propsSubtitle} />
      <ContactPDF contactName="phone" contactData={phone} style={propsContact} />
      <ContactPDF contactName="email" contactData={email} style={propsContact} />
      <ContactPDF contactName="website" contactData={website} style={propsContact} />
      <ContactPDF contactName="address" contactData={address} style={propsContact} />
    </View>
  );
};
