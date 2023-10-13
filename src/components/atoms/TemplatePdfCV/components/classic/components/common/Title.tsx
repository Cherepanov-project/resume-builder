import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MonoSpaceBold',
    fontSize: 14,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
});

interface ITitleProps {
  children: string;
}

export const Title = ({ children }: ITitleProps) => <Text style={styles.title}>{children}</Text>;
