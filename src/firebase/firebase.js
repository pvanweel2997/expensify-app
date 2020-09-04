import * as firebase from 'firebase';
import moment from 'moment';

console.log('databaseurl',process.env.FIREBASE_DATABASE_URL);
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
    // measurementId: "G-T1J2MYFJ98"
  };

  firebase.initializeApp(config);
//   firebase.analytics();

const database = firebase.database();

export {database as default, firebase};