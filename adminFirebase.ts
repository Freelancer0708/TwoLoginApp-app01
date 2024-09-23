import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let adminApp;
if (!getApps().some(app => app.name === 'adminApp')) {
    adminApp = initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_ADMIN,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_ADMIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ADMIN,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_ADMIN,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_ADMIN,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_ADMIN
    }, 'adminApp');
} else {
    adminApp = getApp('adminApp');
}

const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);

// 永続性の設定
setPersistence(adminAuth, browserLocalPersistence);

export { adminAuth, adminDb };
