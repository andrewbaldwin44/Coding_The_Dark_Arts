import { createContext, useEffect, useState } from 'react';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase';
import 'firebase/auth';

export const AppContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCPS5G-kMY9o4ipCfsEaKTyp0w4T8vXXt4",
  authDomain: "coding-the-dark-arts.firebaseapp.com",
  projectId: "coding-the-dark-arts",
  storageBucket: "coding-the-dark-arts.appspot.com",
  messagingSenderId: "54561193333",
  appId: "1:54561193333:web:c5de73872260c7f3fda73c"
};

let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

const firebaseAppAuth = firebaseApp.auth();

function createUserWithEmail(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.message);
  });
}

function signInWithEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.message);
  });
}

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState(null);

  const handleSignOut = () => {
    signOut();
    setAppUser({});
  }

  useEffect(() => {
    if (user) {
      const {
        email
      } = user;

      setAppUser({
        email,
      });
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        appUser,
        createUserWithEmail,
        signInWithEmail,
        handleSignOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  firebaseAppAuth,
})(AppProvider);
