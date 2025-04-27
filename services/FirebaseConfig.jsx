// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Platform } from "react-native";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-food-order-ee355.firebaseapp.com",
  databaseURL: "https://react-food-order-ee355-default-rtdb.firebaseio.com",
  projectId: "react-food-order-ee355",
  storageBucket: "react-food-order-ee355.firebasestorage.app",
  messagingSenderId: "96635075258",
  appId: "1:96635075258:web:501cde3fbe6279e392e083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = Platform.OS == "web" ? getAuth(app) : initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAyncStorage),
});