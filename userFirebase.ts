import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let userApp;
if (!getApps().some(app => app.name === 'userApp')) {
    userApp = initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_USER,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_USER,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_USER,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_USER,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_USER,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_USER
    }, 'userApp');
} else {
    userApp = getApp('userApp');
}

const userAuth = getAuth(userApp);
const userDb = getFirestore(userApp);

// 永続性の設定
setPersistence(userAuth, browserLocalPersistence);

export { userAuth, userDb };
