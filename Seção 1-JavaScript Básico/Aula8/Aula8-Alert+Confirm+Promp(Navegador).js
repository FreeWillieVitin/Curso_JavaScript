alert('Eu sou um alerta.')
const confirma = confirm('Sou uma mensagem de confirmação, isso está correto?.')
const texto = prompt('SOu uma caixinha de texto bem linda, digite seu nome!')

if (confirma === true) {
    console.log(texto)
}

let num1 = parseInt(prompt('Digite um número'));
let num2 = parseInt(prompt('Digite um número'));

alert(`O resultado foi ${num1 + num2}`)