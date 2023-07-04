import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDPCnN_NDTGyXHVeN27MainqfBcSXFRUHc",
   authDomain: "reactlinks-fcb5d.firebaseapp.com",
   projectId: "reactlinks-fcb5d",
   storageBucket: "reactlinks-fcb5d.appspot.com",
   messagingSenderId: "288416117915",
   appId: "1:288416117915:web:2be5effe2bf9bd750b823e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
