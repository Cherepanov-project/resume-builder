import { View, Link, Image, Text, StyleSheet } from '@react-pdf/renderer';

import { PersonalDateType } from '../../../../../../assets/const';
import { uniqueKey } from '../../../../../../assets/lib';

import iconPhone from '../../../../../../assets/images/icon-phone.png';
import iconMail from '../../../../../../assets/images/icon-mail.png';
import iconSite from '../../../../../../assets/images/icon-site.png';
import iconAdress from '../../../../../../assets/images/icon-adress.png';

const styles = StyleSheet.create({
  personal: {
    marginTop: 10,
  },
  header: {
    marginTop: 10,
  },

  block: {
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  diveder: {
    marginTop: 20,
    marginBottom: 20,
    borderTop: '3px solid white',
  },
  title: {
    fontFamily: 'RobotoBold',
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'white',
  },
  subtitle: {
    fontFamily: 'RobotoBold',
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 10,
  },
  text: { fontFamily: 'Roboto', fontSize: 14, color: 'white' },
  textSpecial: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  link: {
    textDecoration: 'none',
    justifySelf: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    color: 'white',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export const Personal = (data: PersonalDateType) => {
  const { fullName, address, bio, jobTitle, phone, website, email } = data;
  const arrFullName = fullName.split(' ');

  return (
    <View style={styles.personal}>
      <View style={styles.header}>
        {arrFullName.map((word) => (
          <Text key={uniqueKey()} style={styles.title}>
            {word}
          </Text>
        ))}
        <Text style={styles.textSpecial}>{jobTitle}</Text>
      </View>
      <View style={styles.diveder} />
      <View style={styles.block}>
        <Text style={styles.subtitle}>ABOUT ME</Text>
        <Text style={styles.text}>{bio}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>CONTACT</Text>
        <View style={styles.wrapper}>
          <Image style={styles.icon} src={iconPhone} />
          <Link src={`phone:${phone}`} style={styles.link}>
            {phone}
          </Link>
        </View>
        <View style={styles.wrapper}>
          <Image style={styles.icon} src={iconMail} />
          <Link src={`mailto:${email}`} style={styles.link}>
            {email}
          </Link>
        </View>
        <View style={styles.wrapper}>
          <Image style={styles.icon} src={iconSite} />
          <Link src={website} style={styles.link}>
            {website}
          </Link>
        </View>
        <View style={styles.wrapper}>
          <Image style={styles.icon} src={iconAdress} />
          <Text style={styles.text}>{address}</Text>
        </View>
      </View>
    </View>
  );
};
