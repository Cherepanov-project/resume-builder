import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { SubtitlePDF, ContactPDF } from '../../atoms';
import { Box } from '@mui/material';

type ContactType = Omit<PersonalDataType, 'fullName' | 'bio' | 'position'>;
interface IContact {
  data: ContactType;
  style: StyleOptionType;
}

export const ContactsPDF = (props: IContact) => {
  const { data, style } = props;
  const { phone, email, website, address } = data;
  const { Subtitle, Contact, ContactLink, ContactIcon, Text, ContactWrapper } = style;

  const propsSubtitle = { str: 'Contacts ', style: Subtitle };
  const propsContact = { Contact, ContactLink, ContactIcon, Text };
  const contacts = <>
    <ContactPDF contactName="phone" contactData={phone} style={propsContact} />
    <ContactPDF contactName="email" contactData={email} style={propsContact} />
    <ContactPDF contactName="website" contactData={website} style={propsContact} />
    <ContactPDF contactName="address" contactData={address} style={propsContact} />
  </>

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" style={ContactWrapper}>
      <SubtitlePDF {...propsSubtitle} />
      {Subtitle.name === 'metro' ?
      <Box sx ={{ display: 'flex', flexDirection: 'column'}}>
        {contacts}
      </Box> :
      contacts }
    </Box>
  );
};
