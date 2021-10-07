function validate() {
    let regex1 = /^(?:0?[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    let val = document.getElementById("txt").value
    let result = ''

    if (regex1.test(val)) {
        result += '<p>Es un codigo postal</p>'
    } else {
        result += '<p>No es un codigo postal</p>'
    }

    result += '<p>' + val + '&nbsp' + val + '&nbsp' + val + '</p>'

    let regex2 = /^Sa\w*do$/

    if (regex2.test(val)) {
        result += '<p>Empieza por \'Sa\' y acaba por \'do\'</p><br>'
    } else {
        result += '<p>No empieza por \'Sa\' y acaba por \'do\'</p><br>'    
    }

    document.getElementById('result').innerHTML = result
}