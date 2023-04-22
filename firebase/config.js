import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const firebaseConfig = {
  apiKey: "AIzaSyCzWdkOxH9Sdn0sd9i198g_-VbQWAtfyL4",
  authDomain: "reactnativeproject-a5d5a.firebaseapp.com",
  projectId: "reactnativeproject-a5d5a",
  storageBucket: "reactnativeproject-a5d5a.appspot.com",
  messagingSenderId: "922371440560",
  appId: "1:922371440560:web:069219998aaad74cbae075",
  measurementId: "G-KZ14B94Y06",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
