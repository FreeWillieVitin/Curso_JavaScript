/*O objeto Math é uma série de métodos e propriedades embutidas no JavaScript
utilizadas para realizar diversas operações matemáticas */
// Só para fim de documentação quando uma função está dentro de um objeto no caso o Math ela é chamada de método
let num1 = 9.54578;
console.log(Math.floor(num1)); // O método floor arredonda o valor para o número inferior mais proximo, no caso o número 9
console.log(Math.ceil(num1)); // Já o método ceil é o oposto e arredonda para o número superior mais proxímo, no caso o número 10
console.log(Math.round(num1)); // Arredonda para o valor mais próximo, como o 9.54 está mais proximo do 10 do que o para o 9 então o seu retorno é 10
console.log(Math.max(1,2,3,4,5,180548,11111111,1.1578)); // Max retorna o maior número de uma sequência de números
console.log(Math.min(1,2,3,4,5,180548,11111111,1.1578)); // Min retorna o menor número de uma sequência de números

const aleatorio = Math.random(); // Método random gera um número aleatório
console.log(aleatorio);

console.log(Math.PI); // Retorna o valor de PI
console.log(Math.pow(2, 10)); // Pow realiza potenciação da mesma forma que o operador (**) teste