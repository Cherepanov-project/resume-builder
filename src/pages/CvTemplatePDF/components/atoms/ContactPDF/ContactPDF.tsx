import { View, Link, Image } from '@react-pdf/renderer';

import phoneIcon from '../../../assets/icons/icon-phone.png';
import mailIcon from '../../../assets/icons/icon-mail.png';
import siteIcon from '../../../assets/icons/icon-site.png';
import adressIcon from '../../../assets/icons/icon-adress.png';

import { StyleOptionType, StyleType } from '../../../const';
import { TextPDF } from '../../atoms';

type ContactNameType = 'phone' | 'mail' | 'website' | 'adress';

interface IContactPDF {
  contactName: ContactNameType;
  contactData: string;
  style: StyleOptionType;
}

const TextContact = (contactData: string, style: StyleType) => {
  const textContactProps = { str: contactData, style };

  return <TextPDF {...textContactProps} />;
};

const LinkContact = (srcLink: string, contactData: string, ContactLink: StyleType) => {
  return (
    <Link src={srcLink} style={ContactLink}>
      {contactData}
    </Link>
  );
};

export const ContactPDF = ({ contactName, contactData, style }: IContactPDF) => {
  const { Contact, ContactLink, ContactIcon, Text } = style;
  let srcLink = `${contactName}:${contactData}`;
  let iconName, contactPDFContent;

  switch (contactName) {
    case 'phone':
      contactPDFContent = LinkContact(srcLink, contactData, ContactLink);
      iconName = phoneIcon;
      break;

    case 'mail':
      contactPDFContent = LinkContact(srcLink, contactData, ContactLink);
      iconName = mailIcon;
      break;

    case 'website':
      srcLink = contactName;
      contactPDFContent = LinkContact(srcLink, contactData, ContactLink);
      iconName = siteIcon;
      break;

    case 'adress':
      contactPDFContent = TextContact(contactData, Text);
      iconName = adressIcon;
      break;

    default:
      contactPDFContent = '';
      srcLink = '';
      iconName = '';
  }

  return (
    <View style={Contact}>
      <Image style={ContactIcon} src={iconName} />
      {contactPDFContent}
    </View>
  );
};
