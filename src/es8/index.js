// es8 
// class 7
// de objetos a matrices 

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const matriz = Object.entries(data);
console.log(matriz)
console.log(matriz.length)

// de objetos a valores.
let data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

let valores = Object.values(data)
console.log(valores)
console.log(valores.length)

// anadir caracteres.
let text = 'hola';
console.log(text.padStart(7, 'hi '))
console.log(text.padEnd(10, ' mundo'))


// trayly comas\

const obj = {
    name: 'Oscar',
}

// class
// async awayt
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) 
            ? setTimeout(() => resolve('Hi how are you'), 3000)
            : setTimeout(() => reject('Upss..'), 3000)
    })
}

// helloWorld()
//     .then(valor => console.log(valor))
//     .catch(err => console.error(err))

const validar = async () => {
    try {
        let saludo = await helloWorld()
        console.log(saludo)
    } catch (error) {
        console.error(error)
    }
} 

validar()