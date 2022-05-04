var cifra = document.querySelector('#cesar')
var escolher = document.querySelector('#escolher')
var div1 = document.querySelector('#codificar')
var div2 = document.querySelector('#decodificar')
var passo = document.querySelector('#divPasso')
var botao = document.querySelector('#botao')
var btn = document.querySelector('button')

div1.addEventListener('click', function() {
    btn.innerHTML = 'Codificar'
})

div2.addEventListener('click', function() {
    btn.innerHTML = 'Decodificar'
})

escolher.addEventListener('change', function() {
    if(escolher.value == 'um'){
        divPasso.style.display = 'flex'
    }else {
        divPasso.style.display = 'none'
    }
})
