import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { TitlePDF } from '../../atoms';

import { HobbyDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    paddingTop: 30,
    paddingLeft: 15,
  },
  bulletPoint: {
    fontSize: 10,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'RobotoBold',
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
});

export const HobbiesPDF = (data: HobbyDataType[]) => {
  const hobbiesContent = () => {
    const hobbies = Object.values(data);

    const children = hobbies.map((hobby) => {
      const hobbyTitle = hobby.hobby;

      return (
        <View key={uniqueKey()} style={styles.item}>
          <Text key={uniqueKey()} style={styles.bulletPoint}>
            •
          </Text>
          <Text key={uniqueKey()} style={styles.itemContent}>
            {hobbyTitle}
          </Text>
        </View>
      );
    });

    return children;
  };

  return (
    <View style={styles.container}>
      <TitlePDF>Experience</TitlePDF>
      {hobbiesContent()}
    </View>
  );
};
