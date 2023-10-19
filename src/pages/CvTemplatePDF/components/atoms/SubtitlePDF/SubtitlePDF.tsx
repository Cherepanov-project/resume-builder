import { Text, StyleSheet } from '@react-pdf/renderer';

interface ISubtitleProps {
  children: string;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '',
    backgroundColor: '',
    padding: '',
  },
});

export const SubtitlePDF = ({ children }: ISubtitleProps, painted: boolean) => {
  let subtitleStyle = styles.subtitle;

  if (painted) subtitleStyle = { ...subtitleStyle, color: 'white', backgroundColor: '#cccc00' };

  return <Text style={subtitleStyle}>{children}</Text>;
};

//   subtitle: {
//     fontFamily: 'RobotoBold',
//     fontSize: 14,
//     textTransform: 'uppercase',
//     color: 'white',
//     marginBottom: 10,
//   },

// title: {
//     fontFamily: 'Roboto',
//     fontSize: 14,
//     textTransform: 'uppercase',

//     backgroundColor: '#cccc00',
//     color: '#1a4780',
//     padding: 5,
//     marginBottom: 15,
//   },
