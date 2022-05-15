import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzmq3MaT8OddeB17HrW12Qob2FvLT4Gqo",
  authDomain: "testingb-b5f3a.firebaseapp.com",
  projectId: "testingb-b5f3a",
  storageBucket: "testingb-b5f3a.appspot.com",
  messagingSenderId: "358654005628",
  appId: "1:358654005628:web:ae6240dd0f9a8bacdc54f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
