/* Tipos de dados é exatamente o que o nome sugere, são os tipos de dados primitivos que são armazenados nas variáveis
como um numero que seria um inteiro, ou um texto que seria uma string, temops também numeros com ponto que são chamados de float
ou float pointing, temos também os boolean que seriam valores true or false*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const nome = 'Victor'; //String
console.log(typeof nome);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const num1 = 1; //Integer - Inteiro - number
console.log(typeof num1);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const float1 = 1.1; //Float - number
console.log(typeof float1);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let tipoUndefined; //Undefined -> não aponta para local nenhum da memória, normalmente nunca é usada apenas existe para o próprio JavaScript
console.log(typeof tipoUndefined);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const tipoNull = null; // Nulo -> não aponta para local nenhum da memória, null é usado para setar que a variável é nula e que da a entender que possa ser alterada a qualquer momento
console.log(typeof tipoNull);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const tipoBoolean = true; //Booleano: Recebe verdadeiro ou falso, normalmente usado para checar se algo está ou não habilitado
if (tipoBoolean === true) {
    console.log('Sou verdadeiro');
    console.log(typeof tipoBoolean);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const array = [1,2,3]; //Tipo de dado que armazena um tipo de lista de dados, vai ser explicado mais a frente do curso
const arrayB = array;
console.log(array, arrayB);

arrayB.push(4); //Incluí valor á variável
console.log(array, arrayB);

