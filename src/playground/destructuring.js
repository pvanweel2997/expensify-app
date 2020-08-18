console.log('destructuring')

// const person = {
//     name: 'Patrick',
//     age: 35,
//     location: {
//         city: 'Waukee',
//         temp: 85
//     }
// }

// const {name = 'Anonymous', age} = person;
// console.log('name: '+name)

// console.log(`${name} is ${age}.`)

// const {temp:temperature, city} = person.location;
// if (temperature && city) {
//     console.log(`it's ${temperature} in ${city}`)
// }

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self' } = book.publisher;

console.log(publisherName)

const address = ['685 8th St','Waukee','IA','50263']

// const [street,city,state,zip] = address;
const [,city,state,] = address;
console.log(city)

console.log(`You are in ${city} ${state}`)

const address2 = []
const [, ,state2 = 'Not Found',] = address2;
console.log(state2)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']

const [itemName, ,mediumPrice, ] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)