// Objetos são exatamente o que o nome representa, objetos que possuem atributos e que podem ser acessados em algum momento
const pessoa1 = { // Estrutura de um objeto, cada valor dentro é um atributo podendo incluir diversos atríbutos separados por virgula
    nome: 'Luiz',
    sobrenome: 'Hugo',
    idade: 27
}

const pessoa2 = {
    nome: 'Marieli',
    sobrenome: 'Stankievski',
    idade: 26
}

console.log(pessoa1.nome) // Posso acessar qualquer atributo dos objetos usando o nome do objeto e selecionando o atributo que gostaria de acessar
console.log(pessoa2.nome)
console.log('');
console.log('---------------------------------------------------------------------Criando objetos apartir de função-------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Também é possível criar objetos apartir de funções
function criarPessoa (nome1,sobrenome1,idade1){ // A fnção está criando um objeto que cria e retorna os seus atributos conforme passados como parametro no momento da execução da função
    return {
        nome1: nome1, // O retorno dos atributos podem ser feito das duas formas, tanto repetindo o noe dos atributos quando passando somente uma vez, o JavaScript vai reconhecer da mesma forma
        sobrenome1, idade1
    };
}

const pessoa3 = criarPessoa('Luiz', 'Carlos', 53);
console.log(pessoa3.sobrenome1)

console.log('');
console.log('---------------------------------------------------------------------Criando objetos com métodos------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Métodos é basicamente uma função que se cria dentro do objeto e pode ser executa fora do objeto
const pessoa4 = {
    nome: 'Marieli',
    sobrenome: 'Stankievski',
    idade: 26,

    fala(){ // Isso é um método que exibe os atributos do objeto em um texto e executa um outro método que incrementa a idade cada vez que é executado
        this.incrementaIdade(); // this é usado dentro do objeto como uma referencia dos proprios atributos ou metodos do objeto, ou seja this.nome seria esse atributo nome que está nesse objeto 
        console.log(`${this.nome} ${this.sobrenome} está falando que a idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa4.fala(); // Os métodos dos objetos podem ser executados fora do objeto da mesma forma que uma função
pessoa4.fala();
pessoa4.fala();
pessoa4.fala();


