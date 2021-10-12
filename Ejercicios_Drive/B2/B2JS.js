let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1 
let text = date.getDate() + '/' + month + '/' + date.getFullYear()

console.log(date.getMonth() === 1 || month === 12)

if (month === 1 || month === 12) {
    if ((month === 1 && (day > 1 || day < 10)) || month === 12) {
        let div = ''
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                div += '<div class="mainChristmasRed">' + text.charAt(i) + '</div>'
            } else {
                div += '<div class="mainChristmasGreen">' + text.charAt(i) + '</div>'
            }
        }
        div += '&nbsp&nbsp<div class="hohoho"></div>'
        document.getElementById('date').innerHTML = div
    } else {
        document.getElementById('date').innerHTML = '<div class="main">' + text + '</div>'
    }
} else {
    document.getElementById('date').innerHTML = '<div class="main">' + text + '</div>'
}