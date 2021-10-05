let arr = [1,2,3,4,5,6,7,8,9]

let esisten = false

for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === 5) {
        esisten = true
    }
}
console.log(esisten)

if (arr.length % 2 === 0) {
    console.log(arr[(arr.length / 2) - 1], arr[(arr.length)/2])
} else {
    console.log(arr[Math.round(arr.length/2) - 1])
}