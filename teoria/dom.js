// DOM 

// Selecionar elementos -- método antigo
const elementoPorId = document.getElementById("meuId")

// Método atual

const elementoPorId2 = document.querySelector("#meuId")
const elementoClasse = document.querySelector(".minhaClasse")

// Manipular conteúdo de texto
const element = document.querySelector("#meuId")

console.log(element.textContent)

setTimeout(() => {
    element.textContent = "mudei texto"
}, 1000)

// trabalhando com atribbutos

const link = document.querySelector("a")
console.log(link)

link.setAttribute("href", "https://mozilla.org")// mudar url do a
console.log(link.getAttribute("href")) //pegar a url do atributo

console.log(link.hasAttribute("target")) //verificar se o atributo existe

link.removeAttribute("target") //remove atributos

// Manipulação de classes do CSS

const elemento =  document.querySelector("#meuId")

elemento.classList.add("novaClasse") //adiciona classe
elemento.classList.remove("novaClasse") //remove classe

elemento.classList.toggle("outraClasse")
elemento.classList.toggle("outraClasse") // ele remove e adiciona classe


// Manipular o css
const elemento3 = document.querySelector("#meuId")
elemento3.style.color = "blue"
elemento3.style.backgroundColor = "red"

//Navegação entre nós 
const elementos4 = document.querySelector("#meuInput")

const pai = elementos4.parentNode

console.log(pai)

// Obter o primeiro filho 
const primeiroFilho = pai.firstChild
console.log(primeiroFilho)
// Obtendo o último filho
const ultimoFilho = pai.lastChild;

console.log(ultimoFilho);

//Manipulação do DOM

//Cria elemento

const novoElemento = document.createElement("div")
novoElemento.textContent = "Minha div"

document.body.appendChild(novoElemento)  //adicionar o elemento no body -- coloca em último

document.body.insertBefore(novoElemento, pai)

document.body.removeChild(elementoPorId)

// Eventos do DOM
//click
const botao = document.querySelector("button")

botao.addEventListener("click", function(){
    console.log("Botão clicado")
})

// mouse
const mouse = document.querySelector("#meuFormulario")

mouse.addEventListener("mouseover", function(){
    console.log("OLHA O MOUSEEEE")
})

const campoInput = document.querySelector("#meuInput")

campoInput.addEventListener("keydown", function(){
    console.log("tecla pressionada")
})

const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault
    console.log("form enviado")
})

// Propagação de eventos

document.querySelector("#elementoPai").addEventListener("click", function(event){
    event.stopPropagation()
    console.log("o Clique passou aqui em tropa")
})

// parar prograpação com event.stopPropagation()