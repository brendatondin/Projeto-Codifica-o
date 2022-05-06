var divPassoCifraCesar = document.querySelector('#divPassoCifraCesar') 
var cifra = document.querySelector('#cifra') 
var codificar = document.querySelector('#codificar') 
var decodificar = document.querySelector('#decodificar') 
var radio = document.querySelector('#radio') 
var btn = document.querySelector('#btn')

//PASSO APARECE OU NÃO
cifra.addEventListener('change', function() {
    if (cifra.value == 'cifradecesar') {
        divPassoCifraCesar.style.display = 'block'
    } else {
        divPassoCifraCesar.style.display = 'none'
    }
})


//BOTÃO APARECE COMO CODIFICAR OU DECODIFICAR
radio.addEventListener('click', function (e) {
    if (codificar.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnCode" type="button" value="Codificar" >`
        document.querySelector('#btnCode').addEventListener('click', code)
        
    } else if (decodificar.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnDecode" type="button" value="Decodificar">`
        document.querySelector('#btnDecode').addEventListener('click', decode)
    }
})

//BASE64 CODIFICAR
var finalText = document.querySelector('#resultado')
function code() {
    var enterTxt = document.querySelector('#msg').value
    if (cifra.value == 'base64' && codificar.checked) {
        txtValue = enterTxt
        finalText.value = btoa(txtValue)
    } else if (cifra.value == 'cifradecesar' && codificar.checked) {
        codeCesar()
    }
}

//BASE64 DECODIFICAR
function decode() {
    var enterTxt = document.querySelector('#msg').value
    if (cifra.value == 'base64' && decodificar.checked) {
        txtValue = enterTxt
        finalText.value = atob(txtValue)
    } else if (cifra.value == 'cifradecesar' && decodificar.checked) {
        decodeCesar()
    }
}

//CIFRA DE CESAR CODIFICAR
function codeCesar() {
    var enterTxt = document.querySelector('#msg').value
    var passoCifraCesar = document.querySelector('#passoCifraCesar').value
    var txtValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(passoCifraCesar)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum + passo
            if (passMod > 90) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum + passo
            if (passMod > 122) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    finalText.value = txtValue
}




//CIFRA DE CESAR DECODIFICAR    
function decodeCesar() {
    var enterTxt = document.querySelector('#msg').value
    var passoCifraCesar = document.querySelector('#passoCifraCesar').value
    var txtValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(passoCifraCesar)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum - passo
            if (passMod < 65) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum - passo
            if (passMod < 97) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    finalText.value = txtValue
}