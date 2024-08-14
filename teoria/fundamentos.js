//fundamentos - armazenar dados.
var minhaVariavel = "olá, mundo";
console.log(minhaVariavel);

//variáveis e tipos de dados

var meuObjeto = {}
var meuArray = []
var meuNull = null
var meuundefined = undefined

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuundefined)

//let e const --> formas de declarar variáveis
let x = 10
const y = 5

//Operadores aritméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Operadores de comparaçã0

console.log(x == y)
console.log(x != y)

console.log("5" == 5)
console.log("5" === 5)
console.log("5" !== 5)

// Operadores lógicos
// AND &&
// OR || 
console.log(10 > 5 && 20 > 5) //true
console.log(10 == 5 || 20 == 5) //false

// Conversão de tipos 

const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2)
console.log(typeof meuNumeroConvertido)

//Estrutura de condição - if,else,else if

const idade = 17

if(idade < 13){
    console.log("Criança")
}else if(idade > 13 && idade <18){
    console.log("Adolescente")
}else{
    console.log("Adulto")
}

// Switch
const fruta = "Maça"

switch(fruta){
    case "Banana":
        console.log("Banana é fruta");
        break
    case "Maça":
        console.log("Maça é a fruta");
        break
    default:
        console.log("Fruta não encontrada")
}

// Estrutura de repetição

// contador, condição, incremento
/*for(let i = 0; i < 5; i++){
    console.log("O valor de i é: " + i)
}*/

// while

/*while(i < 5){
    console.log("Valor: " + i)
    i++;
}*/

// do while

/* do{
    console.log("o valor do j é: " + j)
    j++
}while(j<5) */

//Funções

function cumprimentar(nome){
    console.log("Olá, " + nome)
}
cumprimentar("Pedro")

//hosting = içamento
testHoisting();

function testHoisting(){
    console.log("Deu certo")
}

//arrow function --> funciona como uma função
//função lambda 

const testArrow= () => console.log("isso também é uma função")

testArrow()

// truthy e falsy

const minhaVariavel23 = ""; //falsy

if(minhaVariavel23){
    console.log("É verdadeiro")
}else{
    console.log("é falso")
}

// arrays, listas
const numeros = [10,20,30,40]
console.log(numeros)
console.log(numeros[0])

// prototype => OBJETO -> objeto2
numeros.push(6) //adiciona números
console.log(numeros)

numeros.pop() //remove números 
console.log(numeros)

// Strings

const minhaStringNova = "olá, mundo"
const minhaString3 = minhaStringNova + " Como você está? "
console.log(minhaString3)

//interpolação

const minhaString4 = `${minhaStringNova} Como você está? `
console.log(minhaString4)

console.log(minhaString3.length)
console.log(minhaString4[5])

//data e hora
const agora = Date()
console.log(agora)

const natal = new Date(2024, 11, 25) //os meses começam a contar em 0 
console.log(natal)

// Math
console.log(Math.PI)
console.log(Math.round(3.6))
console.log(Math.sqrt(16))
console.log(Math.pow(2, 8))
