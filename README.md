# 🐙 Visualizador de Perfil do GitHub

Uma aplicação web interativa que permite buscar qualquer usuário do GitHub e visualizar as informações do seu perfil e seus repositórios mais recentes consumindo a **API pública do GitHub**.

Projeto desenvolvido durante o curso **DevQuest** para praticar HTML, CSS e JavaScript moderno (ES Modules, `fetch`, `async/await` e manipulação de DOM).

---

## ✨ Funcionalidades

- 🔍 **Busca de usuários**: Pesquise pelo nome de usuário do GitHub clicando no botão **Buscar** ou pressionando a tecla **Enter**.
- 👤 **Dados do perfil**: Exibe foto de avatar, nome, bio, número de seguidores e número de pessoas que o usuário segue.
- 📦 **Listagem de repositórios**: Mostra até os 10 repositórios mais recentes do usuário, incluindo:
  - Nome e descrição do repositório
  - Quantidade de ⭐ Stars
  - Quantidade de 🔁 Forks
  - Quantidade de 👀 Watchers
  - 💻 Linguagem principal utilizada
- ⏳ **Feedback visual e tratamento de erros**: Exibe mensagem de carregamento (`Carregando...`) durante a requisição e alertas caso o campo esteja vazio ou o usuário não seja encontrado.
- 📱 **Layout responsivo**: Interface adaptada para diferentes tamanhos de tela (desktop, tablet e celular).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**:
  - Variáveis CSS (`:root`)
  - Flexbox e CSS Grid (grade de repositórios)
  - Media Queries para responsividade
- **JavaScript (ES6+)**:
  - **ES Modules** (`import` / `export`) para organizar o código em responsabilidades separadas
  - **Fetch API** com `async/await` e `try/catch` para consumo da API REST do GitHub
  - **Template Strings** e métodos de array (`map`, `join`) para renderização dinâmica no DOM
- **Devicon**: Ícone oficial do GitHub.

---

## 📂 Estrutura de Pastas

```text
visualizador-perfil-github/
├── index.html               # Estrutura principal da página
├── README.md                # Documentação do projeto
└── src/
    ├── css/
    │   ├── reset.css        # Reset de estilos padrão do navegador
    │   ├── styles.css       # Estilos principais da aplicação e cards
    │   ├── animations.css   # Animações da interface
    │   └── responsive.css   # Media queries para telas menores
    └── js/
        ├── index.js         # Eventos de busca (clique e Enter) e controle de fluxo
        ├── githubApi.js     # Funções de requisição à API do GitHub
        └── profileView.js   # Renderização do HTML do perfil e repositórios no DOM
```

---

## 🚀 Como Executar o Projeto

Como o projeto utiliza **ES Modules** (`<script type="module">`), é necessário abri-lo através de um servidor local (como a extensão **Live Server** do VS Code) para evitar bloqueios de CORS do navegador.

1. Clone este repositório:
   ```bash
   git clone <url-do-seu-repositorio>
   ```
2. Abra a pasta do projeto no **VS Code**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (ou acesse pelo servidor local de sua preferência).
4. Digite um nome de usuário do GitHub no campo de busca e confira o resultado!

---

## 🔗 Endpoints da API do GitHub Utilizados

- **Dados do usuário**: `https://api.github.com/users/{username}`
- **Repositórios do usuário**: `https://api.github.com/users/{username}/repos?per_page=10&sort=created`
