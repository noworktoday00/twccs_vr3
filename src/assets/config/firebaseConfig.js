// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZOAkV7IcGciFj7NGpPe3lYymkkOXeAE",
  authDomain: "twccs-v2.firebaseapp.com",
  projectId: "twccs-v2",
  storageBucket: "twccs-v2.appspot.com",
  messagingSenderId: "267330684738",
  appId: "1:267330684738:web:6d78492cd931665da7aadb",
  measurementId: "G-ZGF0LQBB9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 這邊是不用帶 app 進去當變數的 !!!
export const storage = getStorage(app);
// Initialize Firebase Authentication and get a reference to the service
// 這邊是不用帶 app 進去當變數的 !!!
export const firebaseAuth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
