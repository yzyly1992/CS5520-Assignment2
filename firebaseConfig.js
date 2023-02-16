import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };