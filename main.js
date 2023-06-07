function changeBackgroundColor() {
    let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
};


let randomNumber = Math.floor(Math.random() * 100)
let tentativas = 0
console.log(randomNumber)

function checkAdivinhe() {
    let adivinhe = document.getElementById('adivinhe').value;
    let mensagem = document.getElementById('mensagem')
    tentativas++

    if(adivinhe == randomNumber){
        mensagem.innerHTML = 'Parabéns você acertou! Em '  + tentativas +  ' tentativas!'
    }
    else if (adivinhe > randomNumber){
        mensagem.innerHTML = 'Tente numeros mais baixos!'
    }
    else {
        mensagem.innerHTML = 'Tente numeros mais Altos!'
    }
    
}

function verificarCampo(event){
    event.preventDefault();
    let input = document.getElementById('adivinhe').value
    if(input.trim() === ""){
        mensagem.textContent = "Por favor, preencha o campo de entrada.";
    }
    else{
        mensagem.textContent = "";
        return false;
    }
}
