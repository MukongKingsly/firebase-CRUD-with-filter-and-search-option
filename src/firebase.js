import firebase from "firebase/compat/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCaaI64DD9m_WpB0e_bWxSW3AHTrTkqD-g",
    authDomain: "fir-crud-70cce.firebaseapp.com",
    projectId: "fir-crud-70cce",
    storageBucket: "fir-crud-70cce.appspot.com",
    messagingSenderId: "494417853376",
    appId: "1:494417853376:web:2686d79e10b5be6bd46625"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref(); 