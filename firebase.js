
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbyim1zVG7bY0NEsbElJSj6leFIIQs6u0",
  authDomain: "appcripto-c28df.firebaseapp.com",
  projectId: "appcripto-c28df",
  storageBucket: "appcripto-c28df.appspot.com",
  messagingSenderId: "296141215097",
  appId: "1:296141215097:web:3a5a71573692e39c764ba8"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);