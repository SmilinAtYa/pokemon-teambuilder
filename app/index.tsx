import { router } from "expo-router";
import { View, StyleSheet } from "react-native";
import Button from "./components/Button";

const Home = () => {
  const onPressTeambuilder = () => router.push("/teambuilder");
  const onPressDamageCalc = () => router.push("/damage-calculator");
  const onPressSearch = () => router.push("/search");

  return (
    <View style={styles.container}>
      <View style={styles.topButton}>
        <Button text="Go to Teambuilber" onPress={onPressTeambuilder} />
      </View>
      <Button text="Go to Damage Calculator" onPress={onPressDamageCalc} />
      <View style={styles.bottomButton}>
        <Button text="Pokemon Search" onPress={onPressSearch} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  topButton: {
    marginTop: 48,
  },
  bottomButton: {
    marginBottom: 48,
  },
});
