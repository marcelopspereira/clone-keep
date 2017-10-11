import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDMqak5eGYSAmWF9Q29A4f50172Vnx8K84",
  authDomain: "clone-keep.firebaseapp.com",
  databaseURL: "https://clone-keep.firebaseio.com",
  projectId: "clone-keep",
  storageBucket: "",
  messagingSenderId: "727145035106"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
