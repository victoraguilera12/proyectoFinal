import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
}

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)