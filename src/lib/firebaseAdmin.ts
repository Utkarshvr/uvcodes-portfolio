import admin from "firebase-admin";

const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!key) throw Error("Firebase admin Key not present");

const serviceAccount = JSON.parse(key);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const firestore = admin.firestore();
