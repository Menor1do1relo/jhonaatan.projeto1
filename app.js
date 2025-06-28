function criaCartao (catergoria, pergunta, resposta) {
    let container = document.getElementById ('container')
    let cartao = document.createElement ('article')

    cartao.innerHTML = `
    <div class="cartao__conteudo">
     <h3>${catergoria}</h3>
    <div class="cartao_conteudo__pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo__resposta">
    <p>${resposta}</p>
    </div>
    </div>
    `
    let respostaEstaVisivel = false

    function virarCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }

    cartao.addEventListener ('click', virarCartao)

    container.appendChild(cartao)
}
