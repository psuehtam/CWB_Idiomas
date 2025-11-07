// politica.js - Funcionalidades para a página de Política de Privacidade

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando política de privacidade...');
    inicializarPoliticaPrivacidade();
});

function inicializarPoliticaPrivacidade() {
    try {
        inicializarAcordeon();
        inicializarAcessibilidade();
        console.log('Política de privacidade inicializada com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar política de privacidade:', error);
    }
}

// Função principal para mostrar/ocultar conteúdo
function mostrarConteudo(elemento) {
    if (!elemento) {
        console.warn('Elemento não encontrado');
        return;
    }

    const estaAtivo = elemento.classList.contains('active');
    
    // Fecha todos os outros itens abertos
    if (!estaAtivo) {
        const todosItens = document.querySelectorAll('.politica-item');
        todosItens.forEach(item => {
            if (item !== elemento && item.classList.contains('active')) {
                fecharItem(item);
            }
        });
    }
    
    // Alterna o item clicado
    if (estaAtivo) {
        fecharItem(elemento);
    } else {
        abrirItem(elemento);
    }
}

// Função para abrir um item
function abrirItem(elemento) {
    try {
        elemento.classList.add('active');
        elemento.setAttribute('aria-expanded', 'true');
        
        const conteudo = elemento.querySelector('.conteudo');
        if (!conteudo) {
            console.warn('Conteúdo não encontrado no elemento:', elemento);
            return;
        }
        
        const alturaReal = conteudo.scrollHeight;
        conteudo.style.maxHeight = alturaReal + 'px';
        
    } catch (error) {
        console.error('Erro ao abrir item:', error);
    }
}

// Função para fechar um item
function fecharItem(elemento) {
    try {
        elemento.classList.remove('active');
        elemento.setAttribute('aria-expanded', 'false');
        
        const conteudo = elemento.querySelector('.conteudo');
        if (conteudo) {
            conteudo.style.maxHeight = '0';
        }
    } catch (error) {
        console.error('Erro ao fechar item:', error);
    }
}

// Inicializa o sistema de acordeon
function inicializarAcordeon() {
    const itens = document.querySelectorAll('.politica-item');
    
    if (itens.length === 0) {
        console.warn('Nenhum elemento .politica-item encontrado');
        return;
    }
    
    console.log(`Encontrados ${itens.length} itens de política`);
    
    itens.forEach((item, index) => {
        // Configura atributos ARIA
        item.setAttribute('aria-expanded', 'false');
        item.setAttribute('aria-controls', `politica-conteudo-${index}`);
        
        const conteudo = item.querySelector('.conteudo');
        const titulo = item.querySelector('h3');
        
        if (!conteudo || !titulo) {
            console.warn('Estrutura incompleta no item:', item);
            return;
        }
        
        // Configura IDs únicos para acessibilidade
        conteudo.id = `politica-conteudo-${index}`;
        titulo.id = `politica-titulo-${index}`;
        item.setAttribute('aria-labelledby', titulo.id);
        
        // Adiciona evento de clique
        item.addEventListener('click', function(e) {
            // Previne que cliques nos links dentro do conteúdo fechem o item
            if (!e.target.closest('a')) {
                mostrarConteudo(this);
            }
        });
        
        // Adiciona evento de teclado
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mostrarConteudo(this);
            }
        });
    });
}

// Inicializa recursos de acessibilidade
function inicializarAcessibilidade() {
    // Adiciona descrição para screen readers
    const acordeonContainer = document.querySelector('.politica-container');
    if (acordeonContainer) {
        acordeonContainer.setAttribute('role', 'region');
        acordeonContainer.setAttribute('aria-label', 'Política de Privacidade - Seções expansíveis');
    }
    
    // Melhora a navegação por teclado
    document.addEventListener('keydown', function(e) {
        const itens = Array.from(document.querySelectorAll('.politica-item'));
        const itemAtivo = document.activeElement;
        
        if (!itens.includes(itemAtivo)) return;
        
        const indexAtual = itens.indexOf(itemAtivo);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (indexAtual < itens.length - 1) {
                    itens[indexAtual + 1].focus();
                }
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                if (indexAtual > 0) {
                    itens[indexAtual - 1].focus();
                }
                break;
                
            case 'Home':
                e.preventDefault();
                itens[0]?.focus();
                break;
                
            case 'End':
                e.preventDefault();
                itens[itens.length - 1]?.focus();
                break;
                
            case 'Escape':
                e.preventDefault();
                const itensAbertos = document.querySelectorAll('.politica-item.active');
                itensAbertos.forEach(fecharItem);
                break;
        }
    });
}

// Adiciona estilos dinâmicos
function adicionarEstilosDinamicos() {
    const estilosDinamicos = `
        .politica-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
        }
        
        .politica-item:focus {
            outline: 2px solid var(--green-color);
            outline-offset: 2px;
        }
        
        .politica-item.active {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .politica-item .conteudo {
            transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
            overflow: hidden;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .politica-item,
            .politica-item .conteudo {
                transition: none;
            }
        }
    `;

    const style = document.createElement('style');
    style.textContent = estilosDinamicos;
    document.head.appendChild(style);
}

// Inicializa estilos
adicionarEstilosDinamicos();

// Debug
console.log('Política de Privacidade - JS carregado com sucesso!');