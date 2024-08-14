// Avancando em JavaScript

// Manipulação de arrays 
const frutas = ["Maça", "Laranja"]

frutas.unshift("Acerola") //adiciona um elemento, só que no primeiro lugar

console.log(frutas)

//frutas.pop --> remove o último elemento, sem precisar de argumentos
frutas.shift() // remove o primeiro sem precisar de argumentos 
console.log(frutas)

// métodos usados com arrow functions -> map, filter, reduce 
const numeros = [1,2,3,4,5,6]

// find => retorna somente o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0) // percorre o array
console.log(numeroPar)
//filter => retorna todos os elementos 
const numerosPares = numeros.filter((num) => num%2 ===0)
console.log(numerosPares)

//Manipulação de strings
const frase = "olá, mundo ";

const palavras = frase.trim() //retira todos os espaços laterais
console.log(palavras)
const arrayPalavras = frase.trim().split(" ") //cria um array a partir dos espaços

const frase2 = "JavaScript é bom!"
console.log(frase2.startsWith("Java")) //retorna true ou false - verificar se tem no inicio da frase algo específico 
console.log(frase2.endsWith("!")) //retorna true ou false = verificar se tem no final da frase algo específico

// Exceções e tratamentos de erros
const idade = 15
/*
if(idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos")
} // com o erro o javascript encerra o programa*/

try {
    const idaade = 15
    if(idade < 18){
        throw new Error("Você deve ter pelo menos 18 anos!")
    }
} catch (error) {
    console.log(error.message)
}

// Callback => uma função que será executada em outra função

function cumprimentar(nome,callback){
    console.log("Olá, " + nome)
    callback()
}

function mostraSaudacao(){
    console.log("Como você está? ")
}

cumprimentar("Pedor", mostraSaudacao)

cumprimentar("Sabrina", function(){
    console.log("Tá tudo bem? ")
})

// settimeout => depois de um tempo executa algo, 
function mostraMensagem(){
    console.log("Essa mensagem será exibita após três seguntos")
}

setTimeout(mostraMensagem, 3000)

setTimeout(function(){
    console.log("OI")
}, 1000)

// promises

const promessa = new Promise((resolve, reject) => {
    const condicao = false
    if(condicao){
        resolve("A condição é verdadeira")
    }else{
        reject("A condição é falsa!")
    }
})

promessa
    .then((mensagem) => {
    console.log(mensagem)
    })
    .catch ((erro)=> {
    console.log(erro)
    })//executa a promises

// Bibliotecas feitas que são "promises based" => usadas para fazer requisição a servidores

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,2500, "testanto")
})

//Promise.all([promise1,promise2].then(valores) => console.log(valores))

// Async Await  => acontece com o andar do código
async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Valor obtido!"), 2000);
    });
  
    const valor = await promessa;
    console.log(valor); // "Valor obtido!"
  }
  
  obterValor();

/*

async function obterValorComErro() {
  try {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Erro ao obter valor!"), 2000);
    });

    const valor = await promessa;
    console.log(valor);
  } catch (erro) {
    console.error(erro); // "Erro ao obter valor!"
  }
}

obterValorComErro();
*/

// JSON (JavaScript Object Notation)
// Objeto javascript: {"nome": "teste"}
// padroniza a comunicação
// front-end e back-end em uma uma linguagem só
const objeto = {nome: "João", idade: 10 }

//transformar objeto em JSON

const jsonString = JSON.stringify(objeto) //isso é oq eu mando para o servidor
console.log(jsonString)
console.log(typeof jsonString)

const json = '{"nome": "João", "idade":20}' // o JSON vem assim da API

const objeto2 = JSON.parse(json) //transforma o JSON que vem da api para object 

console.log(objeto2)
console.log(typeof objeto2)