import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAOJATQ8wdXKY2F2KLDvDYhgXOqmQbss5w',
  authDomain: 'meetups-react-typescript.firebaseapp.com',
  databaseURL: 'https://meetups-react-typescript-default-rtdb.firebaseio.com',
  projectId: 'meetups-react-typescript',
  storageBucket: 'meetups-react-typescript.appspot.com',
  messagingSenderId: '1008006452637',
  appId: '1:1008006452637:web:5cc20e81def548ee4e4b74',
});

export const db = getFirestore();
