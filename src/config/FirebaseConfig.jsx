import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXXvrXzHd1fgAK6aQpXEFtav-D1BPJ6GM",
  authDomain: "mychat-9cdab.firebaseapp.com",
  projectId: "mychat-9cdab",
  storageBucket: "mychat-9cdab.appspot.com",
  messagingSenderId: "635622244299",
  appId: "1:635622244299:web:9a1eeee9aa2f7c4fbc004e"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig