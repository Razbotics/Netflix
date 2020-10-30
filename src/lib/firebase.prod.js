import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCG0IyKCpS2H1fRwb5pn6B-IQ1fwVZo6Fk",
  authDomain: "netflix-63339.firebaseapp.com",
  databaseURL: "https://netflix-63339.firebaseio.com",
  projectId: "netflix-63339",
  storageBucket: "netflix-63339.appspot.com",
  messagingSenderId: "772439072429",
  appId: "1:772439072429:web:0ed63908de6cc32565b024",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
