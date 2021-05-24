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