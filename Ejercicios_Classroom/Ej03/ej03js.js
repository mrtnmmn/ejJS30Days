function validar() {

    let edad = parseInt(document.getElementById("edad").value)
    let completo = (document.getElementById("nombre").value) + " " + (document.getElementById("apellidos").value)

    console.log(edad)

    if (edad < 18) {
        document.getElementById("res").innerHTML = ('Lo siento ' + completo + ' no tienes la edad suficiente para acceder al servicio')
    } else {
        document.getElementById("res").innerHTML = ('Bienvenido ' + completo)
    }

}