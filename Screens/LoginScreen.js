import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 1 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 1 * 2;
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/images.jpeg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 0 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Log in</Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Email"
                value={state.email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={state.password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={(keyboardHide, () => navigation.navigate("Home"))}
              >
                <Text style={styles.textBtn}>Sign in</Text>
              </TouchableOpacity>
              <View style={styles.navigate}>
                <Text style={styles.text}>
                  Don't have an account?
                  <Text
                    style={styles.textNav}
                    onPress={() => navigation.navigate("Register")}
                  >
                    {" "}
                    Register
                  </Text>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    height: 489,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "Roboto-Bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderRadius: 8,
    height: 50,
    marginBottom: 16,
    paddingLeft: 16,
    fontSize: 16,
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    marginHorizontal: 16,
    height: 52,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "Roboto-Regular",
  },
  navigate: {
    alignItems: "center",
    marginBottom: 110,
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "Roboto-Regular",
  },
  textNav: {
    color: "red",
    // color: "#1B4371",
    fontSize: 18,
    fontWeight: "Roboto-Regular",
  },
});
