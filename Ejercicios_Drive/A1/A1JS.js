document.getElementById('button').addEventListener('click',comprobar)

function comprobar() {
    let numA = document.getElementById("numA").value
    let numB = document.getElementById("numB").value

    let mayor = 0
    let menor = 0

    if (numA === numB) {
        document.getElementById("resultado").innerHTML = 'Los numeros son iguales'
    } else {
        if (numA < numB) {
            mayor = numB
            menor = numA 
        } else {
            mayor = numA
            menor = numB 
        }

    
        let plantilla = `el nº ${mayor} es mayor que el nº ${menor}`
        document.getElementById("resultado").innerHTML = plantilla
    }
}