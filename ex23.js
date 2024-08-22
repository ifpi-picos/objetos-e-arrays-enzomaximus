function imprimeOPrimeiroNome() {
    let nomeCompleto = prompt("Digite seu nome: ")
    let nomes = nomeCompleto.split(" ")
    let primeiroNome = nomes[0]

    console.log(primeiroNome);

}

imprimeOPrimeiroNome()
