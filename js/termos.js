function mostrarConteudo(elemento) {
  // Fecha todos os outros termos abertos
  const todosTermos = document.querySelectorAll('.termo');
  todosTermos.forEach(termo => {
      if (termo !== elemento && termo.classList.contains('active')) {
          termo.classList.remove('active');
      }
  });
  
  // Alterna o termo clicado
  elemento.classList.toggle('active');
}

// Fecha o termo clicando fora (opcional)
document.addEventListener('click', function(event) {
  const termosContainer = document.querySelector('.termos-container');
  const termo = event.target.closest('.termo');
  
  if (!termo && termosContainer && !termosContainer.contains(event.target)) {
      const todosTermos = document.querySelectorAll('.termo');
      todosTermos.forEach(termo => {
          termo.classList.remove('active');
      });
  }
});

// Adiciona suporte a teclado para acessibilidade
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      const todosTermos = document.querySelectorAll('.termo');
      todosTermos.forEach(termo => {
          termo.classList.remove('active');
      });
  }
});

// Adiciona acessibilidade com ARIA
document.addEventListener('DOMContentLoaded', function() {
  const termos = document.querySelectorAll('.termo');
  
  termos.forEach(termo => {
      termo.setAttribute('role', 'button');
      termo.setAttribute('tabindex', '0');
      termo.setAttribute('aria-expanded', 'false');
      
      termo.addEventListener('keydown', function(event) {
          if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              mostrarConteudo(this);
          }
      });
  });
});