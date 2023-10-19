import { View, StyleSheet } from '@react-pdf/renderer';

import { TitlePDF, ListTitlePDF, ListItemsPDF } from '../../atoms';

import { EductionDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';

const styles = StyleSheet.create({
  container: { minWidth: '100%', paddingTop: 30, paddingLeft: 15 },
  block: { marginBottom: 10 },
  title: { fontFamily: 'RobotoBold', fontSize: 10 },
  date: { fontFamily: 'Roboto', fontSize: 10 },
  degree: { fontFamily: 'Roboto', fontSize: 10 },
  study: { fontFamily: 'Roboto', fontSize: 10 },
});

export const EducationPDF = (data: EductionDataType[]) => {
  const educationContent = (data: EductionDataType[]) => {
    const educations = Object.values(data);

    const children = educations.map((education) => {
      const { name, position, description, fromYear, toYear } = education;
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
      <TitlePDF>Education</TitlePDF>
      {educationContent(data)}
    </View>
  );
};
