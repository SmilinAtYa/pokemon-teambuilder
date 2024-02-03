import { Stack } from "expo-router";

const RootNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen name="search" options={{ title: "Pokemon Search" }} />
      <Stack.Screen name="teambuilder" options={{ title: "Teambuilder" }} />
      <Stack.Screen
        name="damage-calculator"
        options={{ title: "Damage Calculator" }}
      />
    </Stack>
  );
};

export default RootNav;
