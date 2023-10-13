import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { Title } from './common';

import { EductionDataType } from '../../../../../../assets/const';
import { uniqueKey } from '../../../../../../assets/lib';

const styles = StyleSheet.create({
  container: { minWidth: '100%', paddingTop: 30, paddingLeft: 15 },
  block: { marginBottom: 10 },
  title: { fontFamily: 'RobotoBold', fontSize: 10 },
  date: { fontFamily: 'Roboto', fontSize: 10 },
  degree: { fontFamily: 'Roboto', fontSize: 10 },
  study: { fontFamily: 'Roboto', fontSize: 10 },
});

export const Education = (data: EductionDataType[]) => {
  const educationContent = () => {
    const educations = Object.values(data);

    const children = educations.map((education) => {
      const { study, degree, educationFromYear, educationToYear, school } = education;
      const title = `${school} | ${educationFromYear} -- ${educationToYear}`;

      return (
        <View key={uniqueKey()} style={styles.block}>
          <Text key={uniqueKey()} style={styles.title}>
            {title}
          </Text>
          <Text key={uniqueKey()} style={styles.degree}>
            {degree}
          </Text>
          <Text key={uniqueKey()} style={styles.study}>
            {study}
          </Text>
        </View>
      );
    });

    return children;
  };

  return (
    <View style={styles.container}>
      <Title>Education</Title>
      {educationContent()}
    </View>
  );
};
