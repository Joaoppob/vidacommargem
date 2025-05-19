const navBarMobileButton = document.querySelectorAll('.nav-mobileButton');

navBarMobileButton.forEach(e => {
    e.addEventListener('click', () => {
        const navBar = document.querySelector('.nav-mobileWrapper');
        navBar.classList.toggle('active');

        // ⛔ Travar ou destravar o scroll
        if (navBar.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        console.log('NavBar toggled!');
    });
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(e => {
    e.addEventListener('click', () => {
        setTimeout(() => {
            const navBar = document.querySelector('.nav-mobileWrapper');
            navBar.classList.remove('active');
            document.body.classList.remove('no-scroll'); // ✅ destrava scroll
            console.log('NavBar closed!');
        }, 50);
    });
});
