const botao = document.querySelector('.ver-mais');
const cards = document.querySelectorAll('.section-perguntas .card');

botao.addEventListener('click', () => {
    const ativo = botao.classList.toggle('ativo');

    if (ativo) {
        cards.forEach(card => card.classList.add('active'));
    } else {
        cards.forEach((card, i) => {
            if (i >= 3) {
                card.classList.remove('active');
            }
        });
    }

    const texto = ativo ? 'Ver Menos' : 'Ver Mais';
    botao.querySelector('p').textContent = texto;
});