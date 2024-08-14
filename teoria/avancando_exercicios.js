// Exercício: 1

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.
const listaCompra = []
listaCompra.push("Alface", "Cebola", "Macarrão","Carne","Tomate")
console.log(listaCompra)
listaCompra.shift()
console.log(listaCompra)

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.
const numeros =  [3, 7, 21, 29, 36, 42]

const divisivelPorSete = numeros.find((num) => num % 7 === 0 && num > 10)

console.log(divisivelPorSete)

// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.
const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const numeroMaior20 = numeros2.filter((num) => num >= 20)
console.log(numeroMaior20)

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.
const frase = " Bom dia, mundo! "
const fraseSeparada = frase.trim().split(" ")

console.log(fraseSeparada)
// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const oRatinho = "O rato roeu a roupa do rei de Roma"
console.log(oRatinho.startsWith("O"))
console.log(oRatinho.endsWith("Roma"))