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