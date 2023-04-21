import * as firebase from "firebase";
import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase.initializeApp(firebaseConfig);
