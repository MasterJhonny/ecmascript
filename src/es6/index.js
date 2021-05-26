// Antes..
function datos(nombre, anio, pais) {
    var nombre = nombre || 'Oscar';
    var anio = anio || 23;
    var pais = pais || 'Bolivia';
    console.log(nombre, anio, pais);
}

datos();
datos('Carlos', 34, 'Mexico')

// Ahora con es6.
function datos2(nombre = 'Oscar', anio = 34, pais = 'Bolivia') {
    console.log(nombre, anio, pais)
}

datos2();
datos2('Ricardo', 45, 'Colombia');

// Antes la concatenacion.
var hola = 'hola';
var mundo = 'mundo';
var frase = hola + ' ' + mundo;
console.log(frase)

// Ahora con la concatenacion con es6. 
let hello = 'Hello';
let world = 'World';
let holaMundo = `${hello} ${world}`;
console.log(holaMundo);

// class 3
// Antes las multilines.

var lorem = 'primera frase de este parrafo\nsegunda frase del parrafo';
var lorem2 = `primera frase de este parrafo
segunda frase del parrafo
tercera frase separada`;

console.log(lorem2);


// Destructuracion de objetos.

let perosn = {
    nombre: 'Juan',
    edad: 34,
    pais: 'Bolivia'
}

console.log(perosn.nombre, perosn.edad)

let { nombre, edad, pais } = perosn;

console.log(nombre, edad, pais)

// Uniendo elementos.

let team1 = ['carlos', 'juan', 'pedro']
let team2 = ['Amalia', 'Carla', 'Sofia']

let education = ['David', ...team1, ...team2]
console.log(education)

// var and let 

{
    var demoVariableVar = 'hola mundo';
}
console.log(demoVariableVar)
{
    let demoVariableLet = 'hola mundillo';
    console.log(demoVariableLet)
}


// Constant

const fana = 34;
fana = 45;

// class 4
// propiedad de objetos

let name = 'Oscar'
let age = 34;

// let obj = { name: name, age: age}

obj = { name, age }
console.log(obj)

// arroy function
const names = [
    {name: 'Oscar', age: 34 },
    {name: 'Luis', age: 33 },
    {name: 'wario', age: 43 },
    {name: 'Pamela', age: 32 }
]

// let listOfNames = names.map(function(element){
//     console.log(element.name)
// })

let listOfNames = names.map(element => console.log(`my name is ${element.name}`))
// console.log(listOfNames) devolvera indefinido

const valor = (x) => console.log(x*x)
valor(3) 

// Promesas 

const helloPromse = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        } else {
            reject('Upps!')
        }
    })
}

helloPromse()
    .then(valor => console.log(valor))
    .catch(vaor => console.log(vaor))

// class 5,6,7
// Clases 

class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }
    sumar(a, b) {
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }
    restar(a, b) {
        this.a = a;
        this.b = b;
        return this.a - this.b;
    }
    Multiplicar(a, b) {
        this.a = a;
        this.b = b;
        return this.a * this.b;
    }
    dividir(a, b) {
        this.a = a;
        this.b = b;
        return this.a / this.b;
    }
}


let cal = new Calculator()

console.log(cal.sumar(2,4))
// modulos
import { saludar } from './module'
saludar()

// generadores 

function* holaMundo(){
    if(true){
        yield 'hola, ';
    }
    if(true){
        yield 'Mundo'
    }
};

const generador = holaMundo()

console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)