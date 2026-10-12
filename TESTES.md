# Verificação da entrega

Data: 11/10/2026. Esta lista descreve testes realmente executados; não é uma garantia de disponibilidade futura dos fabricantes.

## Navegador

Usado o navegador integrado do Codex, com um servidor estático local, na rota `/central-tecnica/`.

- Carregamento dos 16 itens e das categorias configuradas.
- Busca por `DIAGNOSTICO`, com resultado por palavras-chave sem acentos e em maiúsculas.
- Filtros combinados: Compactadores + Windows + ARM64 resultam em 7-Zip.
- Alternância entre lista e cartões; escolha mantida após recarregar.
- Adição de 7-Zip aos favoritos, persistência após recarga e filtro com um resultado.
- Tema claro e escuro; persistência após recarga e revisão visual de ambos.
- Busca sem resultado e botão para limpar filtros.
- Diálogo de detalhes com categoria, distribuição, fonte, data e aviso de página oficial.
- Atalho Ctrl+K: foco confirmado no campo de busca.
- Download do checklist próprio concluído pelo navegador.
- Registro do checklist nos acessos recentes, persistência após recarga e limpeza da lista.
- Cópia do link de 7-Zip, conferida na área de transferência do navegador.
- Editor: inclusão de item temporário (16 → 17), prévia, edição do nome e exclusão confirmada (17 → 16).
- Importação do JSON original pelo seletor de arquivos e confirmação ao substituir cópia local alterada.
- Exportação do catálogo pelo botão e leitura do arquivo baixado. O conteúdo foi comparado com o JSON entregue, incluindo nova exportação após o ajuste do endereço do VLC.
- Importação de catálogo com ID duplicado: mensagem de erro e preservação dos 16 itens locais.
- Editor e portal em 390 × 844 px: revisão visual; largura do documento não ultrapassou a viewport. Menu móvel abriu, selecionou Navegadores (2 resultados) e fechou.
- Portal em 1440 × 1000 px: revisão visual de sidebar, essenciais, filtros e lista.
- Cenário isolado sem arquivos data/: mensagem de falha de catálogo, motivo HTTP 404, orientação e opção de tentar novamente.
- Logs capturados dos fluxos normais públicos e administrativos: nenhuma mensagem de erro ou aviso de JavaScript. O cenário intencional de recursos ausentes foi tratado separadamente.

Os itens temporários não foram incorporados ao catálogo entregue. Preferências de teste foram repostas a lista e tema escuro; favoritos e recentes de teste foram removidos. Capturas desktop e móvel acompanham a entrega, fora da pasta a publicar.

## Verificações automatizadas

27 verificações passaram: catálogo/categorias, busca por nome/conteúdo/palavras-chave, normalização, múltiplos termos, filtros combinados, favoritos, essenciais, estado vazio, duas ordenações, IDs duplicados, categoria inexistente, campo obrigatório, bloqueio de protocolos inseguros e URLs com credenciais, caminho local em subdiretório, bloqueio de travessia, data impossível, SHA-256 inválido, alternativa perigosa, ausência de campos opcionais, roundtrip JSON, sintaxe dos quatro arquivos JavaScript, recursos HTTP na raiz e em subdiretório e igualdade do JSON exportado pelo navegador.

Os recursos HTML, CSS, JavaScript, SVG, JSON e documento local responderam com HTTP 200 na raiz e em `/central-tecnica/`. O teste em subdiretório foi feito em servidor local, sem publicar em uma conta GitHub.

## Links demonstrativos

As páginas de Google Chrome, Firefox, 7-Zip, AnyDesk, RustDesk, CPU-Z, HWiNFO, CrystalDiskInfo, CrystalDiskMark, Everything, Rufus, Ventoy, Recuva e MemTest86 foram consultadas em suas fontes oficiais. A página canônica do [VLC](https://www.videolan.org/vlc/) foi aberta e confirmada no navegador, pois a leitura automatizada da página recebeu uma restrição do fabricante. O catálogo usa essa página canônica.

As URLs efetivamente cadastradas estão em `data/programs.json`; todas as entradas de fabricantes usam tipo `page`. Não foi feito download de instaladores nem execução de software. Foram conferidas páginas de origem, não integridade de binários ou direitos de redistribuição de instaladores. O checklist é um documento próprio permitido e usa download local direto.

## Limites da cobertura

- Não foram executados testes independentes em Chrome, Edge e Firefox, nem em aparelhos físicos. Responsividade foi verificada por viewport no navegador integrado.
- Não foi realizada uma auditoria completa WCAG, teste com leitor de tela ou benchmark formal de desempenho.
- O servidor de prévia do teste e o servidor opcional da entrega usam o mesmo modelo estático; o script `.cmd` não foi aberto por duplo clique.
- Não foi publicado um repositório no GitHub Pages ou uma Release real. O tutorial segue a documentação oficial do GitHub.
- Não foi testado o bloqueio total de localStorage ou a indisponibilidade da área de transferência; o código contém tratamento para esses casos.
- Não foram simuladas alterações concorrentes de catálogo por vários administradores; importação/exportação são manuais.
