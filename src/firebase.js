import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAgk4mFpFRQA7U1yQIuX30LoNxzUFeoZ1o",
    authDomain: "netflix-8664e.firebaseapp.com",
    projectId: "netflix-8664e",
    storageBucket: "netflix-8664e.appspot.com",
    messagingSenderId: "489079771917",
    appId: "1:489079771917:web:6608437168281dcb3dd644"
  };

 



  const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {auth};
  export default db; 