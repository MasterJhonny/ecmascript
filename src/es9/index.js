// es9
// destructuracion de objetos

const obj = {
    name: 'Oscar',
    age: 34,
    country: 'Mexico'
}
let { country, ...all } = obj
console.log(all)

// Porpagation Properties
let obj = {
    nombre: 'Juan',
    edad: 45
}

let obj1 = {
    ...obj,
    pais: 'Bolivia'
}

console.log(obj1)

// Promise Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve(1), 3000)
            : reject(new Error(0))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('ya finalizo la peticion...'))

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
let year = match[1]
let month = match[2]
let day = match[3]
console.log(year, month, day)