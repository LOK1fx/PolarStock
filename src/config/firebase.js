import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpw0y-AwCBlEqmJLBcq4681GRUBpRKi6c",
  authDomain: "polarstock-5a5f3.firebaseapp.com",
  projectId: "polarstock-5a5f3",
  storageBucket: "polarstock-5a5f3.appspot.com",
  messagingSenderId: "784607837331",
  appId: "1:784607837331:web:2ac3d47222f4c2550f6166"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);
