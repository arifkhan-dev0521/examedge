import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2YcD0N1CyepEXuY0fwzoeTx6Uc5H5XRU",
  authDomain: "examedge-8366e.firebaseapp.com",
  projectId: "examedge-8366e",
  storageBucket: "examedge-8366e.firebasestorage.app",
  messagingSenderId: "168833957147",
  appId: "1:168833957147:web:6265974ee5971fd47ae7be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);