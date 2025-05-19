document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.options-flex button');
    const inputFiltro = document.getElementById('filtro-dicas');
    const cards = document.querySelectorAll('.dicas-cards');

    let categoriaAtiva = 'todos';

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            categoriaAtiva = botao.dataset.categoria;

            // Estiliza botão ativo
            botoes.forEach(btn => btn.classList.remove('ativo'));
            botao.classList.add('ativo');

            filtrarCards();
        });
    });

    inputFiltro.addEventListener('input', () => {
        filtrarCards();
    });

    function filtrarCards() {
        const termo = inputFiltro.value.toLowerCase().trim();

        cards.forEach(card => {
            const titulo = card.querySelector('h4')?.textContent.toLowerCase() || '';
            const descricao = card.querySelector('p')?.textContent.toLowerCase() || '';
            const correspondeTexto = titulo.includes(termo) || descricao.includes(termo);

            // Se o campo de texto está preenchido, só filtra por texto
            if (termo !== '') {
                card.style.display = correspondeTexto ? 'flex' : 'none';
            } else {
                // Se o campo estiver vazio, filtra por categoria
                const categorias = card.dataset.categorias.split(',').map(c => c.trim());
                const correspondeCategoria = categoriaAtiva === 'todos' || categorias.includes(categoriaAtiva);
                card.style.display = correspondeCategoria ? 'flex' : 'none';
            }
        });
    }


    // Inicializa exibindo tudo
    filtrarCards();
});
