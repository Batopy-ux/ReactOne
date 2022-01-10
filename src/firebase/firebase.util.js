import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCrSeIPlIZK7kwICO9GlhyY99CWlXT8B04",
  authDomain: "crwn-db-10476.firebaseapp.com",
  projectId: "crwn-db-10476",
  storageBucket: "crwn-db-10476.appspot.com",
  messagingSenderId: "845543977585",
  appId: "1:845543977585:web:51d5093d6a9d96eb8f61d0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;