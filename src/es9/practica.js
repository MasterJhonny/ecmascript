// practice...
// es9

// destructuracion de objetos

let objeto = {
    nombre: 'Jhonny',
    edad: 27,
    pais: 'Bolivia'
}

let { pais, ...all } = objeto
console.log(all)

// Porpagation Properties

let obj = {
    nombre: 'Juan',
    edad: 34
}

obj3 = {
    ...obj,
    pais: 'Bolivia'
}

console.log(obj3)

// Promise Finally

const saludar = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Se resolvio ...'), 3000)
            : reject(new Error('Algo salio mal...'))
    })
}

saludar()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Esto ya finaliso...'))

// Regex

let regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
let matches = regex.exec('2018-04-20')
let year = matches[1]
let month = matches[2]
let day = matches[3]
console.log(year, month, day)\

// practice...
// es9

// destructuracion de objetos..


let persona = {
    nombre: 'Carlos',
    age: 34,
    pais: 'Meixco'
}


let { pais, ...all } = persona
console.log( all )

// Porpagation Properties

let per = { 
    nombre: 'Juan',
    edad: 34,
}

let per1 = {
    ...per,
    pais: 'Bolivia'
}

let per2 = {
    ...per1,
    ciudad: 'La Paz'
}

console.log(per2)

// Promise Finally.

function saludar() {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve(setTimeout(() => console.log('Hola mundillo')), 3000)
        } else {
            reject(new Error('ups ocurrio uyn error....'))
        }
    })
}

saludar()
    .then( response => console.log(response))
    .catch( error => console.err(error))
    .finally(() => console.warn('Atencion esto se a terminado...!!'))

// Regex
 let regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 let matches = regexDate.exec('2018-4-20')
 let year = matches[1]
 let month = matches[2]
 let day = matches[3]
 console.log(year, month, day)