import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFrlUF_ZotDRYQOvZSyoMAV5kwX5ETsNs",
  authDomain: "super-chat-72049.firebaseapp.com",
  databaseURL: "https://super-chat-72049-default-rtdb.firebaseio.com",
  projectId: "super-chat-72049",
  storageBucket: "super-chat-72049.appspot.com",
  messagingSenderId: "932482054190",
  appId: "1:932482054190:web:0d3f8ac8fa2ec9602187bf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
