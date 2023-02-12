// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-2cz5MILcr9vKeij_OKoBJx-DhjZJGTQ',
  authDomain: 'lem-react-chat.firebaseapp.com',
  projectId: 'lem-react-chat',
  storageBucket: 'lem-react-chat.appspot.com',
  messagingSenderId: '447806365648',
  appId: '1:447806365648:web:ac919d86a113059d8da3d5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
