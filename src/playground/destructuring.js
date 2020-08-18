console.log('destructuring')

const person = {
    name: 'Patrick',
    age: 35,
    location: {
        city: 'Waukee',
        temp: 85
    }
}

const {name = 'Anonymous', age} = person;
console.log('name: '+name)

console.log(`${name} is ${age}.`)

const {temp:temperature, city} = person.location;
if (temperature && city) {
    console.log(`it's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self' } = book.publisher;

console.log(publisherName)