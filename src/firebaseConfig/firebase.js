import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBgQgmFxwb2fp7wCGPvKH-rpMoQ-FlDdhE",
  authDomain: "authapp-9f718.firebaseapp.com",
  projectId: "authapp-9f718",
  storageBucket: "authapp-9f718.appspot.com",
  messagingSenderId: "188420677143",
  appId: "1:188420677143:web:36830aa1bb8b2b0ef74652",
  measurementId: "G-G2TEB62PFX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
