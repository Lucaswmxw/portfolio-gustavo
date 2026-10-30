# referencias.md — Pesquisa de Referências e Decisões de Design

Este documento registra os sites reais pesquisados no Awwwards e SiteInspire, analisando suas características visuais, elementos aproveitados e justificativas para a construção da identidade autoral do portfólio de **Lucas Ferreira**.

---

## 1. Emotion Agency

- **Nome oficial:** Emotion Agency
- **URL:** [https://emotion-agency.com/](https://emotion-agency.com/)
- **Reconhecimento:** Awwwards Site of the Day (SOTD), CSS Design Awards.
- **Características visuais observadas:**
  - Navegação fluida e contínua, com resposta imediata aos movimentos do cursor e cliques.
  - Menu de navegação limpo, com transições refinadas de opacidade e posicionamento.
  - Ritmo de interação dinâmico e coeso, integrando o cabeçalho e as seções sem quebras bruscas.
  - Microinterações que oferecem feedback visual sem distrair a leitura do conteúdo.
- **Elementos que servirão de inspiração:**
  - O conceito de navegação reativa: estados de hover com transições suaves em CSS puro (`cubic-bezier`).
  - O cabeçalho funcional com indicador visual da seção atual e resposta tátil/visual imediata.
  - O ritmo orgânico de rolagem e ancoragem suave (`scroll-behavior: smooth` com compensação de offset).
- **Elementos que NÃO deverão ser reproduzidos:**
  - Efeitos em WebGL pesados, bibliotecas proprietárias de distorção ou shaders que demandam alto processamento de GPU.
  - Sequestro de scroll (*scroll hijacking*) ou bloqueio da rolagem natural do navegador.
- **Justificativa da escolha:**
  - A Emotion Agency demonstra com maestria que uma interface digital deve parecer viva e responsiva ao usuário, tornando o portfólio de um estudante de tecnologia interativo e estimulante.
- **Parte do portfólio influenciada:**
  - Cabeçalho, barra de navegação, menu móvel e microinterações de botões e links em todo o site.
- **Transformação em solução original:**
  - Implementação exclusiva com CSS3 nativo (`transform`, `opacity`, `transition`) e JavaScript nativo leve para observar seções via `IntersectionObserver`, sem qualquer dependência externa ou perda de desempenho.

---

## 2. Signal-A Studio

- **Nome oficial:** Signal-A Studio
- **URL:** [https://signal-a.studio/](https://signal-a.studio/)
- **Reconhecimento:** Awwwards Site of the Day (SOTD, Outubro de 2026).
- **Características visuais observadas:**
  - Estética minimalista rigorosa em paleta de alto contraste preto e branco (`#000000` e `#FFFFFF`).
  - Escala tipográfica impactante com títulos de grande proporção e metadados ultralegíveis em caixas e tags estruturadas.
  - Inclusão de metadados técnicos refinados (horário local, coordenadas, identificadores numéricos e escopos de projeto).
  - Uso exemplar de espaço negativo e alinhamentos assimétricos calculados em grid editorial.
- **Elementos que servirão de inspiração:**
  - Hierarquia tipográfica marcante: títulos grandes usando fontes grotescas expressivas contrapostas a textos secundários e metadados em fonte monoespaçada ou sans-serif compacta.
  - Inclusão de metadados e marcadores sutis (como badges de status de projeto, indicativo de localização e curso técnico).
  - Linhas divisórias ultrafinas de alta precisão que organizam o conteúdo sem sobrecarregar a tela.
- **Elementos que NÃO deverão ser reproduzidos:**
  - Efeitos de cursor customizado agressivos que possam prejudicar a acessibilidade ou usabilidade no mouse e touch.
  - Extremo despojamento que torne o conteúdo árido ou frio demais; o portfólio precisa transmitir a paixão de Lucas por jogos e tecnologia.
- **Justificativa da escolha:**
  - O Signal-A Studio estabelece um padrão de elegância tipográfica e estrutural perfeito para valorizar o perfil analítico, disciplinado e criativo de um desenvolvedor e estudante de TI.
- **Parte do portfólio influenciada:**
  - Hero (primeira impressão tipográfica), metadados de seções, badges de competências e diagramação de cabeçalhos de seção.
- **Transformação em solução original:**
  - Adaptação da tipografia editorial de alto impacto complementada por uma paleta que aceita um tom de destaque moderno (verde digital suave / ciano técnico) e suporte a tema claro e escuro, sem perder o calor humano dos projetos.

---

## 3. Format — Obys Agency

- **Nome oficial:** FORMAT (Obys Agency em colaboração com DES)
- **URL:** [https://format.obys.agency/](https://format.obys.agency/)
- **Reconhecimento:** Awwwards Site of the Day (SOTD), Developer Award.
- **Características visuais observadas:**
  - Exploração conceitual de formas geométricas, proporções de tela e recipientes editoriais.
  - Títulos monumentais combinados com blocos geométricos puros, grades e enquadramentos contrastantes.
  - Transições de scroll bem cadenciadas que revelam elementos conforme a página é percorrida.
  - Equilíbrio cirúrgico entre texto explicativo, forma gráfica pura e espaço em branco.
- **Elementos que servirão de inspiração:**
  - Uso de formas geométricas puras em HTML/CSS (círculos, retângulos, molduras com cantos geométricos e proporções áureas) para enriquecer o visual sem depender de fotos genéricas.
  - Composição do elemento gráfico visual original do Hero e dos cards estruturados da seção de projetos.
  - Revelações escalonadas de entrada de blocos via CSS com transições suaves ativadas por observadores.
- **Elementos que NÃO deverão ser reproduzidos:**
  - Animações experimentais excessivamente abstratas que possam dificultar a compreensão imediata das informações essenciais de um portfólio profissional.
- **Justificativa da escolha:**
  - Como é proibido gerar imagens por IA para os projetos Allin, TecnoBound e Merciless, a abordagem da Obys em *FORMAT* é a chave de ouro: construir identidade visual de altíssimo nível apenas com formas geométricas CSS, proporção, linhas e tipografia.
- **Parte do portfólio influenciada:**
  - Elemento gráfico original do Hero, layout dos três projetos (estruturação geométrica diferenciada para cada um) e divisores de seção.
- **Transformação em solução original:**
  - Criação de composições geométricas puramente em CSS e SVG semântico que funcionam como identidade própria do portfólio, com slots preparados para que Lucas possa inserir futuras capturas reais de seus projetos.

---

## 4. Studio Freight

- **Nome oficial:** Studio Freight
- **URL:** [https://studiofreight.com/](https://studiofreight.com/)
- **Reconhecimento:** Mais de 18x Awwwards Site of the Day (SOTD), Awwwards Studio of the Year nominee.
- **Características visuais observadas:**
  - Arquitetura de informação do tipo índice editorial: clareza na listagem de escopos, disciplinas e entregas.
  - Combinação primorosa entre contraste austero e micro-acelerações visuais ao interagir com itens de portfólio.
  - Apresentação transparente do status e das entregas de cada projeto com tipografia utilitária e números ordinais (`01`, `02`, `03`).
- **Elementos que servirão de inspiração:**
  - Numeração ordinal editorial (`01 / ALLIN`, `02 / TECNOBOUND`, `03 / MERCILESS`).
  - Blocos de competências organizados com clareza editorial (evitando barrinhas de porcentagem vazias e priorizando descrições concisas e sólidas).
  - Estrutura clara do rodapé/contato, tratando a mensagem e os links com honestidade e elegância.
- **Elementos que NÃO deverão ser reproduzidos:**
  - Carregamentos que atrasem o acesso imediato aos conteúdos ou navegação exclusivamente baseada em arrastar o mouse (*drag horizontal* complexo).
- **Justificativa da escolha:**
  - Complementa perfeitamente o rigor do Signal-A e a expressividade da Obys, fornecendo o formato ideal para apresentar a trajetória de TI e as competências de Lucas Ferreira com seriedade técnica.
- **Parte do portfólio influenciada:**
  - Seção Sobre mim (categorização das competências), lista/índice editorial de projetos e arquitetura do rodapé/contato.
- **Transformação em solução original:**
  - Estruturação em grid CSS responsivo de duas e três colunas com tipografia limpa, rótulos claros e metadados contextuais, 100% responsivo para celular e tablet.

---

## 5. Síntese da Harmonia Visual

A fusão das referências resulta em uma linguagem exclusiva:
- **Estrutura & Metadados:** Rigor editorial e minimalismo de alto contraste (Signal-A Studio + Studio Freight).
- **Formas & Identidade sem imagens fakes:** Composições geométricas puras e proporções balanceadas em CSS/SVG (Format / Obys Agency).
- **Fluidez & Reatividade:** Interatividade ágil, navegação suave e microinterações táteis em JavaScript e CSS puros (Emotion Agency).
