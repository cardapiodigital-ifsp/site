☕ Shopp Café
Onde cada xícara conta uma história.

Um website moderno, responsivo e modular desenvolvido para uma cafeteria fictícia. O projeto foca em UX/UI, Clean Code e Performance, utilizando tecnologias modernas sem a necessidade de build tools complexos.

🚀 Tecnologias Utilizadas
HTML5 Semântico: Estrutura acessível e organizada.

Tailwind CSS (via CDN): Estilização utilitária com configuração personalizada de tema (Cores, Fontes e Animações).

JavaScript (ES6+): Lógica modular, assíncrona e orientada a componentes.

Swiper.js: Carrossel touch-friendly com efeito 3D Coverflow personalizado.

CSS3 Custom: Efeitos de Neon e ajustes finos de layout.

Google Fonts: Tipografia Work Sans.

📂 Estrutura do Projeto
A arquitetura foi pensada para ser escalável e de fácil manutenção, respeitando o princípio DRY (Don't Repeat Yourself) através da componentização do cabeçalho e rodapé.

Plaintext

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
Arquitetura Modular: O header e o footer são carregados dinamicamente via JavaScript (fetch API). Alterar um arquivo reflete em todo o site.

Active Link Highlighting: O sistema identifica automaticamente em qual página o usuário está e destaca o link correspondente no menu.

Swiper Neon: Carrossel interativo com bordas iluminadas (efeito neon laranja), responsivo e com suporte a touch.

Dark Mode Ready: A configuração do Tailwind já prevê suporte a modo escuro (dark: classes).

Scroll Animations: Elementos surgem suavemente na tela conforme a rolagem (IntersectionObserver).

Menu Mobile: Navegação totalmente adaptada para dispositivos móveis com animações suaves.

🛠️ Como Rodar o Projeto
⚠️ Atenção: Como o projeto utiliza requisições assíncronas (fetch) para carregar os componentes (header.html e footer.html), ele não funcionará se você apenas clicar duas vezes no arquivo index.html (devido à política de segurança CORS dos navegadores).

Você precisa de um servidor local. Escolha uma das opções abaixo:

Opção A: VS Code (Recomendado)
Instale a extensão Live Server no VS Code.

Abra o arquivo index.html.

Clique em "Go Live" no canto inferior direito do VS Code.

Opção B: Python
Se tiver Python instalado, abra o terminal na pasta do projeto e rode:

Bash

# Python 3.x
python -m http.server 8000
Acesse http://localhost:8000 no navegador.

Opção C: Node.js
Se tiver Node.js, você pode usar o pacote http-server:

Bash

npx http-server
🎨 Personalização
Cores e Tema
As cores principais são definidas na configuração do Tailwind dentro da tag <script> no <head> dos arquivos HTML:

primary: #d47311 (Laranja Café)

background-dark: #221910 (Café Expresso)

Carrossel
Para ajustar a velocidade ou o efeito 3D do slider, edite o arquivo js/swipper.js. Para ajustar o brilho do neon ou as bordas, edite css/swipper.css.

📄 Licença
Este projeto foi desenvolvido para fins educacionais e de portfólio. Sinta-se à vontade para usar como base para seus próprios projetos.

Desenvolvido com foco em Excelência e Clean Code.
