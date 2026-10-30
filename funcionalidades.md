# funcionalidades.md — Matriz de Funcionalidades e Status

Este documento rastreia todas as funcionalidades previstas para o portfólio de **Lucas Ferreira**, organizadas por prioridade estrita conforme a metodologia de desenvolvimento por etapas.

---

## Legenda de Status
- ⏳ **Pendente:** Especificado, aguardando início da etapa correspondente.
- ⚙️ **Em Desenvolvimento:** Em processo de codificação ativa.
- ✅ **Implementada:** Código escrito e integrado ao projeto.
- 🧪 **Testada:** Verificada em múltiplos cenários e validada tecnicamente.

---

## Matriz Priorizada de Funcionalidades

| Prioridade | Funcionalidade | Descrição & Critérios de Aceitação | Status |
| :---: | :--- | :--- | :---: |
| **01** | **Navegação entre Seções** | Links semânticos no cabeçalho com rolagem suave (`scroll-behavior: smooth`) até Sobre mim, Projetos e Contato. Indicador visual da seção ativa na tela via `IntersectionObserver`. | ✅ Implementada |
| **02** | **Menu Responsivo (Mobile)** | Menu de navegação adaptável para telas menores que 768px, com botão de acionamento (hambúrguer/fechar em SVG), foco gerenciado e fechamento automático após clique no link. | ✅ Implementada |
| **03** | **Hero (Primeira Impressão)** | Seção inicial de alto impacto: nome "Lucas Ferreira", frase de apresentação, identificador como estudante de TI da Escola Raphael Di Santo, elemento gráfico abstrato original em CSS/SVG e CTA para os projetos. | ✅ Implementada |
| **04** | **Seção Sobre Mim** | Apresentação pessoal da trajetória acadêmica na Escola Raphael Di Santo e exibição categorizada das 7 competências (sem gráficos enganosos de porcentagem), com destaque para engenharia de prompts, Office/Excel e programação. | ✅ Implementada |
| **05** | **Galeria de Projetos** | Apresentação editorial personalizada para Allin (completo do curso), TecnoBound (jogo completo) e Merciless (em planejamento). Cumprimento integral da proibição de imagens de IA, utilizando composição gráfica com CSS puro e metadados reais. | ✅ Implementada |
| **06** | **Animações e Transições** | Animações de entrada discretas com `transform` e `opacity` sem bibliotecas externas. Microinterações nos botões, links e cards. Suporte pleno a `@media (prefers-reduced-motion: reduce)`. | ✅ Implementada |
| **07** | **Formulário de Contato com Validação** | Campos semânticos (nome, e-mail, mensagem) com validação nativa em JavaScript puro (campos obrigatórios, formato de e-mail), mensagens acessíveis de erro e sucesso, e aviso transparente sobre a ausência de backend. | ✅ Implementada |
| **08** | **Modo Claro / Escuro** | Botão acessível de alternância de tema no cabeçalho. Persistência da preferência do usuário no `localStorage` e detecção automática de preferência do sistema via `matchMedia`. | ✅ Implementada |
| **09** | **Acessibilidade (a11y)** | Estrutura semântica HTML5, taxas de contraste WCAG AA, navegação completa por teclado com `:focus-visible`, atributos ARIA necessários e textos alternativos onde aplicável. | ⏳ Pendente |
| **10** | **Testes de Responsividade** | Validação em larguras de viewport padrão: Desktop (>1024px), Tablet (768px a 1023px) e Mobile (320px a 767px). Ausência total de corte de texto e rolagem horizontal. | ⏳ Pendente |
| **11** | **Preparação para Publicação** | Documentação no `README.md`, verificação de integridade dos links, geração do documento de referências em PDF de 1 página e checklist para entrega na Vercel e Google Sala de Aula. | ⏳ Pendente |

---

## Log de Atualizações de Status

- **2026-10-30:** Documento criado com todas as 11 funcionalidades mapeadas.
- **2026-10-30 (Etapa 2):** Implementação concluída da Seção Hero (03), Menu Responsivo (02) e Alternância de Tema Claro/Escuro (08). Hero implementado; testes em diferentes dispositivos ainda precisam ser confirmados.
- **2026-10-30 (Etapa 3):** Implementação da Seção Sobre mim (04) e ativação do observador reativo de navegação (01). As 7 competências foram categorizadas e não usam barras de porcentagem.
- **2026-10-30 (Etapa 4):** Implementação da Seção Projetos (05). Apresentação personalizada de Allin, TecnoBound e Merciless em CSS puro, estados reais explícitos e zero imagens de IA.
- **2026-10-30 (Etapa 5):** Implementação da Seção Contato (07) com formulário semântico, validação nativa de campos em JS puro, mensagens acessíveis e rodapé institucional.
- **2026-10-30 (Etapa 6):** Implementação das Funcionalidades Avançadas (06): sistema de revelação gradual via IntersectionObserver resiliente (No-JS safe), barra de progresso editorial e microinterações de menu e tema.
- **2026-10-30 (Etapa 7):** Revisão visual e harmonia de design baseada nas 4 referências (Emotion Agency, Signal-A Studio, Format por Obys e Studio Freight). Ajuste do token de contraste dinâmico de botões (`--accent-contrast`), animação sutil nos indicadores de status/telemetria (`pulseDot`), verificação estática inicial de tags, âncoras e arquivos; testes visuais manuais ainda pendentes.


## Pendências antes da entrega
- Confirmar manualmente a acessibilidade e o contraste em todos os estados de tema.
- Testar o site em larguras reais de desktop, tablet e celular; não marcar como testado antes da verificação.
- Confirmar os links de contato e GitHub com endereços reais antes de adicioná-los.
- Criar o PDF final de referências visuais com capturas reais dos sites; os blocos gráficos do rascunho não substituem screenshots.
- Criar o repositório e publicar o site; os arquivos locais não significam que a publicação já existe.
