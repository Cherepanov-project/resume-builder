import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

import { PersonalDateType } from '../../../../../../assets/const';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
  },
  detailColumn: { display: 'flex', flexDirection: 'column' },
  detailBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    marginTop: '5px',
  },
  detailBlockWrapper: { display: 'flex', flexDirection: 'row' },

  contactsColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: { fontFamily: 'MonoSpaceBold', fontSize: 24, fontWeight: 600, textTransform: 'uppercase' },
  subTitle: { fontFamily: 'MonoSpaceBold', fontSize: 14, textTransform: 'uppercase' },
  text: { fontFamily: 'MonoSpace', fontSize: 14, textTransform: 'uppercase' },
  link: {
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    fontFamily: 'MonoSpace',
    fontSize: 10,
    color: 'black',
  },
});

export const Header = (data: PersonalDateType) => {
  const { fullName, address, bio, jobTitle, phone, website, email } = data;

  return (
    <View style={styles.header}>
      <View style={styles.detailColumn}>
        <Text style={styles.title}>{fullName}</Text>
        <View style={styles.detailBlock}>
          <View style={styles.detailBlockWrapper}>
            <Text style={styles.subTitle}>Adress: </Text>
            <Text style={styles.text}>{address}</Text>
          </View>
          <View style={styles.detailBlockWrapper}>
            <Text style={styles.subTitle}>About me: </Text>
            <Text style={styles.text}>{bio}</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.contactsColumn}>
        <Link src={website} style={styles.link}>
          {website}
        </Link>
        <Link src={`phone:${phone}`} style={styles.link}>
          {phone}
        </Link>
        <Link src={`mailto:${email}`} style={styles.link}>
          {email}
        </Link>
      </View>
    </View>
  );
};
