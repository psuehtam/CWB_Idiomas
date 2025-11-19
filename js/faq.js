const btnPerguntas = document.querySelectorAll('.perguntas-frequentes .card .pergunta');

btnPerguntas.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const resposta = card.querySelector('.resposta');

        document.querySelectorAll('.perguntas-frequentes .card .resposta.active').forEach((res) => {
            if (res !== resposta) {
                res.style.maxHeight = null;
                res.classList.remove('active');
            }
        });

        if (resposta.classList.contains('active')) {
            resposta.style.maxHeight = null;
            resposta.classList.remove('active');
        } else {
            resposta.classList.add('active');
            resposta.style.maxHeight = (resposta.scrollHeight + 40) + "px";
        }
    });
});

const navButtons = document.querySelectorAll('.perguntas-frequentes nav button');
const sections = document.querySelectorAll('.perguntas-frequentes > div[id]');

const targetSection = document.getElementById('Geral');
if (targetSection) {
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    targetSection.style.display = 'block';
}

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        navButtons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });

        const targetId = button.textContent;
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            sections.forEach((section) => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
        }
    });
});