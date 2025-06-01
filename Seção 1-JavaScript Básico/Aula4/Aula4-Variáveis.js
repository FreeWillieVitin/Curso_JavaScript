//Variáveis seria brevemente resumido como armazenar um valor na memória do computador

let nome = 'Kleber'; //Let é uma declaração que aponta que um valor é variável
let nome2 = 'Marieli';
let nome3; //Let cria a variável mas não é necessário declarar um valor diretamente a ela podendo ser declarado em outro momento

let data = 1998;
let data2 = 2019;
let data3 = 2023;

nome3 = 'Zayon';

console.log( nome+' nasceu em '+data);
console.log('Em '+data2 +' conheceu '+nome2);
console.log(nome+' morou com '+nome2+' em '+data3);
console.log(nome2+' tem um cachorro chamado '+nome3);

let numero = 1;

if (numero === 1){
    let numero = 2
    console.log(numero);
}

console.log(numero);

//Usando var ao invés de let para declarar variáveis
//Uma das diferenças é q é possivel re-declarar a variável com o mesmo nome funcionalidade que foi corrigida para a declaração let
var nomeComVar = 'Victor';
var nomeComVar = 'Marieli';

console.log(nomeComVar);




