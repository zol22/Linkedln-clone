/* 
  This file is needed for configure firebase (database and authentication)
*/

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCECZwu_OEydxG3fQUkwmicbdW5u7tfwg0",
    authDomain: "linkedln-clone-4f613.firebaseapp.com",
    projectId: "linkedln-clone-4f613",
    storageBucket: "linkedln-clone-4f613.appspot.com",
    messagingSenderId: "56333498874",
    appId: "1:56333498874:web:79deeb218a58682afbcc43",
    measurementId: "G-0TSSB28WCV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); // like the database
  const auth = firebase.auth(); // authentication

  export { db, auth };