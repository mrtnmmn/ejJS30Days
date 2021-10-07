function validate () {
    let txt = document.getElementById('pass').value

    let ch1 = document.getElementById('ch1').checked
    let ch2 = document.getElementById('ch2').checked
    let ch3 = document.getElementById('ch3').checked
    let ch4 = document.getElementById('ch4').checked

    let validated = true

    if (ch1) {
        if (checkCaps(txt)) {

        }
    }
} 

function minChar() {
    document.getElementById('divChar').innerHTML = '<input type="checkbox" id="ch4" onclick="minCharOff()" checked><label>Numero minimo de caracteres</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" id="minChar" class="nums"><br>'
}

function minCharOff() { 
    document.getElementById("divChar").innerHTML = '<input type="checkbox" id="ch4" onclick="minChar()"><label>Numero minimo de caracteres</label><br>'
}

function checkCaps(str) {
    let txt = ''
    txt + str
    let res = false

    let char = ''

    for (let i = 0; i < txt.length; i++) {
        char = txt.charAt(i)
        if (char === char.toUpperCase) {
            res = true
        }
    }
} 