import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 35,
  },
});
