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

const expenseArray = [{
    description: 'Rent',
    note: 'Monthly Rent',
    amount: 125000,
    createdAt: moment().valueOf()
},{
    description: 'Electric',
    note: 'Electriity',
    amount: 11000,
    createdAt: moment().valueOf()
},{
    description: 'Cable',
    note: 'Househould expense',
    amount: 21000,
    createdAt: moment().valueOf()
}]

// expenseArray.forEach((expense) => {
//     database.ref('expenses').push({
//         ...expense
//     })
// })


const convertData = (snapshot) => {
    console.log('data changed');
    const expenses = [];
    snapshot.forEach(childSnapshot => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}

// subscribe change notifications
const onValueChange = database.ref('expenses').on('value',convertData,(e) => {
      console.log('error with data fetching',e);
  })

// read data
database.ref('expenses')
.once('value')
.then(convertData)

// subscribe to child_removed (row is removed)
database.ref('expenses').on('child_removed',(snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

// subscribe to child_changed (row is changed)
database.ref('expenses').on('child_changed',(snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

// subscribe to added (row is added)
database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

// database.ref('expenses/-MGIwJhk_RBC2AUsWy6O').update({
//     description: 'Monthly Rent'
// })

// database.ref('notes/-MGIqxlGu7C_HsuHzLLM').update({
//     body : 'Buy food'
// });

// database.ref('notes/-MGIqxlGu7C_HsuHzLLM').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// }); 


// database.ref('notes').set(notes);
// const onValueChange = database.ref().on('value',(snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref().update({
//     'job/company' : 'Amazon'
// })



// subscribe change notifications
// const onValueChange = database.ref().on('value',(snapshot) => {
//     console.log(snapshot.val());
//   },(e) => {
//       console.log('error with data fetching',e);
//   })

// setTimeout(() => {
//     database.ref('age').set(24);
// }, 3500);

// // unsubscribe notification
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 10500);



// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('error fetching data',e);
//     })


// database.ref().set({
//     name: 'Patrick Van Weelden',
//     age: 55,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company : 'google'
//     },
//     isSingle : true,
//     location : {
//         city : 'Waukee',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e)=> {
//     console.log('this failed',e);
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//    'location/city' : 'Seatle'
// });


// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('success removing isSingle');
// }).catch((e) => {
//     console.log('error removing isSingle',e)
// })
