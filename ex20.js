let pessoas = [
    {nome: "Enzo", idade: 19},
    {nome: "Leal", idade: 43},
    {nome: "Hercília", idade: 49},
    {nome: "Lourdes", idade: 22}
]
let primeiroComMaisDe18 = pessoas.find(pessoa => pessoa.idade > 18)

console.log(primeiroComMaisDe18)