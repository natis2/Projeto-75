import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBwAqPkS4ewIXuiV6NR11rvfIgQwPs8NGc",
  authDomain: "projeto-75-abe1c.firebaseapp.com",
  projectId: "projeto-75-abe1c",
  storageBucket: "projeto-75-abe1c.appspot.com",
  messagingSenderId: "965653842308",
  appId: "1:965653842308:web:584e87cfa57ddbb24c35d1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
