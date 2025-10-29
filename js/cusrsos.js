function showSection(sec) {
    const secoes = document.querySelectorAll('.secao');
    
    switch (sec) {

        case 'Todos':
            secoes.forEach(s => s.classList.add('ativa'));
            break;

        default:
            secoes.forEach(s => s.classList.remove('ativa'));
            document.getElementById(sec).classList.add('ativa');
            break;
    }
}
