

// quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll(".botao");

// quando clicar no botão do personagem mostrar as informações do personagem

const personagens = document.querySelectorAll(".personagem");

// adicionar a classe "selecionado" no botão que o usuário clicou

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

        desselecionarBotao();

        botao.classList.add("selecionado");

        // verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        selecionarpersonagem();


        // adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");
    });
});


function selecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

