let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr.includes(5))

let half = arr.length/2
if (arr.length % 2 === 0) {
    console.log(arr[(half) - 1], arr[half])
} else {
    console.log(arr[Math.round(half) - 1])
}