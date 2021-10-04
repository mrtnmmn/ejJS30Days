function check() {
    let num = 0 
    while (num === 0) {
        num = generarRandom(6)
    }
    if (num === parseInt(document.getElementById("guess").value)) {
        document.getElementById("sol").innerHTML = 'Correcto!!'
    } else {
        document.getElementById("sol").innerHTML = 'Lo siento, ese no es el numero'
    }
}

function generarRandom(n) {
    return Math.round(Math.random()*n)
}