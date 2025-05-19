// const toggle = document.querySelectorAll('.theme-toggle');
// const body = document.body;
// console.log("salve")

// function applyTheme(theme) {
//     if (theme === "dark") {
//         body.classList.add("dark-mode");
//         toggle.forEach(e => {
//             e.classList.add('dark');
//         });
//     } else {
//         body.classList.remove("dark-mode");
//         toggle.forEach(e => {
//             e.classList.remove('dark');
//         });
//     }
// }

// function toggleTheme() {
//     const currentTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
//     applyTheme(currentTheme);
//     localStorage.setItem("theme", currentTheme);
// }

// function getCurrentTheme() {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//         return storedTheme;
//     }

//     const currentHour = new Date().getHours();
//     return currentHour >= 18 || currentHour < 6 ? "dark" : "light";
// }

// // Aplicar tema ao carregar a página
// document.addEventListener("DOMContentLoaded", () => {
//     const theme = getCurrentTheme();
//     applyTheme(theme);
// });

// // Botão para alternar manualmente
// const themeToggleButton = document.querySelectorAll(".theme-toggle");
// if (themeToggleButton) {
//     themeToggleButton.forEach(e => {
//         e.addEventListener("click", toggleTheme);
//     });
// }
