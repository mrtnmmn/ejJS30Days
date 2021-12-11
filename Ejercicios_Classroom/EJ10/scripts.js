document.getElementById('btn').addEventListener('click', check)

function check() {
    let num = document.getElementById('input').value
    window.alert(result(num))
}

function result(num) {
    let res = ''
    if (num > 0) {
        res += 'El numero es mayor que cero\n'
    } else if (num < 0) {
        res += 'El numero es menor que cero\n'
    }

    if (num % 2 === 0) {
        res += 'El numero es par'
    } else {
        res += 'El numero es impar'
    }
    return res 
}