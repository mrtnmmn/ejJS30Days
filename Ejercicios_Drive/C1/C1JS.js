let date = new Date()

let month = date.getMonth();
month = Math.round(month/4) + 1

let emojis = ['⛄','🌱','☀','🍂']

console.log(date.getHours())

document.getElementById('emoji').innerHTML = emojis[month]

if (date.getHours() >= 20 || date.getHours() > 9) {
    document.getElementById('emoji').className = 'center, night'
} else {
    document.getElementById('emoji').className = 'center, day'
}
