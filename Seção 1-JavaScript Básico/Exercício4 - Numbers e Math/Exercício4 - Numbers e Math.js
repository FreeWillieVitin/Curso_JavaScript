const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); //getElementId pega o Id referenciado no HTML podendo passar um valor para ele como se fosse a variavel dentro de um texto do exercicio anterior
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero

if (numero > 0){
    texto.innerHTML = '';
}
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${(numero.toFixed(2))}.</p>`;



