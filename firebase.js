// --- FULL WORKING FIREBASE CONFIG FOR DESHAJ STORE ---

const firebaseConfig = {
  apiKey: "AIzaSyA6izuR2_oyHbAVhkIVkH0OHj6yAOduD_8",
  authDomain: "apna-kitchen-acdcc.firebaseapp.com",
  databaseURL: "https://apna-kitchen-acdcc-default-rtdb.firebaseio.com",
  projectId: "apna-kitchen-acdcc",
  storageBucket: "apna-kitchen-acdcc.appspot.com",
  messagingSenderId: "129562055761",
  appId: "1:129562055761:web:baa01f9fea6f8eed025470",
  measurementId: "G-Q29T9CW41D"
};

// -----------------------------------------------------

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
