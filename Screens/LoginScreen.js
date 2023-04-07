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
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 2 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 2 * 2;
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ ...styles.form, width: dimensions }}>
            <Text style={styles.textLogIn}>Log in</Text>
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
              onPress={keyboardHide}
            >
              <Text style={styles.textBtn}>Sign in</Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.text,
                marginBottom: isShowKeyboard ? 10 : 110,
              }}
            >
              Don't have an account? Register
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 279,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  textLogIn: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "Roboto-Bold",
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderRadius: 8,
    height: 50,
    textAlign: "auto",
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
  text: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "Roboto-Regular",
  },
});
