let num1 = 0
let num2 = 0
let suma = 0

generarElementos() 

console.log(num1)

let aciertos = 0 
let fallos = 0

function generarRandom() {
    return Math.round(Math.random()*10)
}

function comprobar() {

    let input = parseInt(document.getElementById("result").value)

    if (suma === input) {
        document.getElementById("sol").innerHTML = "Correcto"
        aciertos += 1
    } else {
        document.getElementById("sol").innerHTML = "Falso"
        fallos += 1
    }

    pushMarcador()
    generarElementos()
}

function generarElementos() {
    num1 = generarRandom() 
    num2 = generarRandom() 
    suma = num1 + num2 

    document.getElementById("num1").innerHTML = num1
    document.getElementById("num2").innerHTML = num2 
}

function pushMarcador() {
    document.getElementById("marcador").innerHTML = 'Aciertos: ' + aciertos + ' Fallos: ' + fallos
}