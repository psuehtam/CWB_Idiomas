const verMais = document.querySelector('.ver-mais');
const conteudo = document.querySelector('.container-ver-mais');

verMais.addEventListener('click', () => {
    conteudo.classList.toggle('ativo');
    if (conteudo.classList.contains('ativo')) {
        verMais.innerHTML = `
        <b class="interrogacao">?</b>
        <p>Ver Menos</p>`;
    } else {
        verMais.innerHTML = `
        <b class="interrogacao">?</b>
        <p>Ver Mais</p>`;
    }
});