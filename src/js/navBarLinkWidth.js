const navA = document.querySelectorAll('.nav-link');


navA.forEach(link => {
    const linkWidth = link.offsetWidth;

    link.style.width = `${linkWidth + 10}px`;

});
