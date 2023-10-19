import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { Title } from './common';

import { ExperienceDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    paddingTop: 30,
    paddingLeft: 15,
  },
  block: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'RobotoBold',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 11,
    color: 'grey',
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  bulletPoint: {
    fontSize: 10,
  },
});

const ExperienceEntry = ({
  workTitle,
  experienceFromYear,
  experienceToYear,
  company,
  companyInfo,
}: ExperienceDataType) => {
  const title = `${company} | ${experienceFromYear} - ${experienceToYear}`;

  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{workTitle}</Text>
      </View>
      {companyInfo.map((info) => (
        <View key={uniqueKey()} style={styles.item}>
          <Text key={uniqueKey()} style={styles.bulletPoint}>
            •
          </Text>
          <Text key={uniqueKey()} style={styles.itemContent}>
            {info}
          </Text>
        </View>
      ))}
    </View>
  );
};

export const Experience = (data: ExperienceDataType[]) => {
  const experiences = Object.values(data);

  return (
    <View style={styles.container}>
      <Title>work experience</Title>
      {experiences.map(
        ({ workTitle, experienceFromYear, experienceToYear, company, companyInfo }) => (
          <ExperienceEntry
            company={company}
            experienceFromYear={experienceFromYear}
            experienceToYear={experienceToYear}
            companyInfo={companyInfo}
            key={uniqueKey()}
            workTitle={workTitle}
          />
        ),
      )}
    </View>
  );
};
