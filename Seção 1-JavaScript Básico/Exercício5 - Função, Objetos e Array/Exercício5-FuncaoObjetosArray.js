function meuEscopo (){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome') 
        const peso = form.querySelector('.peso') 
        const altura = form.querySelector('.altura') 

        function Grava() {
            const galera = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            }  
            return galera;
        }

        pessoas.push(Grava())

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()