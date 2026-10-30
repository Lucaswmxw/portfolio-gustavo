# AGENTS.md — Regras Gerais e Diretrizes do Projeto

Este documento define as regras operacionais, restrições técnicas, princípios de design e padrões de desenvolvimento para o portfólio pessoal de **Lucas Ferreira**, estudante do curso técnico de Tecnologia da Informação da Escola Raphael Di Santo.

---

## 1. Tecnologias Permitidas e Proibidas

### Permitidas
- **HTML5** semântico.
- **CSS3** puro com Custom Properties (variáveis CSS), Flexbox, CSS Grid, `clamp()` e media queries.
- **JavaScript puro** (Vanilla JS, ES6+) com APIs nativas (`IntersectionObserver`, `localStorage`, `matchMedia`, eventos DOM nativos).
- **SVG escrito manualmente** para ícones e elementos gráficos autorais vetoriais.
- Fontes externas seguras via CDN (Google Fonts) com fallback obrigatório para fontes do sistema (`system-ui`, `sans-serif`, `monospace`).

### Proibidas
- Frameworks JavaScript e bibliotecas de UI: **React, Vue, Angular, Svelte, Next.js, Nuxt**.
- Frameworks e utilitários CSS: **Tailwind CSS, Bootstrap, Bulma, Sass/SCSS compilado externamente**.
- Bibliotecas externas de animação e scroll: **GSAP, Three.js, Lenis, Locomotive Scroll, Framer Motion**.
- Dependências e gerenciadores de pacotes pesados para execução básica (o site deve ser 100% estático, rodando direto no navegador sem necessidade de build complexo).

---

## 2. Organização e Estrutura de Arquivos

```
portfolio/
├── AGENTS.md                   # Diretrizes e governança do projeto
├── referencias.md              # Pesquisa e justificativas visuais (Awwwards/SiteInspire)
├── identidade.md               # Identidade pessoal, competências, cores e tipografia
├── funcionalidades.md          # Backlog priorizado e status de implementação
├── index.html                  # Estrutura semântica do portfólio
├── style.css                   # Estilização completa, variáveis e responsividade
├── script.js                   # Interatividade, reatividade e validações nativas
├── assets/
│   ├── images/                 # Imagens reais e originais fornecidas pelo autor
│   └── icons/                  # Ícones e grafismos em SVG
├── README.md                   # Documentação técnica do projeto e publicação
└── documento_referencias.pdf   # Documento síntese de referências em 1 página
```

---

## 3. Regra Absoluta Sobre Imagens dos Projetos

> **É ESTRITAMENTE PROIBIDO gerar imagens por inteligência artificial para representar os projetos Allin, TecnoBound ou Merciless.**

- Não criar artes artificiais, capturas de tela falsas, falsos personagens, falsos logotipos ou interfaces simuladas por IA.
- Utilizar exclusivamente materiais visuais reais e originais fornecidos por Lucas Ferreira.
- Na ausência de imagens de um projeto, a representação visual deve ser resolvida com **HTML e CSS** (tipografia expressiva, formas geométricas, divisores, blocos de cor, gradientes sutis, diagramação editorial e contêineres reservados para arquivos futuros).

---

## 4. Requisitos de Identidade Visual e Referências

- O site deve apresentar identidade própria, composição editorial, contraste refinado e tipografia marcante.
- Não utilizar templates pré-fabricados ou estruturas genéricas de cards centralizados.
- As escolhas visuais devem ser fundamentadas nas 4 referências investigadas:
  1. **Emotion Agency** (`https://emotion-agency.com/`): Navegação reativa, fluidez e continuidade interativa.
  2. **Signal-A Studio** (`https://signal-a.studio/`): Tipografia expressiva de alto contraste, metadados refinados e grid editorial rigoroso.
  3. **Format por Obys Agency** (`https://format.obys.agency/`): Linguagem visual geométrica baseada em contêineres de proporção, ritmo e escala tipográfica.
  4. **Studio Freight** (`https://studiofreight.com/`): Estrutura editorial, metadados informativos e arquitetura clara de seções.

---

## 5. Requisitos de Responsividade e Acessibilidade

- Layout adaptável com consistência para **computadores, tablets e smartphones**.
- Sem corte de títulos em telas estreitas (uso de `clamp()`) e sem qualquer barra de rolagem horizontal indesejada (`overflow-x: hidden` controlado).
- Menu de navegação responsivo, acessível e funcional em dispositivos móveis, com fechamento automático ao navegar.
- **Acessibilidade:**
  - Código HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Navegação completa por teclado com indicador de foco visível (`:focus-visible`).
  - Contraste em conformidade com as diretrizes WCAG AA.
  - Respeito à preferência do sistema por movimento reduzido (`@media (prefers-reduced-motion: reduce)`).
  - Formulário com rótulos semânticos (`<label>`) e mensagens de validação acessíveis.

---

## 6. Método de Desenvolvimento por Etapas

1. **Desenvolvimento estritamente progressivo**: Não desenvolver o site todo de uma única vez.
2. Cada etapa deve ser implementada, testada e apresentada para validação antes de avançar para a próxima.
3. Ciclo de etapas:
   - **Etapa 1:** Planejamento e documentação inicial (`AGENTS.md`, `referencias.md`, `identidade.md`, `funcionalidades.md`).
   - **Etapa 2:** Hero (primeira impressão, tipografia editorial, elemento visual geométrico e CTA).
   - **Etapa 3:** Seção Sobre mim (trajetória no curso de TI da Raphael Di Santo e competências categorizadas).
   - **Etapa 4:** Seção Projetos (apresentação editorial de Allin, TecnoBound e Merciless com seus estados reais).
   - **Etapa 5:** Seção Contato (layout de encerramento, dados de contato e formulário com validação nativa).
   - **Etapa 6:** Funcionalidades avançadas (menu mobile, microinterações, alternância de tema claro/escuro).
   - **Etapa 7:** Revisão visual e harmonia de design baseada nas referências.
   - **Etapa 8:** Testes de conformidade, cross-device, acessibilidade e console.
   - **Etapa 9:** Preparação para publicação (README, GitHub, Vercel/hospedagem gratuita e PDF de 1 página).

---

## 7. Procedimentos de Teste e Preservação de Código

- Nunca declarar algo como testado sem ter executado a verificação real.
- Diferenciar claramente no relato:
  - O que foi **implementado**;
  - O que foi **verificado/testado**;
  - O que ainda está **pendente**.
- Preservar o código funcional existente em cada alteração; fazer mudanças cirúrgicas e localizadas.
- Evitar poluição de escopo global no JavaScript e nunca registrar ouvintes de evento duplicados.
- Ao concluir cada alteração, fornecer uma explicação sucinta de aproximadamente duas linhas.
