import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDPrqRhYsImoet9OH1p8mScYA6xHvNdZ8g",
    authDomain: "solasta-d6c9d.firebaseapp.com",
    databaseURL: "https://solasta-d6c9d.firebaseio.com",
    projectId: "solasta-d6c9d",
    storageBucket: "solasta-d6c9d.appspot.com",
    messagingSenderId: "1004435824657"
  };

const fire = firebase.initializeApp(config);
export default fire;