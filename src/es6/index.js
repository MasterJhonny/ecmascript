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