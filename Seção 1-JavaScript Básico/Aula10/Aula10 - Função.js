/* Função é basicamente um bloco de código que executa alguma ação, sendo ela enviar um valor
e receber um valor ou não*/
console.log('---------------------------------------------------------------------Introdução a função---------------------------------------------------------------------')
function DigaOi(nome){ //Essa é basicamente a estrutura de uma função, os parenteses receberia um parametro caso necessãrio informar algo para a função
    console.log(`Olá ${nome}`) // Tudo o que está dentro da função só pode ser acessado dentro da função
    return `Olá ${nome} eu sou o retorno da função` // Return faz o que o nome diz, retorna algo ao executar a função que pode ser acessado fora da função
}

DigaOi('Victor'); // Essa é a execução da função, um exemplo muito básico, sendo passado o nome como parametro para ser exibido no texto dentro da função

const varDigaOi = DigaOi('Luiz');// Se a função estiver retornando um valor é possível gravar esse retorno em uma variável, caso não esteja retornando a variável será do tipo undefined
console.log(varDigaOi);

function soma(x = 1, y = 1){ // QUando eu não enviar um parametro eu posso ter parametros padrão no caso o valor 1 é o padrão para os dois parametros
    const result = x + y
    return result
}

const result = soma(2,2) 
console.log(result)

console.log(soma(5,5))
console.log(soma(3,23))
console.log(soma(8,1))
console.log('');
console.log('---------------------------------------------------------------------Criando uma função dentro da variável---------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const raizQuadrada = function (x) { // É possível criar a função juntamente com a variável
    return Math.sqrt(x)
};

console.log(raizQuadrada(4))
console.log(raizQuadrada(9))
console.log(raizQuadrada(16))
console.log('');
console.log('---------------------------------------------------------------------Arrow Functions-------------------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Subtrai = (x,y) => x-y // Forma simplificada de criar funções, normalmente utilizadas para funções curtas como essa do exemplo
console.log(Subtrai(5,1))