import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiAHMltqoNsLTTambum8tbX68411L_6P4",
  authDomain: "chat-80e22.firebaseapp.com",
  projectId: "chat-80e22",
  storageBucket: "chat-80e22.appspot.com",
  messagingSenderId: "868422223421",
  appId: "1:868422223421:web:777b1affce870c1a944c54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
