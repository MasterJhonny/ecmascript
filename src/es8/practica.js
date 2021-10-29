// es8 
// practice
// de objeto a matriz
 const data = {
    name: 'Jhonny',
    apellido: 'Callisaya',
    edad: 27,
 }

// const matriz = Object.entries(data)
// console.log(matriz, matriz.length)
// de objetos a arreglo de valores
const valores = Object.values(data)
console.log(valores, valores.length)

// anadir caracteres.
let valor = 'hola'
console.log(valor.padStart(10, 'Mundo '))
console.log(valor.padEnd(10, ' Mundo'))

// trily comas.
const obj = { 
    name: 'Carlos',age: 34,
}
// de objetos a matrices...
let juan = {
    nombre: 'Juan',
    edad: 34,
    apellido: 'Quispe'
}
let matriz = Object.entries(juan)
console.log(matriz)

// de objetos a valores..
let valores = Object.values(juan)
console.log(valores)

// anadir caracteres...
let texto = 'hola'
console.log(texto.padStart(10, 'Mundo '))
console.log(texto.padEnd(10, ' Mundo'))

// tryly comas ...
let juan = {
    name: 'Juan',
}

// practice ...
// asnyc awaiyt

const saludar = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello wolrd'), 3000)
            : setTimeout(() => reject('Ups sucedio un error'), 2000)
    })
}


// saludar()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const validar = async () => {
    try {
        let valor = await saludar();
        console.log(valor);
    } catch (error) {
       console.log(error); 
    }
}

validar()