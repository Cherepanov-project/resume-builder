import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { Title } from './common';

import { ExperienceDataType } from '../../../../../../assets/const';
import { uniqueKey } from '../../../../../../assets/lib';

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    paddingTop: 30,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'MonoSpaceItalic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'MonoSpace',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'MonoSpaceBold',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'MonoSpace',
  },
});

const ExperienceEntry = ({
  workTitle,
  experienceFromYear,
  experienceToYear,
  company,
  companyInfo,
}: ExperienceDataType) => {
  const title = `${company} | ${workTitle}`;

  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{`${experienceFromYear} - ${experienceToYear}`}</Text>
        </View>
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
      <Title>Experience</Title>
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
