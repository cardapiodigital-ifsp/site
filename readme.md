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

✨ Funcionalidades Principais
Arquitetura Modular: O header e o footer são carregados via JavaScript. Alterar um arquivo reflete em todo o site instantaneamente.

Active Link Highlighting: O sistema identifica automaticamente em qual página o usuário está e destaca o link correspondente no menu com a cor da marca.

Swiper Neon: Carrossel interativo com bordas iluminadas (efeito neon laranja), responsivo e com suporte a touch.

Dark Mode Ready: A infraestrutura do Tailwind já prevê suporte a modo escuro (dark: classes).

Scroll Animations: Elementos surgem suavemente na tela conforme a rolagem (IntersectionObserver).

Menu Mobile: Navegação totalmente adaptada para dispositivos móveis com animações suaves de entrada/saída.

🛠️ Como Rodar o Projeto
⚠️ IMPORTANTE: Como o projeto utiliza requisições assíncronas (fetch API) para carregar os componentes (header.html e footer.html), ele não funcionará corretamente se você apenas clicar duas vezes no arquivo index.html (devido à política de segurança CORS dos navegadores para arquivos locais file://).

Você precisa de um servidor local. Escolha uma das opções abaixo:

Opção A: VS Code (Recomendado & Mais Fácil)
Instale a extensão Live Server no VS Code.

Abra o arquivo index.html.

Clique em "Go Live" no canto inferior direito do VS Code.

Opção B: Python
Se tiver Python instalado, abra o terminal na pasta do projeto e rode:

Bash

# Python 3.x
python -m http.server 8000
Acesse http://localhost:8000 no seu navegador.

Opção C: Node.js
Se tiver Node.js instalado, você pode usar o pacote http-server:

Bash

npx http-server
🎨 Personalização
Cores e Tema
As cores principais são definidas na configuração do Tailwind dentro da tag <script> no <head> dos arquivos HTML:

Primary (Laranja): #d47311

Background Dark (Café): #221910

Carrossel (Swiper)
Ajustar velocidade/efeito 3D: Edite o arquivo js/swipper.js.

Ajustar brilho neon/bordas: Edite o arquivo css/swipper.css.

📄 Licença
Este projeto foi desenvolvido para fins de estudo e portfólio. Desenvolvido com foco em Excelência e Clean Code.
