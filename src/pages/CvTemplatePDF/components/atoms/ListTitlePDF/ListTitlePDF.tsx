import { View, Text, StyleSheet } from '@react-pdf/renderer';

import { uniqueKey } from '../../../../../assets/lib';

type TitleType = 'seperated' | 'connected' | '';

interface ITitleProps {
  titleType: TitleType;
  name: string;
  position: string;
  fromYear: string;
  toYear: string;
}

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'RobotoBold',
    textTransform: 'uppercase',
  },
});

export const ListTitlePDF = ({ titleType, name, position, fromYear, toYear }: ITitleProps) => {
  let listTitle;

  switch (titleType) {
    case 'seperated':
      listTitle = (
        <View>
          <Text key={uniqueKey()} style={styles.listTitle}>
            {`${name} | ${position}`}
          </Text>
          <Text key={uniqueKey()} style={styles.listTitle}>{`${fromYear} -- ${toYear}`}</Text>
        </View>
      );
      break;

    case 'connected':
      listTitle = (
        <View>
          <Text key={uniqueKey()} style={styles.listTitle}>
            {`${name} | ${fromYear} -- ${toYear}`}
          </Text>
          <Text style={styles.listTitle}>{position}</Text>
        </View>
      );
      break;

    default:
      listTitle = (
        <Text key={uniqueKey()} style={styles.listTitle}>
          ''
        </Text>
      );
  }

  return listTitle;
};
