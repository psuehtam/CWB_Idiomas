function mostrarConteudo(elemento) {
    const conteudo = elemento.querySelector('.conteudo');
  
    if (!conteudo) return; // segurança: se não encontrar o elemento, não faz nada
  
    if (conteudo.style.display === "block") {
      conteudo.style.display = "none";
    } else {
      conteudo.style.display = "block";
    }
  }