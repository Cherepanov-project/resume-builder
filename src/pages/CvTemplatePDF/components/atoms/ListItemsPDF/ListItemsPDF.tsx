import { Text } from '@react-pdf/renderer';

import { uniqueKey } from '../../../../../assets/lib';

interface IListItemsProps {
  description: string;
}

export const ListItemsPDF = ({ description }: IListItemsProps) => {
  return (
    <>
      <Text key={uniqueKey()}>{description}</Text>
    </>
  );
};

// style={styles.study}
// : React.ReactNode

// HOBBIES ТОЛЬКО ТУТ

// {companyInfo.map((info) => (
//     <View key={uniqueKey()} style={styles.item}>
//       <Text key={uniqueKey()} style={styles.bulletPoint}>
//         •
//       </Text>
//       <Text key={uniqueKey()} style={styles.itemContent}>
//         {info}
//       </Text>
//     </View>
//   ))}
