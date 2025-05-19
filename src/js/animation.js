const animate = document.querySelectorAll('.animate');

// Configurações do observer
const options = {
    threshold: 0.4, // ativa quando 60% do elemento estiver visível
};

// Função que adiciona a animação
function adicionaAnimacao(animacao, delay, item) {
    item.classList.add(animacao);
    item.style.animationDelay = delay;
    item.classList.add('animado'); // previne animações duplicadas

    setTimeout(() => {
        if (item.classList.contains('pulse')) {
            item.style.animation = `pulse 2s infinite`;
        }
    }, 1000); // espera o fade-in terminar
}

// Callback do observer
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animado')) {
            const animacao = entry.target.dataset.animacao || 'fade-in-up';
            const delay = entry.target.dataset.delay || '0s';

            adicionaAnimacao(animacao, delay, entry.target);

            observer.unobserve(entry.target); // para de observar depois da animação
        }
    });
}

// Cria o observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observa cada elemento com a classe 'animate'
animate.forEach((el) => observer.observe(el));
