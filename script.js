/**
 * Shopp Café - Script Principal
 * Arquivo: js/script.js
 * Dependência: js/components.js (deve ser carregado antes no HTML)
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Carrega Header e Footer (usando a função do components.js)
    // O 'await' garante que o código pare aqui até o HTML chegar
    await loadComponent('header-placeholder', '/components/header.html');
    await loadComponent('footer-placeholder', '/components/footer.html');

    // 2. Agora que o HTML existe, rodamos as funções de interface
    highlightActiveLink(); // Função do components.js
    initMobileMenu();
    initHeaderScrollEffect();
    initSmoothScroll();
    initScrollAnimations();
    initFormEnhancements();
    updateCopyrightYear();
});

/* -------------------------------------------------------------------------- */
/* FUNÇÕES DE INTERFACE (UI)                                                  */
/* -------------------------------------------------------------------------- */

function initMobileMenu() {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const icon = menuButton?.querySelector("span");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                mobileMenu.classList.add("animate-fade-in");
                if (icon) icon.innerText = "close";
            } else {
                mobileMenu.classList.add("hidden");
                if (icon) icon.innerText = "menu";
            }
        });
        
        // Fecha ao clicar em um link
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                if (icon) icon.innerText = "menu";
            });
        });
    }
}

function initHeaderScrollEffect() {
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                header.classList.add("shadow-md", "bg-background-light/95", "dark:bg-background-dark/95");
                header.classList.remove("bg-background-light/90", "dark:bg-background-dark/90");
            } else {
                header.classList.remove("shadow-md", "bg-background-light/95", "dark:bg-background-dark/95");
                header.classList.add("bg-background-light/90", "dark:bg-background-dark/90");
            }
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.card-animate, section h2, .grid > div');
    elementsToAnimate.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
        observer.observe(el);
    });
}

function initFormEnhancements() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            const btn = form.querySelector("button[type='submit']");
            if (btn) {
                btn.innerText = "Enviando...";
                btn.disabled = true;
                btn.classList.add("opacity-75", "cursor-not-allowed");
            }
        });
    }
}

function updateCopyrightYear() {
    const yearSpan = document.querySelector(".current-year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
}