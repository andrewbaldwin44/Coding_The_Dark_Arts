import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './config';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const githubProvider = new firebase.auth.GithubAuthProvider();

// Helper method for initial load of site
// Firebase takes a second to determine currentUser object
// So we can use local storage for initial UI purposes
const getAuthenticationStatus = () => {
  return localStorage.getItem('isAuthenticated');
};

export { auth, googleProvider, githubProvider, getAuthenticationStatus };
