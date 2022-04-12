import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaaI64DD9m_WpB0e_bWxSW3AHTrTkqD-g",
    authDomain: "fir-crud-70cce.firebaseapp.com",
    databaseURL: "https://fir-crud-70cce-default-rtdb.firebaseio.com",
    projectId: "fir-crud-70cce",
    storageBucket: "fir-crud-70cce.appspot.com",
    messagingSenderId: "494417853376",
    appId: "1:494417853376:web:2686d79e10b5be6bd46625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);