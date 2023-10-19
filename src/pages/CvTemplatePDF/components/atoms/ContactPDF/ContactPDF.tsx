import { View, Link, Text, Image, StyleSheet } from '@react-pdf/renderer';

import { phoneIcon, mailIcon, siteIcon, adressIcon } from '../../../assets';

type ContactNameType = 'phone' | 'mail' | 'website' | 'adress';

interface IContactPDF {
  contactName: ContactNameType;
  contactData: string;
}

const styles = StyleSheet.create({
  contactWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  contactLink: {
    textDecoration: 'none',
    justifySelf: 'center',
    fontSize: 14,
  },
  contactText: { fontSize: 14 },
  contactIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export const ContactPDF = ({ contactName, contactData }: IContactPDF) => {
  let srcLink, iconName, contactPDFContent;

  switch (contactName) {
    case 'phone':
      srcLink = `${contactName}:${contactData}`;
      contactPDFContent = (
        <Link src={srcLink} style={styles.contactLink}>
          {contactData}
        </Link>
      );
      iconName = phoneIcon;

      break;
    case 'mail':
      srcLink = `${contactName}:${contactData}`;
      contactPDFContent = (
        <Link src={srcLink} style={styles.contactLink}>
          {contactData}
        </Link>
      );
      iconName = mailIcon;

      break;
    case 'website':
      srcLink = contactName;
      contactPDFContent = (
        <Link src={srcLink} style={styles.contactLink}>
          {contactData}
        </Link>
      );
      iconName = siteIcon;

      break;
    case 'adress':
      srcLink = `${contactName}:${contactData}`;
      contactPDFContent = <Text style={styles.contactText}>{contactData}</Text>;
      iconName = adressIcon;

      break;

    default:
      contactPDFContent = '';
      srcLink = '';
      iconName = '';
  }

  return (
    <View style={styles.contactWrapper}>
      <Image style={styles.contactIcon} src={iconName} />
      {contactPDFContent}
    </View>
  );
};
