import '../scss/main.scss';
import './animation.js';
import './navBarMobile.js';
import './navBarLinkWidth.js';
import './fixedNavBar.js';
import './parallax.js';
import './atualizaDicas.js';
import './filtraCards.js';
import './ordenaCards.js';
// import './automaticDarkMode.js';

console.log('JS carregado com sucesso!');

const botao = document.querySelector('#meu-botao');
if (botao) {
  botao.addEventListener('click', () => {
    alert('Você clicou no botão!');
  });
}
