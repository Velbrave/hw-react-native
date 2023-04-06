import React, { useState } from "react";
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
} from "react-native";

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 0 : 100 }}
          >
            <Text style={styles.textLogIn}>Log in</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={keyboardHide}
            >
              <Text style={styles.textBtn}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Don't have an account? Register</Text>
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
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  textLogIn: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
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
    fontWeight: "regular",
  },
  text: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "regular",
    marginBottom: 110,
  },
});
