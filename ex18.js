let carros = [
    {nome : "Chevrolet Camaro Z28", ano: 1967 },
    {nome : "Ford Mustang GT" , ano: 1965 },
    {nome : "Tesla Model S" , ano: 2012 },
    {nome : "Ford Mustang Mach-E", ano: 2020 }
]
let carrosMaisNovos = carros.filter(carro => carro.ano >= 2010)

console.log(carrosMaisNovos)