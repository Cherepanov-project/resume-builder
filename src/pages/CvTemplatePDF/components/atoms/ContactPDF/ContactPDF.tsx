import phoneIcon from '../../../assets/icons/icon-phone.png';
import mailIcon from '../../../assets/icons/icon-mail.png';
import siteIcon from '../../../assets/icons/icon-site.png';
import adressIcon from '../../../assets/icons/icon-adress.png';

import { StyleOptionType, StyleType } from '../../../const';
import { TextPDF } from '../../atoms';
import { Box, Typography } from '@mui/material';

type ContactNameType = 'phone' | 'email' | 'website' | 'address';

interface IContactPDF {
  contactName: ContactNameType;
  contactData: string;
  style: StyleOptionType;
}

const TextContact = (contactData: string, style: StyleType) => {
  const textContactProps = { str: contactData, style };

  return <TextPDF {...textContactProps} />;
};

const LinkContact = (contactData: string, ContactLink: StyleType) => {
  return <Typography style={ContactLink}>{contactData}</Typography>;
};

export const ContactPDF = ({ contactName, contactData, style }: IContactPDF) => {
  const { Contact, ContactLink, ContactIcon } = style;
  let iconName, contactPDFContent;

  switch (contactName) {
    case 'phone':
      contactPDFContent = LinkContact(contactData, ContactLink);
      iconName = phoneIcon;
      break;

    case 'email':
      contactPDFContent = LinkContact(contactData, ContactLink);
      iconName = mailIcon;
      break;

    case 'website':
      contactPDFContent = LinkContact(contactData, ContactLink);
      iconName = siteIcon;
      break;

    case 'address':
      contactPDFContent = TextContact(contactData, ContactLink);
      iconName = adressIcon;
      break;

    default:
      contactPDFContent = '';
      iconName = '';
  }

  return (
    <Box style={Contact} display="flex">
      <img style={ContactIcon} src={iconName} />
      {contactPDFContent}
    </Box>
  );
};
