window.addEventListener("scroll", () => {
    const imgContainer = document.querySelector(".missao-img-mascara");
    const img = imgContainer.querySelector("img");
    const rect = imgContainer.getBoundingClientRect();
    const scrollSpeed = 0.3;

    const offset = rect.top * scrollSpeed - 140;
    img.style.transform = `translateY(${offset}px)`;
});