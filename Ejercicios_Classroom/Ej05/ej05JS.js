function convertir() {
    txt = document.getElementById("txt").value
    if (txt === '') {
        console.log('true')
    } else {
        document.getElementById("spn1").innerHTML = txt.toUpperCase() + '<br>'
        document.getElementById("spn2").innerHTML = capitalize(txt)
        
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}