/* Tipos de dados é exatamente o que o nome sugere, são os tipos de dados primitivos que são armazenados nas variáveis
como um numero que seria um inteiro, ou um texto que seria uma string, temops também numeros com ponto que são chamados de float
ou float pointing, temos também os boolean que seriam valores true or false*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const nome = 'Victor'; //String
let umaString = "\\Um \"texto\""; //Usar barra ajuda a escapar uma aspas duplas ou a escapar a própria barra, ou seja a aspas duplas ouo barra vai aparecer no texto
console.log(typeof nome);
console.log(umaString);

                 //012345678 Os caracteres de um texto pode ser acessado usando o seu index começado pelo número 0
let outraString = "Olá mundo"
console.log(outraString[2]); // Nesse caso vai ser exibido somente a letra 'á'
console.log(outraString.charAt(7)); //Função que faz a mesma coisa que o colchetes
console.log(outraString.indexOf('mundo')) //indexof indica qual o valor do index que começa a palavra digitada como parametro
console.log(outraString.indexOf('o', 3)) //pode ser passado a partir de qual index eu quero encontrar uma letra, no exemplo foi indicado no seguindo parametro o numero 3 e apartir do index 3 vai ser exibido o index da primeira letra o encontrada
console.log(outraString.lastIndexOf('o', 3)) //LastIndexOf faz a mesma coisa, porém passa a contar de tras para a frente
console.log(outraString.replace('olá', 'Hello')); //Replace substitui um valor por outro
console.log(outraString.replace(/o/g, '#')); // Usando expressão regular que é algo que vai ser visto a frente , mas no exemplo o conteúdo que estiver dentro da barra no caso a letra o seria o que seria substituido perlo valor do proximo parametro e colocando um g após a barra indica que vai servir para todas as letras o da mensagem
console.log(outraString.length) // O atributo length retorna o tamanho da string, no caso a quantidade de letras
console.log(outraString.slice('4', '7')) // Função slice fatia string, no caso o primeiro parametro é o index da letra que inicia a fatia e o segundo parametro é o fim, porém o ultimo caracter a ser mostrado é sempre um antes do index final
console.log(outraString.split(' ')) // Armazena a string em um array separado pelo caracter informado no parametro podendo ser um espaço, essa array facilita o acesso das palavras por index
console.log(outraString.toUpperCase()) //Transforma a string toda em letra maiuscula
console.log(outraString.toLowerCase()) //Transforma a string toda em letra minuscula

let concatena = " Lindo"
console.log(outraString.concat(concatena)) // Função concat concatena da mesma forma que usar o sinal de +
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre string------------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const num1 = 1; //Integer - Inteiro - number
console.log(typeof num1);

let num2 = 1;
let num3 = 2.5;
let num4 = 10.46482487

console.log(num2 + num3);
console.log(num2.toString() + num3); //toString converte um valor numerico para tipo String, podendo assim concatenar a variável ao invés de somar
console.log(num4.toFixed(2)); //Arredonda um valor tipo float para a quantidade de casa decimais passadas como parametro
console.log(Number.isInteger(num2)) // Essa função verifica se o valor da variável passada é do tipo inteiro, retornando true or false dependendo do resultado da verificação

let numTemp = num2 * '5';
console.log(Number.isNaN(numTemp)); // Mesma situação da função acima, isNaN valida se o resultado é do tipo Nan(Not a Number)

// Padrão de precisão numérico do JavaScript IEEE 754-2008
/*
O padrão IEEE 754 [1], recomendado pelos institutos ANSI 
(American National Standard Institute) e IEEE (Institute of Electrical and 
Eletronic Engineers), refere-se às normas a serem seguidas pelos 
fabricantes de computadores e construtores de compiladores de 
linguagens científicas, ou de bibliotecas de funções matemáticas, na 
utilização da aritmética binária para números de ponto flutuante. As 
recomendações são relativas ao armazenamento de dados numéricos, 
métodos de arredondamento, tratamento de casos de underflow e 
overflow, formas de realização das quatro operações aritméticas básicas 
e implementação de funções nas linguagens de programação. A grande 
vantagem destes procedimentos é permitir uma maior portabilidade dos 
softwares numéricos e criação de novos tipos de dados a fim de resolver 
problemas conhecidos como  “mal condicionados” que contribuem para 
que a computação numérica forneça resultados errôneos, mesmo 
quando são utilizados métodos comprovadamente eficazes. Neste 
trabalho conceituamos como os números “reais” são armazenados, quais 
seus limites de grandeza e precisão; de que forma é verificada e tratada 
uma ocorrência de underflow ou  overflow; quais os métodos de 
arredondamento utilizados; qual a configuração especial de bits 
recomendada e como devem ser realizadas as operações aritméticas 
com números de ponto flutuante. Apresentamos estas informações, 
acompanhadas de exemplos, a fim de dar subsídios a todos interessados 
na área de matemática computacional.
*/
// Problemas de imprecisão de resultados
let num5 = 0.7
let num6 = 0.1

num5 += num6; //Deveria retornar o valor 0.8, porém o valor somado foi 0.7999999999999999
console.log(num5) //Dessa forma o está impreciso
console.log(parseFloat(num5.toFixed(2))) //Porém usando essas conversões corrige a imprecisão
console.log(((num5 * 100) + (num6 * 100)) / 100) //Também pode ser resolvido dessa forma, realizando o cálculo que corrige essa imprecisão, porém da forma anterior é mais simples

console.log(100 / 0); // O JavaScript tem um problema em que ele permite calcular uma divisão por zero, exibindo o valor infinity não tratando como erro como é feito em outras linguagens
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre Integer-----------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const float1 = 1.1; //Float - number
console.log(typeof float1);
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre float-------------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let tipoUndefined; //Undefined -> não aponta para local nenhum da memória, normalmente nunca é usada apenas existe para o próprio JavaScript
console.log(typeof tipoUndefined);
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre tipo indefinido---------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const tipoNull = null; // Nulo -> não aponta para local nenhum da memória, null é usado para setar que a variável é nula e que da a entender que possa ser alterada a qualquer momento
console.log(typeof tipoNull);
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre null--------------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const tipoBoolean = true; //Booleano: Recebe verdadeiro ou falso, normalmente usado para checar se algo está ou não habilitado
if (tipoBoolean === true) {
    console.log('Sou verdadeiro');
    console.log(typeof tipoBoolean);
}
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre boolean-----------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const array = [1,2,3]; //Tipo de dado que armazena um tipo de lista de dados, vai ser explicado mais a frente do curso
const arrayB = array;
console.log(array, arrayB);

arrayB.push(4); //Incluí valor á variável
console.log(array, arrayB);
console.log('');
console.log('-----------------------------------------------------------Fim da parte sobre array-------------------------------------------------------------------------')
