import { Text, StyleSheet } from "react-native";

interface Typography {
  text: string;
}

export const H1 = ({ text }: Typography) => (
  <Text style={styles.text}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 6,
  },
});
