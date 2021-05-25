// parametros por defecto

function datos(nombre = 'Jhonny', apellido = 'Callisaya', edad = 27){
    console.log(nombre, apellido, edad);
}

datos('Carlos', 'munos', 34);

// concatenacion.

let hola = 'Hola';
let mundo = 'mundo';
let frase = `${hola} ${mundo}`
console.log(frase)


// Multilineas.
let multiline = `frist name
second name
tercer name`;
console.log(multiline);

// destructuracionde los objetos.

function Persona (nombre = 'Jhonny', edad = 27){
    this.nombre = nombre;
    this.edad = edad;
}

var personas = [];
personas.push(new Persona());
personas.push(new Persona('Carlos', 34))
personas.push(new Persona('Pedro', 45))

personas.forEach(elemento => {
    var { nombre, edad } = elemento;
    console.log(nombre, edad)
})

// Uniendo elementos

let team1 = [2,3,4]
let team2 = [5,6,7]

let equipo = [1, ...team1, ...team2]

console.log(equipo)

let juan = {
    nombre: 'Juan',
    apellido: 'Quispe'
}

let juan2 = {
    ...juan,
    edad: 34
}

console.log(juan2)

// var y let 

function mostrar(){
    if(true) {
        var valor = 34;
    }
    console.log(valor)
}

mostrar()


//parrametros por defecto antes.

function data(nombre, edad, pais){
    var nombre = nombre || 'Carlos';
    var edad = edad || 34;
    var pais = pais || 'Bolivia';
    console.log(nombre, edad, pais);
}

data()

// Ahora parametros por defecto

function data2(nombre = 'Jhonny', edad = 27, pais = 'Bolivia') {
    console.log(nombre, edad, pais);
}

data2('Carlos', 45, 'Mexico');

// Antes concatenacion

var texto = 'hello'
var texto2 = 'world'
// console.log(texto+" "+texto2)
// Ahora concatenacion

console.log(`${texto} ${texto2}`)

// Antes Multilineas 

var frase = 'primeara frase\nsegunda frase\ntercera frase'
console.log(frase)

// Ahora Multilineas

let texto = `Primera frase
Segunda frase
tercera frase` 
console.log(texto)

// destructuracion de objetos de

let Persona = {
    nombre: 'Juan',
    apellido: 'Quispe',
    edad: 45
}

let { nombre, apellido, edad } = Persona

console.log(nombre, apellido, edad)

// uniendo elementos objetos

let num1 =[3,4,5,6,7,8]
let num2 =[9,10,11,12,13]

let num3 =[1,2,...num1,...num2]

console.log(num3)

let juan = {
    nombre: 'Juan',
    edad: 45,
}

let juan2 = {
    ...juan,
    apellido: 'Aguilar'
}

console.log(juan2)

// var and let 

{
    var valor = 23;
}

{
    let valor2 = 34;
}

console.log(valor)

// constantes 

const dato = 34;
dato = dato + 1;// devolvera un error por que la constante no puede canbiar

// propiedad de objetos de

let name = 'Jhonny'
let age = 27

dersona = { name, age }
console.log(dersona)

// arroy function
var personas = []
function Persona(n, e){
    this.nombre = n;
    this.edad = e;
}
personas.push(new Persona('Carlos', 34))
personas.push(new Persona('Juan', 33))
personas.push(new Persona('Pedro', 44))
personas.push(new Persona('Pablo', 27))

personas.forEach(element => console.log(element.nombre))

const validar = valor => console.log(valor*2)
validar(12)

// Promesas

const saludar = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('hi how are you') : reject('-----')
    })
}
saludar()
    .then(saludar => console.log(saludar))
    .catch(err => console.log(err))