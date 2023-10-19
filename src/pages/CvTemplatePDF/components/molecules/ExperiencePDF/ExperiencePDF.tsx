import { View, StyleSheet } from '@react-pdf/renderer';

import { TitlePDF, ListTitlePDF, ListItemsPDF } from '../../atoms';

import { ExperienceDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';

const styles = StyleSheet.create({
  container: { minWidth: '100%', paddingTop: 30, paddingLeft: 15 },
  block: { marginBottom: 10 },
  title: { fontFamily: 'RobotoBold', fontSize: 10 },
  date: { fontFamily: 'Roboto', fontSize: 10 },
  degree: { fontFamily: 'Roboto', fontSize: 10 },
  study: { fontFamily: 'Roboto', fontSize: 10 },
});

export const ExperiencePDF = (data: ExperienceDataType[]) => {
  const experienceContent = () => {
    const experiences = Object.values(data);

    const children = experiences.map((experience) => {
      const { name, position, description, fromYear, toYear } = experience;
      const titleType = 'connected';

      return (
        <View key={uniqueKey()} style={styles.block}>
          <ListTitlePDF
            titleType={titleType}
            name={name}
            fromYear={fromYear}
            toYear={toYear}
            position={position}
          />
          <ListItemsPDF description={description} />
        </View>
      );
    });

    return children;
  };

  return (
    <View style={styles.container}>
      <TitlePDF>Experience</TitlePDF>
      {experienceContent()}
    </View>
  );
};
