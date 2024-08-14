//Exercicios de fundamentos 

// Exercicios 1: Olá, mundo
// Criar um script que impra "Olá, mundo!" no console

console.log("Olá, mundo!")

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console  

const variavel = "1234"
const variavelNum = Number(variavel)
console.log(typeof variavelNum)

// Exercicio 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres uma string tem e quantas palavras existem na frase
const minhaString = "JavaScript é incrível"

const numeroCaracteres = minhaString.length
const numeroPalavras = minhaString.split(" ").length

console.log(`A frase tem ${numeroCaracteres} caracteres`)
console.log(`A frase tem ${numeroPalavras} palavras`)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console 
const nomes = ["Pedro", "Sabrina", "João", "Gabriel", "Mariana", "Valéria"]
for(let i = 0; i < nomes.length;i++ ){
    console.log(nomes[i])
}

//Exercícios 5: Funções, strings e Math
//// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.


function converterHorario(horario24){
    const[hora, minuto] = horario24.split(":")[0];
    let hora12 = hora % 12 || 12;
    const periodo = hora < 12 ? "AM" : "PM";
    return `${hora12}:${minuto} ${periodo}`
}

console.log(converterHorario("22:30"))