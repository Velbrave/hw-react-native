import React from "react";
// import { StatusBar } from "expo-status-bar";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/images.jpeg")}
      >
        <LoginScreen />
        {/* <RegistrationScreen /> */}
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    marginHorizontal: 40,
    borderRadius: 4,
    height: 40,
    textAlign: "center",
  },
});
