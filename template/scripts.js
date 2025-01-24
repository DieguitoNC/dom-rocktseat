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