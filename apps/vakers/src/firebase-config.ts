import firebase from 'firebase/app';
import { environment } from './environments/environment';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = environment.firebase;

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const gitHubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
  db,
  firebase,
  gitHubAuthProvider,
  googleAuthProvider
}