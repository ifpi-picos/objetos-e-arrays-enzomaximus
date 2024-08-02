let filmesSalvos = []
for (let i = 1; i <= 5; i++){
    let filmes = prompt(`Digite o ${i}° filme:`)
    filmesSalvos.push(filmes)
}
for (let i = 0; i < filmesSalvos.length; i++) {
    console.log(filmesSalvos[i])
}
