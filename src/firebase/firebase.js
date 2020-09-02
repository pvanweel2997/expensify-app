import * as firebase from 'firebase';

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

database.ref().set({
    name: 'Patrick Van Weelden',
    age: 55,
    stressLevel: 6,
    job: {
        title: 'software developer',
        company : 'google'
    },
    isSingle : true,
    location : {
        city : 'Waukee',
        country: 'United States'
    }
}).then(() => {
    console.log('data is saved');
}).catch((e)=> {
    console.log('this failed',e);
});


database.ref().update({
    stressLevel: 9,
    'job/company' : 'Amazon',
   'location/city' : 'Seatle'
});


// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('success removing isSingle');
// }).catch((e) => {
//     console.log('error removing isSingle',e)
// })
