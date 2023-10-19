import { Text, StyleSheet } from '@react-pdf/renderer';

// import { uniqueKey } from '../../../../../assets/lib';

interface ITitleProps {
  children: string;
  wrapped?: boolean;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export const TitlePDF = ({ children }: ITitleProps) => {
  // wrapped = false
  // let titlePDFContent;
  // const arrTitle = children.split(' ');

  const titlePDFContent = <Text style={styles.title}>{children}</Text>;

  // switch (wrapped) {
  //   case true:
  //     titlePDFContent = arrTitle.map((word) => (
  //       <Text key={uniqueKey()} style={styles.title}>
  //         {word}
  //       </Text>
  //     ));
  //     break;

  //   case false:
  //     titlePDFContent = <Text style={styles.title}>{children}</Text>;
  //     break;

  //   default:
  //     titlePDFContent = <Text style={styles.title}>{children}</Text>;
  // }

  return titlePDFContent;
};

// const styles = StyleSheet.create({
//   title: {
//     fontFamily: 'Roboto',
//     fontSize: 14,
//     color: '#1a4780',
//     backgroundColor: '#cccc00',
//     textTransform: 'uppercase',
//     padding: 5,
//     marginBottom: 15,
//   },
// });

// const styles = StyleSheet.create({
//   title: {
//     fontFamily: 'MonoSpaceBold',
//     fontSize: 14,
//     marginBottom: 5,
//     textTransform: 'uppercase',
//   },
// });
