/**
 *
 * Operadores aritméticos são os já conhecidos 
 * + Adição ou concatenação no caso de string
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potênciação
 * % Resto da divisão
*/
console.log('-------------------------------------------------------------------Operadores Aritméticos--------------------------------------------------------------------');
const num1 = 65;
const num2 = 5;
const texto1 = '10';
const texto2 = 5;
console.log(num1 + num2);
console.log(texto1 + texto2);//Não somou e sim concatenou por ter um valor string na constante
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('-------------------------------------------------------------------Incremento--------------------------------------------------------------------------------');
let contador = 1;
let contador2 = 1;
let contador3 = 0;
contador++; // ++ é um operador que incrementa +1 ao valor atual da variável ou seja no exemplo o valor está 1 e ao utilizar o ++ o valor passa a ser 2
++contador2;
console.log(contador);
console.log(contador2);

contador3 = contador3 + 2;
console.log(contador3);
contador3 = contador3 + 2;
console.log(contador3);
contador3 = contador3 + 2;
console.log(contador3);
contador3 += 2;
console.log(contador3);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('-------------------------------------------------------------------Decremento--------------------------------------------------------------------------------');
let descontador = 10; 
--descontador // -- decrementa 1 do valor atual da variável 
console.log(--descontador)
console.log(--descontador)
console.log(--descontador)
console.log(--descontador)

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('----------------------------------------------------------------Conversão de Tipo----------------------------------------------------------------------------');
const numInteiro = 10;
const numString = parseInt('5'); //parseInt converte um valor numerico que era string para inteiro, possibilitando assim a soma, o mesmo vale para parseFloat
const numString2 = Number('10');

console.log(numInteiro + numString);
console.log(numInteiro + numString2);
console.log(typeof numString);
console.log(typeof numString2);




