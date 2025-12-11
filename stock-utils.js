// stock-utils.js
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6izuR2_oyHbAVhkIVkH0OHj6yAOduD_8",
  authDomain: "apna-kitchen-acdcc.firebaseapp.com",
  projectId: "apna-kitchen-acdcc",
  storageBucket: "apna-kitchen-acdcc.appspot.com",
  messagingSenderId: "129562055761",
  appId: "1:129562055761:web:baa01f9fea6f8eed025470"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Returns stock quantity for a productId
 * @param {string} productId
 * @returns {Promise<number>}
 */
export async function getStockQty(productId) {
  const stockRef = collection(db, 'stock');
  const q = query(stockRef, where('productId', '==', productId));
  const snap = await getDocs(q);
  if (!snap.empty) {
    return Number(snap.docs[0].data().quantity) || 0;
  }
  return 0;
}
