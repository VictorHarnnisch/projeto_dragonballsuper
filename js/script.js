const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

function removerSelecaoDosBotoes() {
    botoes.forEach(botao => botao.classList.remove('selecionado'));
}

function esconderTodosOsPersonagens() {
    personagens.forEach(personagem => personagem.classList.remove('selecionado'));
}

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerSelecaoDosBotoes();
        botao.classList.add('selecionado');

        esconderTodosOsPersonagens();
        personagens[indice].classList.add('selecionado');

        // Adiciona borda ao ícone do botão clicado
        const icone = botao.querySelector('img');
        if (icone) {
            icone.style.border = '2px solid mas'; // Cor da borda
        }

        // Remove a borda dos outros ícones
        botoes.forEach(outroBotao => {
            if (outroBotao !== botao) {
                const outroIcone = outroBotao.querySelector('img');
                if (outroIcone) {
                    outroIcone.style.border = ''; // Remove a borda
                }
            }
        });
    });
});