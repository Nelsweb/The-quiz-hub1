
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwh0CuHHA0BAW5MHKxw3yJp7hCu2yeRs",
  authDomain: "king-crypto-test.firebaseapp.com",
  databaseURL: "https://king-crypto-test-default-rtdb.firebaseio.com",
  projectId: "king-crypto-test",
  storageBucket: "king-crypto-test.firebasestorage.app",
  messagingSenderId: "216127578138",
  appId: "1:216127578138:web:4c9e4fdf405df1a086b1a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
