/* Ejercicio: 
Crea una clase (usa el método antiguo) llamada producto
Que tenga:
2 atributos (precio y nombre)
un método que determine si el valor del producto es negativo
un constructor, donde se puede crear el producto con un precio y un nombre */

function producto(precio, nombre) {
 
    this.precio = precio;
    this.nombre = nombre;
    
    this.valorNegativo = function() {
        return this.precio < 0
    }
}

let patacas = new producto(0.2, 'patata')

console.log(patacas)
console.log(patacas.valorNegativo())

        /*Ejercicio
Los números en javascript no tienen programada 
de fábrica la posibilidad de determinar si son primos.
Añade tu esa funcionalidad (usando prototype)*/

Number.prototype.esPrimo = function() {
    let primo = true

    for(let i = 2; i < this; i++ ) {
        if (this%i === 0) {
            primo = false 
        }
    }

    return primo 
}

let numero1 = 4
let numero2 = 7 

console.log(numero1.esPrimo())
console.log(numero2.esPrimo())

/* Ejercicio:
Crea una función que admita como parámetros un número, o un 
booleano o un string.
Si a la función se le pasa un número devolverá ese número duplicado
Si a la función se le pasa un string, devolverá la primera letra del 
string (en javascript los string son arrays)
Si a la función se le pasa un booleano, devolverá YES or NOT
Pista: usa typeof */


let tipoDeDato = function(valor) {
    let tipo = typeof(valor)

    if (tipo === 'number') {
        return valor * 2
    }

    if (tipo === 'string') {
        return valor[0]
    }

    if (tipo === 'boolean') {
        return valor===true?'YES':'NO'
    }
}

/* Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2
Obtén un array con solamente los números mayores que 10 
 (pista: usa filter)
Muestra por pantalla el array resultante
Intenta hacer el ejercicio usando funciones y lambdas */

let arr = [6,3,55,-1,7,8,9,34,2]
let menores = arr.filter(function(num){
    return num < 10
})

console.log(arr)
console.log(menores)

let menoresLambda = arr.filter(num => num < 10)

console.log(menoresLambda)

/* Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Obtén un subArray con los números 7,8,9,34 (pista: usa slice)
Muestra por pantalla el nuevo array */

let arr2Slice = arr.slice(4,8)

console.log(arr2Slice)

/* Ejercicio:
Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Muestra por pantalla el último elemento del array
Muestra por pantalla el primer elemento del array
Muestra por pantalla el array resultante */

console.log(arr[arr.length-1])
console.log(arr[0])

/* Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Elimina el último y el primer elemento del array (pista: usa pop y unshift)
Muestra por pantalla el array resultante */

let arr3 = arr 
let ultimovalor = arr3.pop()
let primerValor = arr3.unshift()
console.log(arr)
console.log(arr3)


let arra = [6,3,55,-1,7,8,9,34,2]
let ultimoElementoBorrado = arra.pop()
console.log(arra)
console.log('El elemento borrado es: '+ultimoElementoBorrado)


/* Crea un array con los números:  6,3,55,-1,7,8,9,34,2

Sustituye los números -1,7,8 por los números 0,0 	(pista: usa splice)
Muestra por pantalla el array resultante */

console.log(arra.splice(3,4,0,0))

/* Usando el array, haz que salga por pantalla la frase 'Hola Pepe'
Muestra por pantalla la cantidad de booleanos que hay en el primer 
elementos del array
Muestra el precio con iva de la manzana por pantalla
Muestra por pantalla todos los números guardados en la última 
posición del array [4,5,6] pero duplicando su valor	(pista: usa map) */

let arr4 = [
    [true, false, true],
    'Jose',
    {
        nombre:'Manzana',
        precio:{
          iva: 5.6,
          sinIva: 2.6
        }
    },
    true,
    function(){
        return 'Hola mundo'
    },
    function(nombre){
        return 'Hola '+nombre
    },
    [4,5,6]
]

console.log(arr4[5]('Pepe'))

let cont = 0

for (let i = 0; i < arr4[1].length; i++) {
    if (arr4[0][i]) {
        cont += 1
    }
}
console.log(cont + ' booleanos')

console.log(arr4[2].precio.sinIva)

console.log(arr4.length)

let doubles =(arr4[6]).map(function(x) {
    return (parseInt(x*2))
})

for (let i = 0; i < doubles.length; i++) {
    console.log(doubles[i])
}

// Ej10 
let sett = new Set()
sett.add('Marcos')
sett.add('Felix')
sett.add('Sara')

console.log(sett.has('Felix'))
sett.delete('Marcos')
console.log(sett.size)
sett.add('Ana')

// Ej11

fetch('https://randomuser.me/api')
  .then(response => response.json() )
  .then(json => {
      console.log('Name: ' + json['results'][0]['name']['first'] + ' ' + json['results'][0]['name']['last'])
      console.log('Street: ' + json['results'][0]['location']['street']['name'])
   })

