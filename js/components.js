/**
 * Shopp Café - Biblioteca de Componentes
 * Arquivo: js/components.js
 * Função: Carregar HTML externo e gerenciar estado ativo do menu
 */

// Função genérica para injetar HTML
async function loadComponent(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const html = await response.text();
            element.innerHTML = html;
        } else {
            console.error(`Erro ao carregar ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Erro de conexão ao carregar ${filePath}:`, error);
    }
}

// Função para identificar a página atual e pintar o link de laranja
function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // Seleciona links desktop e mobile (só funciona após o HTML ser injetado)
    const links = document.querySelectorAll('.nav-links a, .nav-links-mobile a');

    links.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPath) {
            // Remove estilos padrão
            link.classList.remove('font-medium', 'text-sm', 'text-base', 'hover:text-primary');
            
            // Verifica se é mobile para aplicar estilo específico
            const isMobile = link.parentElement.classList.contains('nav-links-mobile');
            
            if (isMobile) {
                link.classList.add('font-bold', 'text-primary', 'bg-primary/10', 'rounded-lg', 'text-base');
            } else {
                link.classList.add('font-bold', 'text-primary', 'text-sm');
            }
        }
    });
}
