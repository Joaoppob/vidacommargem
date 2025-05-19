document.addEventListener('DOMContentLoaded', () => {
    const btnSortir = document.querySelector('.historias-options-flex button');
    const containerCards = document.querySelector('.dicas-cards-flex');

    btnSortir.addEventListener('click', () => {
        const cards = Array.from(containerCards.querySelectorAll('.card-link'));

        // Embaralha os cards com algoritmo Fisher-Yates
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        // Remove todos do DOM e reinsere na nova ordem
        containerCards.innerHTML = '';
        cards.forEach(card => containerCards.appendChild(card));
    });
});
