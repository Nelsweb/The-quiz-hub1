
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpwh0CuHHA0BAW5MHKxw3yJp7hCu2yeRs",
  authDomain: "king-crypto-test.firebaseapp.com",
  databaseURL: "https://king-crypto-test-default-rtdb.firebaseio.com",
  projectId: "king-crypto-test",
  storageBucket: "king-crypto-test.firebasestorage.app",
  messagingSenderId: "216127578138",
  appId: "1:216127578138:web:4c9e4fdf405df1a086b1a3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, onValue, query, orderByChild, limitToLast };
