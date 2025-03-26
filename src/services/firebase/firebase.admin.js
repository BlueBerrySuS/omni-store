import admin from "firebase-admin";

// Инициализируем Firebase Admin, если он ещё не был инициализирован
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_CREDENTIALS)
    ),
  });
}

const db = admin.firestore();
const productsCollection = db.collection("products");

export { db, productsCollection }