function imprimindo() {
    let nomeCompleto = prompt("Digite seu nome: ")
    let nomes = nomeCompleto.split(" ")
    let primeiroNome = nomes[0]
    let ultimoNome = nomes[nomes.length -1]

    console.log(`Seu primeiro nome é: ${primeiroNome}`)
    console.log(`Seu últimonnome é: ${ultimoNome}`)
}
    
imprimindo()