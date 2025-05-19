const header = document.querySelector('header');

watchExitFromViewport('#scroll-trigger', () => {
    header.classList.add('fixed_navBar');
}, () => {
    header.classList.remove('fixed_navBar');
});

function watchExitFromViewport(selector, onExit, onEnter) {
    const target = document.querySelector(selector);
    if (!target) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                onExit(); // saiu da tela
            } else {
                onEnter(); // voltou pra tela
            }
        },
        {
            root: null, // viewport
            threshold: 0 // qualquer parte fora já conta
        }
    );

    observer.observe(target);
}