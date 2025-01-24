## Acessando elementos no DOM
```
//Visualizar o conteúdo do document

  

//console.log(document)

  

// Obter o title da página

// console.log(document.title)

  

//Acessar um elemento por ID (Seletor ID)

  

const guest = document.getElementById("guest-2")

console.log(guest)

  

//Mostra as propriedades do objeto

console.dir(guest)

  

// Acessar elemento com class (SELETOR class)

const guestsByClass = document.getElementsByClassName("guest")

console.log(guestsByClass)

  

// Exibir o primeiro da lista

console.log(guestsByClass.item(0))

console.log(guestsByClass[0])

  

//Selecionar uma lista de elementos pela tag

const guestsTag = document.getElementsByTagName("li")

console.log(guestsTag)

```
## Query Selector
```
  

//Acessa o elemento pelo selector ID

const guest = document.querySelector("#guest-1")

console.log(guest)

  

//Acessa o elemento pelo selector class

// const guests = document.querySelector(".guest")

  

// Retorna todos os elementos encontrados pela query

const guests = document.querySelectorAll(".guest")

console.log(guests)

```

## Manipulando os conteúdos
```
// Retorna o conteúdo como texto

// console.log(guest.textContent)

  

// guest.textContent = "João"

  

console.log(guest.textContent) // Retorna o conteúdo visível e oculto

console.log(guest.innerText) // Retorna somente o conteúdo visível

console.log(guest.innerHTML) //Retorna o HTML
```
## Alternando os estilos
```
  

const input = document.querySelector("#name")

  

// Adiciona a classe

//input.classList.add("input-error")

  

// Remove a classe

//input.classList.remove("input-error")

  

//Ativa ou desativa, faz o contrário do que já está

//input.classList.toggle("input-error")

  

const button = document.querySelector("button")

// Modificar as propriedades dos elementos

button.style.backgroundColor = "red"

```

## Criando Elementos
```
const guests = document.querySelector("ul")

  

const newGuest = document.createElement("li")

newGuest.classList.add("guest")

const guestName = document.createElement("span")

  

guestName.textContent = "Diego"

  

const guestSurname = document.createElement("span")

guestSurname.textContent = "Fernandes"

  

//Adiciona após o último filho

//newGuest.append(guestName, guestSurname)

  

//Adiciona antes do primeiro filho

//newGuest.prepend(guestSurname)

  
  

// É mais simples que o appende aceita apenas um argumento

newGuest.appendChild(guestName)

  

guests.append(newGuest)
```

## Manipulando atributos

```
const input = document.querySelector("input")

  
  

// Adiciona um atributo

//input.setAttribute("disabled", true)

  

//input.setAttribute("type", "file")

  
  

// Remove um atributo

//input.removeAttribute("id")
```

## Eventos
```
window.addEventListener("load", () => {

    console.log("A pagina foi carregada")

})

  
  

addEventListener("click", (event) =>{

    event.preventDefault()

  

    // retorna todas as informacoes do evento

    //console.log(event)

  

    //retorna o elemento clicado

    console.log(event.target)

  

    console.log(event.target.textContent)

  

})

```
## Evento em 1 elemento especifico
```
window.addEventListener("load", () => {

    console.log("A pagina foi carregada")

})

  
  

addEventListener("click", (event) =>{

    event.preventDefault()

  

    // retorna todas as informacoes do evento

    //console.log(event)

  

    //retorna o elemento clicado

    console.log(event.target)

  

    console.log(event.target.textContent)

  

})
```
## Eventos de formulario
```
const form = document.querySelector("form")

  

form.onsubmit = (event) => {

    event.preventDefault()

    console.log("Voce fez submit no formulario")

}

  

form.addEventListener("submit", event => {

    console.log("Voce fez submit no formulario #2")

})
```
## Eventos em inputs

- Keydonw - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, ETC)
- Keypress - Quando uma tecla do tipo caracter é pressionada (letras, numeros, pontos, etc)
```
const input = document.querySelector("input")

  

//Keydonw - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, ETC)

  

/*input.addEventListener("keydown", (event) => {

    console.log(event.key)

})*/

  

//Quando uma tecla do tipo caracter é pressionada (letras, numeros, pontos, etc)

input.addEventListener("keypress", (event) => {

    console.log(event)

})

  

input.onchange = () => {

    inputChange()

}

  

function inputChange() {

    console.log("O input mudou !")

}
```


## Expressao regulares
- Serve para identificar um ocorrencia ou padrao de string, por meio de uma combinacao de caracteres
![[Pasted image 20250124092521.png]]
- https://regexr.com/

```
const input = document.querySelector("input")

const form = document.querySelector("form")

/*

input.addEventListener("input", () => {

    const value = input.value

    const regex = /\D+/g

    //Retorna quando tem ocorrencia na string

    //console.log(value.match(regex))

    //Testa se atende o padrao

    //const isValid = regex.test(value)

    //console.log(isValid)

})

*/

  

form.addEventListener("submit", (event) => {

    event.preventDefault()

  

    const value = input.value

    const regex = /\D+/g

  

    if (regex.test(value)) {

        console.log(value)

        alert("Padrao Encontrado")

    } else {

        alert("valor inválido. Digite corretamente!")

    }

  

    //const value = input.value.replace(regex,"")

    //console.log(value)

})
```

## Debug
- Processo de encontrar e arrumar bugs