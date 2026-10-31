# Auditoria técnica do portfólio — 31/10/2026

## Escopo
Revisão estática dos arquivos locais `index.html`, `style.css`, `script.js`, recursos de imagem e documentação. O objetivo foi encontrar erros verificáveis no código e corrigir os encontrados sem inventar informações pessoais ou alterar os estados declarados dos projetos.

## Resultados

| Verificação | Resultado |
|---|---|
| Sintaxe JavaScript (`node --check script.js`) | Aprovada, sem erros de sintaxe |
| Análise estrutural HTML (parser HTML) | Aprovada, sem erros registrados pelo parser |
| Sintaxe CSS (`tinycss2`) | Aprovada, sem erros de parsing |
| IDs duplicados | Nenhum encontrado |
| Links internos para IDs inexistentes | Nenhum encontrado |
| Campos de formulário sem rótulo associado | Nenhum encontrado |
| Imagens sem atributo `alt` | Nenhuma encontrada |
| Arquivos locais de imagem ausentes | Nenhum encontrado |
| Seções principais | `hero`, `sobre`, `projetos`, `contato` presentes |
| Logos dos projetos e foto de perfil | Os quatro arquivos locais referenciados existem |
| Ordem dos projetos | TecnoBound, Allin, Merciless |
| Links de projetos | TecnoBound e Allin possuem links; Merciless continua sem link |
| Integridade do arquivo ZIP | Verificada após a criação do pacote |

## Correções realizadas

1. **Armazenamento do tema mais resiliente:** leitura e gravação de `localStorage` agora são protegidas por `try/catch`. Se o navegador bloquear o armazenamento, o tema ainda é aplicado na página e o restante do JavaScript continua funcionando.
2. **Compatibilidade da preferência de tema do sistema:** o listener de `prefers-color-scheme` usa `addEventListener('change', ...)` quando disponível e recorre a `addListener(...)` em navegadores antigos.
3. **Consistência de manutenção:** corrigido o número do comentário do log de inicialização no `script.js` e atualizados `README.md` e `funcionalidades.md` para registrar a auditoria e as pendências reais.

## Links e conteúdo conferidos no código

- **TecnoBound:** `https://projeto-ad-voidbound-lzaq5d22q-40271-5993s-projects.vercel.app/`
- **Allin:** `https://allin-brown-alpha.vercel.app`
- **Merciless:** sem link, conforme solicitado.
- A descrição de Allin identifica a colaboração de Lucas Ferreira, Yago Delbone, Nathan Liberato e Enrico Bonato.
- O formulário de contato valida os campos no navegador, mas não envia mensagens a um servidor; essa limitação está indicada no site.

## Limitações desta auditoria

- A rede não estava disponível no ambiente de teste, então não foi possível confirmar se os dois endereços do Vercel respondem externamente neste momento. Os endereços estão presentes no HTML, mas isso não equivale a uma verificação de disponibilidade.
- Não foi executado um navegador real nesta auditoria. Portanto, a aparência final, a alternância efetiva das cores durante a rolagem, o comportamento em telas pequenas, o contraste em cada tema e as interações por teclado ainda precisam de teste manual.
- O formulário é apenas demonstrativo/estático e não envia mensagens.

## Checklist manual recomendado

- [ ] Abrir `index.html` ou executar com Live Server.
- [ ] Percorrer os quatro links de navegação e testar o menu em uma tela estreita.
- [ ] Rolar lentamente pelos três projetos e conferir as cores: TecnoBound (azul/ciano, preto e rosa), Allin (amarelo, preto e branco), Merciless (preto e vermelho).
- [ ] Testar o botão claro/escuro antes, durante e depois da seção de projetos.
- [ ] Abrir os links do TecnoBound e Allin e confirmar se carregam.
- [ ] Enviar o formulário com campos vazios, e-mail inválido e dados válidos; confirmar que a mensagem explica que nada é enviado.
- [ ] Testar a navegação com teclado, o foco visível e a preferência de movimento reduzido.
- [ ] Verificar larguras de 320 px, 375 px, tablet e desktop, observando cortes e rolagem horizontal.
