import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { Title } from './common';

import { EductionDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';

const styles = StyleSheet.create({
  container: { marginBottom: 5, marginTop: 5 },
  block: { marginBottom: 10 },
  school: { fontFamily: 'MonoSpaceBold', fontSize: 10 },
  date: { fontFamily: 'MonoSpace', fontSize: 10 },
  degree: { fontFamily: 'MonoSpace', fontSize: 10 },
  study: { fontFamily: 'MonoSpaceItalic', fontSize: 10 },
});

export const Education = (data: EductionDataType[]) => {
  const educationContent = () => {
    const educations = Object.values(data);

    const children = educations.map((education) => {
      const { study, degree, educationFromYear, educationToYear, school } = education;

      return (
        <View key={uniqueKey()} style={styles.block}>
          <Text key={uniqueKey()} style={styles.school}>
            {school}
          </Text>
          <Text
            key={uniqueKey()}
            style={styles.date}
          >{`${educationFromYear} -- ${educationToYear}`}</Text>
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
