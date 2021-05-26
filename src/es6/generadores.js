const mostrar = document.getElementById('mostrar');
const generar = document.getElementById('generar');

function* generador(){
    for(let i = 1; i < 5; i++){
        yield mostrar.innerText = i //  debuelve un error
    }
}

const g = generador()

generar.addEventListener('click',() => {
    g.next()
})