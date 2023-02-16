import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './screens/Navigator';
import { initializeApp } from 'firebase/app';
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from "@env";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: `${AUTH_DOMAIN}`,
  projectId: `${PROJECT_ID}`,
  storageBucket: `${STORAGE_BUCKET}`,
  messagingSenderId: `${MESSAGING_SENDER_ID}`,
  appId: `${APP_ID}`
};

// const app = initializeApp(firebaseConfig);

export default function App() {
  console.log(`${APP_ID}`);
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
