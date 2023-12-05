import { createApp } from 'vue'
import '@/assets/tailwind.css'
import router from './vue-router/index.js'
import SimulatorTop from './Toppage.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxsHS64aqsoe4LVBIfzMIzwSXv3OzVavo",
    authDomain: "simulator-95b6b.firebaseapp.com",
    projectId: "simulator-95b6b",
    storageBucket: "simulator-95b6b.appspot.com",
    messagingSenderId: "1059676621167",
    appId: "1:1059676621167:web:599edc8026541f9db1c09a",
    measurementId: "G-SK55KC6PTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default  db ;

createApp(SimulatorTop).use(router).mount('#simulator')