import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();
const { FieldValue } = firebase.firestore;

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

// Helper method for initial load of site
// Firebase takes a second to determine currentUser object
// So we can use local storage for initial UI purposes
const getAuthenticationStatus = () => {
  return localStorage.getItem('isAuthenticated');
};

export {
  auth,
  database,
  firebase,
  getAuthenticationStatus,
  githubProvider,
  googleProvider,
  twitterProvider,
  FieldValue,
};
