let valores = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

let diaBus = 'feriado'

if(valores.includes(diaBus)){
    console.log('si')
} else {
    console.log('no')
}

// pow
 
console.log(3**4)

// practice es 7.
// class 6
// includes...
class Persona {
    constructor(n, e) {
        this.nombre = n;
        this.edad = e;
    }
}
let personas = new Array();
personas.push(new Persona('Carlos', 34))
personas.push(new Persona('Juan', 33))
personas.push(new Persona('Felipe', 24))
personas.push(new Persona('Maria', 35))
personas.push(new Persona('Pedro', 28))


if(personas.includes(personas[3])){
    let per = personas[3]
    console.log(`My name is ${per.nombre} and age is ${per.edad}`)
} else {
    console.log('El valor no existe...!')
}

// potencia ...
let base = 3
let expo = 3;

console.log(2 ** 4)
