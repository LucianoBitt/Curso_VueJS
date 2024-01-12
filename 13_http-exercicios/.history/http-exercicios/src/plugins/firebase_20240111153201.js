import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_U4D0jb5atHq3LAnmeJ9z9n1XE_FtgRY",
    authDomain: "curso-vue-bitt.firebaseapp.com",
    projectId: "curso-vue-bitt",
    storageBucket: "curso-vue-bitt.appspot.com",
    messagingSenderId: "958410418497",
    appId: "1:958410418497:web:93a2a33fdbaf020c65d9c0",
    measurementId: "G-MQ0DGDET7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);