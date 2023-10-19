import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '',
    backgroundColor: '',
    padding: '',
  },
});

interface ITextProps {
  children: string;
}

export const TextPDF = ({ children }: ITextProps) => {
  const textStyle = { ...styles.text, color: 'white', backgroundColor: '#cccc00' };

  return <Text style={textStyle}>{children}</Text>;
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
