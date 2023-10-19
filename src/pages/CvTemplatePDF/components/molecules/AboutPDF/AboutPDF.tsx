import { View, Text } from '@react-pdf/renderer';

import { TitlePDF } from '../../atoms';

interface IAboutType {
  bio: string;
}

export const AboutPDF = ({ bio }: IAboutType) => {
  return (
    <View>
      <TitlePDF>About me</TitlePDF>
      <Text>{bio}</Text>
    </View>
  );
};

// import { PersonalDateType } from '../../../../../assets/const';

// type AboutType = Pick<PersonalDateType, 'bio'>;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//   },
//   header: {
//     marginTop: 10,
//   },

//   block: {
//     marginBottom: 20,
//   },
//   wrapper: {
//     flexDirection: 'row',
//     alignContent: 'center',
//   },
//   diveder: {
//     marginTop: 20,
//     marginBottom: 20,
//     borderTop: '3px solid white',
//   },
//   title: {
//     fontFamily: 'RobotoBold',
//     fontSize: 24,
//     fontWeight: 600,
//     textTransform: 'uppercase',
//     color: 'white',
//   },
//   subtitle: {
//     fontFamily: 'RobotoBold',
//     fontSize: 14,
//     textTransform: 'uppercase',
//     color: 'white',
//     marginBottom: 10,
//   },
//   text: { fontFamily: 'Roboto', fontSize: 14, color: 'white' },
//   textSpecial: {
//     fontFamily: 'Roboto',
//     fontSize: 16,
//     color: 'white',
//     textTransform: 'uppercase',
//     marginTop: 10,
//   },
//   link: {
//     textDecoration: 'none',
//     justifySelf: 'center',
//     fontFamily: 'Roboto',
//     fontSize: 14,
//     color: 'white',
//   },
//   icon: {
//     width: 16,
//     height: 16,
//     marginRight: 5,
//   },
// });
