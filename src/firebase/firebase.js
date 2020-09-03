import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "AIzaSyDQxRx4iJ-l0K-85ktKwS7nCKse_aJZuF8",
    authDomain: "expensify-bcf8c.firebaseapp.com",
    databaseURL: "https://expensify-bcf8c.firebaseio.com",
    projectId: "expensify-bcf8c",
    storageBucket: "expensify-bcf8c.appspot.com",
    messagingSenderId: "543099159479",
    appId: "1:543099159479:web:8efbd4e089de5b029a9e32",
    measurementId: "G-T1J2MYFJ98"
  };

  firebase.initializeApp(config);
//   firebase.analytics();

const database = firebase.database();

export {database as default, firebase};