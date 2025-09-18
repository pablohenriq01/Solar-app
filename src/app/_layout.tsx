import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
      <StatusBar style="dark" backgroundColor="#fff" />

      <Stack
        screenOptions={{
        headerShown: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          contentStyle: { backgroundColor: "#fff" }, 
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  }
});
