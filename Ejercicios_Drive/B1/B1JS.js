function validate () {
    let txt = document.getElementById('pass').value

    let ch1 = document.getElementById('ch1').checked
    let ch2 = document.getElementById('ch2').checked
    let ch3 = document.getElementById('ch3').checked
    let ch4 = document.getElementById('ch4').checked

    let validated = true

    if (ch1) {
        if (!checkCaps(txt)) {
            validated = false
        }
    }
    if (ch2) {
        if (!checkNumbers(txt)) {
           validated = false  
        }
    }
    if (ch3) {
        if (!checkSimbols(txt)) {
            validated = false 
        }
    }

    if (validated) {
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

    for (let i = 0; i < str.lenght; i++){
        char=str.charAt(i)
        for (let l = 0; l < arr.length; l++) {
            if (char === arr[l]) {
                console.log(char === arr[l])
                res = true
            }
        }
    }

    return res 
} 