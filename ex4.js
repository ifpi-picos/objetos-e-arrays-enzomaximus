//Crie um objeto produto com as propriedades nome, preco e quantidade. Em seguida, calcule e imprima o valor total do estoque (preço * quantidade).
const produto = {
    nome: 'hybrid wax',
    preço: 60,
    quantidade: 10,
}; 
let valor = produto.preço*produto.quantidade
console.log(`o valor total do estoque é ${valor}`)
