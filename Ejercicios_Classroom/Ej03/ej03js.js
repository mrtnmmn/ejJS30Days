function validar() {

    let edad = parseInt(document.getElementById("edad").innerHTML)
    let completo = (document.getElementById("nombre").innerHTML) + " " + (document.getElementById("apellido"))

    if (edad < 18) {
        document.getElementById("res").value = ('Lo siento ' + completo + ' no tienes la edad suficiente para acceder al servicio')
    } else {
        document.getElementById("res").value = ('Bienvenido ' + completo)
    }

}