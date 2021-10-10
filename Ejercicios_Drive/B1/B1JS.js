function validate () {
    let txt = document.getElementById('pass').value

    let ch1 = document.getElementById('ch1').checked
    let ch2 = document.getElementById('ch2').checked
    let ch3 = document.getElementById('ch3').checked
    let ch4 = document.getElementById('ch4').checked

    let numVal = 0
    let numValFinal = 0

    if (ch1) {
        numVal += 1
        if (checkCaps(txt)) {
            numValFinal += 1
        }
    }
    if (ch2) {
        numVal += 1
        if (checkNumbers(txt)) {
           numValFinal += 1
        }
    }
    if (ch3) {
        numVal += 1
        if (checkSimbols(txt)) {
            numValFinal += 1
        }
    }

    if (ch4) {
        numVal += 1
        if (checkMinChar(txt)) {
            numValFinal += 1
        }
    }

    if (numVal === numValFinal) {
        document.getElementById('result').innerHTML = "Fuerte"
    } else {
        document.getElementById('result').innerHTML = "Debil"
    }

} 

function minChar() {
    document.getElementById('divChar').innerHTML = '<input type="checkbox" id="ch4" onclick="minCharOff()" checked><label>Numero minimo de caracteres</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" id="minChar" class="nums"><br>'
}

function minCharOff() { 
    document.getElementById('divChar').innerHTML = '<input type="checkbox" id="ch4" onclick="minChar()"><label>Numero minimo de caracteres</label><br>'
}

function checkCaps(str) {
    let res = false
    let char = ''

    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i)
        if (char === char.toUpperCase()) {
            res = true
        }
    }
    return res
}

function checkNumbers(str) {
    let res = false
    let char = ''

    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i)
        if (parseInt(char)) {
            res = true
        }
    }
    return res
}

function checkSimbols(str) {
    let res = false 
    let char = ''
    let arr =['~', '_', '-']

    for (let i = 0; i < str.length; i++){
        char=str.charAt(i)
        for (let l = 0; l < arr.length; l++) {
            if (char === arr[l]) {
                res = true
            }
        }
    }

    return res 
}

function checkMinChar(str) {
    let res = false
    let nChar = document.getElementById('minChar').value

    if (str.length >= nChar) {
        res = true
    }

    return res
}