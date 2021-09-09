document.addEventListener("DOMContentLoaded", function () {
    inseriBotoesComInnerHTML()
} );

function criarBotao(texto, cor) {
    botao = document.createElement("button");
    botao.innerHTML = texto;
    botao.addEventeLintener("click", function () {
        mudartamanhotitulo(tamanho);
    });
    return botao;
}

const tamanho = [
    ["diminui", "-"]
    ["aumente", "+"]
]

function inserirBotoescomJS() {
    div = document.createElement("div");
    div.style.backgroundColor = "green";
    tamanho.forEach(function (item) {
        const [texto, tamanho] = item;
        botao = criarBotao(texto, tamanho);
        div.appendChild(botao);
    });
    document.body.prepend(div);
}

function alterartamanhotitulo(tamanho) {
    h1 = document.querySelector("h1");
    h1.style.font = tamanho;
}
