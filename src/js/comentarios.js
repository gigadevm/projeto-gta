/*
Objetivo 1 - Quando  o usuário clicar no botão de seleção de plataformas
deve abrir uma caixa com os botões de seleção de plataforma !

Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele !

Passo 2 - Pegar o  elemento do conteudo que precisa ser mostrado, no caso a lista de plataformas !

Passo 3 - Pegar o clique do usuário no js!

Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo dele apareça !

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão em cima do botão, o conteúdo deve ser escondido !

Passo 1 - Verificar se o botão já esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente !
*/

    // Objetivo 1 - Quando  o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

// Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele !

const botao = document.querySelector(".btn-plataforma"); 
/*Pegou a tag <Button> responsavel por pegar "O BOTÃO"*/ 

// Passo 2 - Pegar o  elemento do conteudo que precisa ser mostrado, no caso a lista de plataformas

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
/*Pegou a tag <ul> responsavel por pegar "A LISTA"*/

// Passo 3 - Pegar o clique do usuário no js

botao.addEventListener("click", () => {
/*Aiciona um Ouvinte para ouvir o EVENTO/AÇÃO do click do botão e informa para os outros elementos que o mesmo foi clicado, dessa forma executando a ação dento das chaves { ... } quando o botão for clicado*/

// Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão em cima do botão, o conteúdo deve ser escondido

    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

/*Verifica se o Botão esta Aberto, ou verifica se a classe ("ativo") está presente na lista de classes do elemento das plataformas. Isso determina se o conteúdo está aberto ou não*/

// Passo 1 - Verificar se o botão já esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    }else{
/*Se o botão estiver ABERTO, ele remove a class "ativo" para ESCONDER O CONTEÚDO*/

// Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo dele apareça
        elementoPlataformas.classList.add("ativo");
/*Se o botão estiver FECHADO, adiciona a class "ativo" para MOSTRAR O CONTEÚDO*/
    }
});