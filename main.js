
// Projeto calculadora 

let userNum1 = document.getElementById('userNum1')
let userNum2 = document.getElementById('userNum2')
let operador = document.getElementById('operador')
let calcularButton = document.getElementById('calcular')
let resultDiv = document.getElementById('resultado')

calcularButton.addEventListener('click', function () {
    let num1 = Number(userNum1.value)
    let num2 = Number(userNum2.value)
    let op = operador.value
    let resultado

    switch (op) {
        case '+':
            resultado = num1 + num2
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        case '/':
            resultado = num1 / num2
            break;
        default:
            resultado = 'Operador invalido'
            break;
    }

    resultadoDiv.innerHTML = 'O resultado é ' + resultado
});


//Projeto utilizando Operador Ternário - Checagem de idade
let checkButton = document.getElementById('check-button')
let idadeInput = document.getElementById('idade-input')

checkButton.addEventListener('click', function () {
    let idade = idadeInput.value
    let mensagemIdade = (idade >= 18) ? 'Você é um adulto' : 'Você não é um adulto';
    alert(mensagemIdade)
    idadeInput.value = ''
})

// Projeto troca cor
function changeBackgroundColor() {
    let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
};

// Projeto Adivinhe o Numero
let randomNumber = Math.floor(Math.random() * 100)
let tentativas = 0
console.log(randomNumber)

function checkAdivinhe() {
    let adivinhe = document.getElementById('adivinhe').value;
    let mensagem = document.getElementById('mensagem')
    tentativas++

    if (adivinhe == randomNumber) {
        mensagem.innerHTML = 'Parabéns você acertou! Em ' + tentativas + ' tentativas!'
    }
    else if (adivinhe > randomNumber) {
        mensagem.innerHTML = 'Tente numeros mais baixos!'
    }
    else {
        mensagem.innerHTML = 'Tente numeros mais Altos!'
    }

}

// function verificarCampo(event){
//     event.preventDefault();
//     let input = document.getElementById('adivinhe').value
//     if(input.trim() === ""){
//         mensagem.textContent = "Por favor, preencha o campo de entrada.";
//     }
//     else{
//         mensagem.textContent = "";
//         return false;
//     }
// }

