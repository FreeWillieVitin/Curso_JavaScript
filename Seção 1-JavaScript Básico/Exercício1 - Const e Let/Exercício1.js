/*
Victor Hugo Jurczyszyn tem 27 anos , pesa 90KG
tem 1.71 de altura e seu IMC é de 25.929299292595655456
Victor Hugo Nasceu em 1998
*/
const nome = 'Victor Hugo';
const sobrenome = 'Jurczyszyn';
const idade = 27;
const peso = 90;
const altura = 1.71;

let imc;
let anoNascimento;
let anoAtual = 2025;

let alturaCalculadaIMC = altura * 2;
imc = peso / alturaCalculadaIMC;
anoNascimento = anoAtual - idade;

console.log(nome,sobrenome,'tem',idade,'anos, e pesa',peso,'KG')
console.log(`tem ${altura} de altura e seu IMC é de'${imc}`)//Forma mais visual de exibir os valores das variáveis
console.log(`${nome} nasceu em ${anoNascimento}`)