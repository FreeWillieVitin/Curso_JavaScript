const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br />`//Tag <br /> pula a linha no HTML e tag strong deixa a o texto dentro da tag em negrito
document.body.innerHTML += `O seu nome tem letras: <strong>${nome.length}</strong><br />`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong><br />`
document.body.innerHTML += `Qual o primeiro índice da letra "O" no seu nome? <strong>${nome.indexOf('o')}</strong><br />`
document.body.innerHTML += `Qual o último índice da letra "O" no seu nome? <strong>${nome.lastIndexOf('o')}</strong><br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`
document.body.innerHTML += `Seu nome com letra maíuscula: <strong>${nome.toUpperCase()}</strong><br />`
document.body.innerHTML += `Seu nome com letra maíuscula: <strong>${nome.toLowerCase()}</strong><br />`

