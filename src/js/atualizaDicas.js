
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.options-flex button');
    const categorias = document.querySelectorAll('[class^="categoria-"]');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const categoriaSelecionada = botao.getAttribute('data-categoria');


            // Remove classe "ativo" de todas as categorias
            categorias.forEach(categoria => {
                categoria.classList.remove('ativo');
                categoria.classList.remove('ativo1');
            });

            // Adiciona classe "ativo" apenas na selecionada
            const categoriaAtivar = document.querySelector(`.categoria-${categoriaSelecionada}`);

            if (categoriaAtivar) {
                categoriaAtivar.classList.add('ativo');
                if (categoriaAtivar.classList.contains('categoria-tecnicas')) {
                    categoriaAtivar.classList.add('ativo1');
                }
            }

            // Estiliza botão ativo (opcional)
            botoes.forEach(btn => btn.classList.remove('ativo'));
            botao.classList.add('ativo');
        });
    });

    // Ativa o primeiro botão na carga inicial
    botoes[0].click();
});

