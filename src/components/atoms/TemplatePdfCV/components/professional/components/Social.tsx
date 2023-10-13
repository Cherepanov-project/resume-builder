import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { Title } from './common';

import { SocialDataType } from '../../../../../../assets/const';
import { uniqueKey } from '../../../../../../assets/lib';

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

export const Social = (data: SocialDataType[]) => {
  const socialContent = () => {
    const socials = Object.values(data);

    const children = socials.map((social) => {
      const { socialLink, socialName } = social;

      return (
        <View key={uniqueKey()} style={styles.block}>
          <Text key={uniqueKey()} style={styles.link}>
            {socialLink}
          </Text>
          <Text key={uniqueKey()} style={styles.name}>
            {socialName}
          </Text>
        </View>
      );
    });

    return children;
  };

  return (
    <View style={styles.container}>
      <Title>Social</Title>
      {socialContent()}
    </View>
  );
};
