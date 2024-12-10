import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyARuDDc8ZXNoi5KRpqRFjSOmytBxE-4GSc",
    authDomain: "extract-website-57ad2.firebaseapp.com",
    projectId: "extract-website-57ad2",
    storageBucket: "extract-website-57ad2.firebasestorage.app",
    messagingSenderId: "956472986103",
    appId: "1:956472986103:web:f2ede5fa8a5132e5af06f2"
  };
  
  const app = initializeApp(firebaseConfig );
     const db = getFirestore(app);
     const auth = getAuth(app);
     const storage = getStorage(app);
     const storageRef = ref(storage);

     

     export default app;