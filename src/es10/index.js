// es 10..
// class 10..
// flat 
let array = [1,2,,3,[1,2,3,4, [1,2,3,4,]]]

console.log(array.flat())
// flat Map .
let array = [1,2,3,4,5,6,7]
console.log(array.flatMap(valor => [valor, valor * 2]))

// trim Start..
let cadena = '      hola Mundo                 '
console.log(cadena + '*')
console.log(cadena.trimStart())
console.log(cadena.trimEnd())


// try ctch ...
try {
    
} catch (error) {
    
}

try {

} catch {

}

// conversor de array a objet
let  entries = [['nombre', 'juan'], ['edad', '34']]
console.log(Object.fromEntries(entries))

// simbol
let mySimbl = 'simbol'
let simbol = Symbol(mySimbl)
console.log(simbol.description)