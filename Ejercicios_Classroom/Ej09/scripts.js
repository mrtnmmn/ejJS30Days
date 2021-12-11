document.getElementById('saveBtn').addEventListener("click", onSave)

function onSave() {
    let finalHtml = '<ol>'
    let result = document.getElementById('input').value
    let arr = result.split(' ')
    arr.sort()
    
    arr.forEach(res => {
        if (res != null && res != " " && res != "") {
            finalHtml += '<li>' + res + '</li>'
        }
    });

    finalHtml += '</ol>'

    document.getElementById('result').innerHTML = finalHtml
}