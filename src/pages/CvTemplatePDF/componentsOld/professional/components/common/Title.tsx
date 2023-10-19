import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#1a4780',
    backgroundColor: '#cccc00',
    textTransform: 'uppercase',
    padding: 5,
    marginBottom: 15,
  },
});

interface ITitleProps {
  children: string;
}

export const Title = ({ children }: ITitleProps) => <Text style={styles.title}>{children}</Text>;
