# ☕ Shopp Café

> **Onde cada xícara conta uma história.**

Bem-vindo ao repositório do **Shopp Café**. Este é um website moderno, responsivo e modular desenvolvido com foco em **UX/UI**, **Clean Code** e **Performance**. O projeto utiliza uma arquitetura baseada em componentes HTML injetados via JavaScript, garantindo fácil manutenção e escalabilidade sem a necessidade de frameworks pesados.

---

## 🚀 Tecnologias Utilizadas

* **HTML5 Semântico**: Estrutura acessível e organizada.
* **Tailwind CSS (via CDN)**: Estilização utilitária com configuração personalizada de tema (Cores, Fontes e Animações).
* **JavaScript (ES6+)**: Lógica modular, assíncrona (`async/await`) e orientada a componentes.
* **Swiper.js**: Carrossel touch-friendly com efeito 3D Coverflow e design personalizado (Neon).
* **CSS3 Custom**: Efeitos de luz e ajustes finos de layout.
* **Google Fonts**: Tipografia *Work Sans*.

---

## 📂 Estrutura do Projeto

A arquitetura respeita o princípio **DRY (Don't Repeat Yourself)**. O cabeçalho e o rodapé são arquivos únicos carregados dinamicamente em todas as páginas.

```text
/ (Raiz)
│
├── index.html           # Página Inicial
├── cardapio.html        # Página de Produtos
├── sobre.html           # História e Missão
├── localizacao.html     # Contato e Mapa
│
├── components/          # Fragmentos HTML reutilizáveis
│   ├── header.html      # Navbar (Responsiva)
│   └── footer.html      # Rodapé
│
├── css/
│   └── swipper.css      # Estilos do Carrossel e efeitos Neon
│
├── js/
│   ├── components.js    # Lógica de injeção de HTML e Highlight de links
│   ├── script.js        # Orquestrador principal e animações de UI
│   └── swipper.js       # Configuração da biblioteca Swiper
│
└── image/               # Assets de imagem (Otimizados)
