import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const loadFonts = async () => {
  await Font.loadAsync({
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
