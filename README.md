# Central Técnica

Portal pessoal de instaladores e ferramentas para atendimentos de informática. Tema escuro, busca instantânea, categorias, filtros, favoritos, lista e cartões. Funciona no GitHub Pages sem conta para os visitantes, sem banco de dados e sem compilação.

## Comece por aqui

1. Extraia o ZIP entregue e abra a pasta `central-tecnica`.
2. Publique **o conteúdo dessa pasta** na raiz do seu repositório, seguindo o tutorial abaixo.
3. Abra o endereço do GitHub Pages para usar o portal.
4. Para cadastrar programas, abra o mesmo endereço com `admin.html` no final. Exemplo: `https://SEU-USUARIO.github.io/central-tecnica/admin.html`.

O catálogo inicial contém 15 programas com links de fabricantes e um documento próprio pequeno. Os 16 itens são demonstrações editáveis. Nenhum instalador proprietário foi copiado ou redistribuído.

## 1. Como publicar no GitHub Pages

Você precisa de uma conta GitHub. O portal funciona sem instalação no computador do cliente.

1. Entre em [github.com](https://github.com/) e crie um repositório com o nome `central-tecnica` usando **New repository**. Para a opção simples de Pages, escolha **Public**. Não coloque informações privadas nesse repositório.
2. No repositório, use **Add file → Upload files**. Arraste os arquivos e pastas de dentro de `central-tecnica`, preservando a estrutura. `index.html` precisa aparecer na raiz, ao lado de `admin.html`, `assets` e `data`, e não dentro de uma pasta adicional.
3. Inclua também o arquivo vazio `.nojekyll`. Ele evita o processamento do site como Jekyll. Se não aparecer no envio, o portal básico ainda usa arquivos comuns, mas mantenha-o no projeto.
4. Escreva uma mensagem, como “Adicionar portal”, e clique em **Commit changes**.
5. Vá a **Settings → Pages**.
6. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
7. Em **Branch**, escolha `main` e a pasta **/(root)**. Clique em **Save**.
8. Aguarde a publicação. A própria tela Pages apresenta o endereço. Use esse endereço, normalmente `https://SEU-USUARIO.github.io/central-tecnica/`.
9. Confira o portal e acesse `admin.html` para manutenção.

Não é necessário instalar pacotes, rodar build, configurar Git LFS ou adicionar tokens. Os caminhos são relativos e permitem publicar tanto na raiz de um domínio quanto em subdiretório. Se usar uma pasta `docs`, coloque todo o conteúdo nela e selecione **/docs** como fonte.

Referência oficial: [configurar a fonte de publicação no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 2. Como utilizar o portal

- Digite o nome, uma descrição ou palavras-chave na busca. A pesquisa ignora acentos e diferenças de maiúsculas; palavras separadas por espaço precisam aparecer no conteúdo do item.
- Use as categorias da lateral. Em celular, abra o menu no cabeçalho.
- Combine filtros de categoria, sistema e arquitetura. Uma arquitetura não informada não significa compatibilidade; consulte o fabricante.
- Escolha **Nome: A–Z** ou **Adição recente**. A data de adição é preenchida no editor; itens com a mesma data são ordenados pelo nome.
- Use os botões de lista e cartões. A escolha e o tema ficam salvos neste navegador.
- Clique na estrela para favoritar. A seção Favoritos e o filtro de estrela mostram seus itens salvos.
- Clique no nome do programa para abrir detalhes, fonte, arquitetura, links alternativos e SHA-256, quando informado.
- **Página oficial** abre o fabricante para selecionar a versão. **Baixar** solicita um arquivo direto; a forma de entrega depende do servidor e do navegador. Links externos abrem em outra aba.
- O botão de copiar copia o endereço principal. Se a área de transferência não estiver disponível, o endereço aparece nos detalhes para cópia manual.
- As últimas ferramentas abertas por links do portal aparecem em Início. Isso não lê o histórico do navegador. A lista pode ser limpa.
- `Ctrl+K` ou `⌘+K` foca a busca. `Tab` percorre controles e `Esc` fecha o menu ou os detalhes.

Em **Sobre e privacidade**, há um botão para limpar favoritos, acessos recentes e preferências do navegador usado. Em um computador de cliente, essa limpeza evita deixar suas preferências locais. Nenhum dado de cliente deve ser inserido no catálogo.

## Prévia local

O portal carrega JSON com `fetch`. Portanto, **não abra index.html ou admin.html por duplo clique**: navegadores restringem o acesso ao catálogo em endereços `file://`.

Opção simples no Windows:

1. Instale, se necessário, o [Node.js LTS oficial](https://nodejs.org/). Essa instalação só é necessária para a prévia na sua máquina.
2. Dê duplo clique em `iniciar-local.cmd` na pasta do projeto.
3. Mantenha a janela aberta e acesse `http://127.0.0.1:4173/`.
4. Para o editor, acesse `http://127.0.0.1:4173/admin.html`.
5. Para encerrar, volte à janela e pressione `Ctrl+C`.

Se preferir, abra um terminal na pasta e execute `node servidor-local.cjs`. Se já tiver Python, também pode executar `python -m http.server 4173 --bind 127.0.0.1`. Qualquer servidor estático que entregue HTML, JavaScript e JSON funciona. O servidor de prévia só escuta sua própria máquina; não é parte da hospedagem pública.

## 3. Como adicionar o primeiro programa pelo editor

1. Abra `admin.html` no site publicado ou na prévia local.
2. Clique em **+ Novo programa**.
3. Preencha nome, ID, descrição curta e categoria. ID é um nome único sem espaços, como `minha-ferramenta`. Use apenas letras minúsculas, números e hífens.
4. Informe o tipo de link:
   - **Página oficial**: use a página oficial de download quando ela oferece escolhas ou o arquivo direto não é estável.
   - **Baixar**: use apenas um endereço que realmente entrega um arquivo.
5. Escolha **Externo**, **GitHub Releases** ou **Arquivo local pequeno**, conforme a origem. Um arquivo local exige tipo **Baixar** e caminho `downloads/nome.ext`.
6. Preencha URL principal, página oficial com HTTPS e o nome da fonte/autoria. Para um documento próprio, a página oficial pode ser a página pública do seu projeto, após publicá-lo.
7. Informe sistemas e arquiteturas confirmados, separados por vírgulas. Se não tiver certeza, deixe as arquiteturas vazias. A interface orientará a consultar o fabricante.
8. Adicione palavras-chave separadas por vírgulas. Exemplo: `usb, pendrive, boot`.
9. Preencha os campos opcionais que conhece. Não invente versão, data de verificação ou hash. Só marque a data de verificação depois de abrir e conferir o link.
10. Marque **Ferramenta essencial** para incluí-la nessa seção. Os primeiros quatro essenciais na ordem do catálogo aparecem no destaque de Início.
11. Clique em **Pré-visualizar** para revisar o resultado.
12. Clique em **Aplicar ao catálogo local**. Essa ação ainda não publica nada.
13. Clique em **Exportar catálogo**. Confira o arquivo `programs.json` baixado pelo navegador.
14. Substitua `data/programs.json` no GitHub, como no tutorial 7.

Os campos com asterisco são obrigatórios. IDs repetidos, categorias inexistentes, URLs inválidas e hashes malformados bloqueiam a aplicação/exportação. O editor também valida catálogos importados.

## 4. Como editar um programa

1. Na lista do editor, procure e clique no programa.
2. Altere os campos desejados. Preserve o ID para não quebrar favoritos já salvos.
3. Use **Campos opcionais e links alternativos** para adicionar uma alternativa pelo formulário; dê um nome ao link, informe HTTPS e escolha página ou arquivo.
4. Pré-visualize e clique em **Aplicar ao catálogo local**.
5. Exporte e publique o JSON atualizado.

**Descartar formulário** repõe os dados aplicados daquele item. Trocar de item com um formulário pendente pede confirmação. O editor impede exportar enquanto houver alterações no formulário que ainda não foram aplicadas ou descartadas.

## 5. Como remover um programa

1. Selecione o programa no editor.
2. Clique em **Excluir programa** e leia a confirmação.
3. Confirme a exclusão local.
4. Exporte e publique o catálogo.

Você pode recuperar o catálogo anterior pelo histórico do GitHub. Uma exclusão no editor não altera imediatamente o site nem apaga arquivos de Releases ou da pasta downloads.

### Importação, rascunhos e exportação

**Importar JSON** abre um arquivo `programs.json` para substituir a cópia local após validá-lo. O limite do editor é 5 MB. Se há alterações pendentes, o editor solicita confirmação antes de substituir.

Alterações aplicadas e ainda não exportadas são mantidas como rascunho em localStorage, quando o navegador permite. Ao reabrir o editor na mesma origem, ele restaura esse rascunho e avisa. Alterações apenas digitadas no formulário não são persistidas; o navegador recebe um aviso ao sair, mas pode não mostrar esse aviso em todas as situações. Exporte regularmente.

Exportar solicita o download de um JSON; confira se o navegador concluiu e onde guardou o arquivo. O editor não tem acesso ao seu GitHub e não sabe se você publicou. O rascunho aplicado deixa de ser usado após a exportação. A exportação não altera o catálogo que os visitantes carregam.

Para partir de uma versão recém-publicada quando houver um rascunho antigo, importe o `programs.json` atualizado antes de editar. Alterações de categorias podem tornar um rascunho antigo inválido.

## 6. Como adicionar uma categoria

Categorias são configuradas em `data/categories.json`. Esta operação envolve apenas JSON, sem editar HTML, CSS ou JavaScript. Use Codex se preferir não editar esse formato.

1. No GitHub, abra `data/categories.json` e clique no lápis de edição.
2. Copie um objeto de categoria normal, como Navegadores, e adicione outro na lista. Separe os objetos por vírgula.
3. Use um ID novo e estável, um nome legível, um ícone e `group: "categories"`. Não coloque `view` em uma categoria de programas.

Exemplo de objeto:

```json
{
  "id": "produtividade",
  "name": "Produtividade",
  "icon": "box",
  "group": "categories"
}
```

4. Salve com **Commit changes** e aguarde a publicação.
5. Recarregue o editor. A categoria aparecerá automaticamente no formulário e no filtro público.

As entradas Início, Todos os programas, Downloads essenciais e Favoritos usam `view` (`home`, `all`, `essential`, `favorites`). Elas são telas de navegação, não categorias de cadastro. Mantenha os grupos juntos na ordem desejada. Para renomear uma categoria, prefira alterar apenas `name`. Antes de excluir uma categoria, mova todos os seus programas para outra e publique o catálogo correspondente; uma referência a categoria inexistente bloqueia a carga.

Ícones disponíveis: `box`, `globe`, `archive`, `monitor`, `cpu`, `drive`, `wrench`, `shield`, `play`, `network`, `recover`, `search`, `file`, `bolt`, `star`, `home`, `terminal`. Um nome desconhecido usa o ícone padrão.

## 7. Como substituir o JSON pelo navegador no GitHub

1. Guarde o JSON exportado. Se o navegador adicionou um número ao nome, renomeie sua cópia para **programs.json**.
2. Entre no seu repositório e abra a pasta **data**.
3. Clique em **Add file → Upload files** dentro dessa pasta.
4. Envie `programs.json`. Ele deve substituir o arquivo de mesmo nome em `data`, e não criar um catálogo na raiz.
5. Escreva uma mensagem clara, como “Adicionar ferramenta de rede”, e clique em **Commit changes** na branch usada pelo Pages.
6. Aguarde a publicação e recarregue o portal. Se necessário, use `Ctrl+F5` para recarregar os recursos.
7. Confira se o novo item aparece na busca e se o link abre a origem correta.

Uma alternativa é abrir `data/programs.json`, clicar no lápis e colar o conteúdo completo do arquivo exportado. Faça uma cópia antes. Nunca cole apenas um item no lugar da lista inteira.

## 8. Como distribuir arquivos por GitHub Releases

Use Releases para arquivos próprios ou cuja licença permite redistribuição. Não coloque instaladores grandes no repositório do site. Não use Git LFS como distribuição presumida para Pages.

1. Abra seu repositório e vá a **Releases → Draft a new release**.
2. Crie uma tag, por exemplo `v1.0.0`, e dê um título descritivo.
3. Anexe o arquivo permitido à área de arquivos da Release.
4. Revise licença, nome e versão; publique a Release.
5. Na Release publicada, clique com o botão direito no arquivo em **Assets** e escolha copiar endereço do link.
6. No editor do portal, escolha armazenamento **GitHub Releases**, tipo **Baixar**, e cole esse link na URL principal. Use um link de arquivo específico, não o endereço da página da Release.
7. Informe fonte, página oficial, versão fixa e SHA-256 quando já calculado e confirmado.
8. Exporte e publique o catálogo.

O formato usual é `https://github.com/USUARIO/REPOSITORIO/releases/download/TAG/ARQUIVO`, mas **copie o endereço real**; não adivinhe. Repositórios/arquivos privados podem exigir login e não servem ao fluxo público sem login. Quando mudar a versão, revise URL, data e hash juntos. O portal não cria Releases automaticamente.

Referência: [gerenciar Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

### Arquivos locais pequenos

Coloque documentos ou ferramentas próprias permitidas em `downloads/`. Use nomes simples sem espaços e o caminho relativo, como `downloads/meu-documento.txt`. Publique o arquivo e o catálogo juntos. Evite `../`, caminhos iniciados com `/`, protocolos ou arquivos grandes. O checklist incluído é um documento próprio livre para adaptar. Sua referência de página oficial aponta à documentação de hospedagem; substitua pela página pública do seu projeto quando ela existir.

## 9. Como alterar nome, cores e logotipo

Abra `data/site.json` no GitHub e use o lápis. Altere:

- `name`: nome exibido no cabeçalho, títulos e rodapé.
- `logo`: caminho de um SVG local em assets, por exemplo `assets/minha-marca.svg`. Primeiro publique o arquivo. SVG de marca deve vir de uma fonte confiável.
- `colors.accent`: cor dos links no tema escuro, em hexadecimal com seis dígitos.
- `colors.accentLight`: cor dos links no tema claro.
- `colors.green`: cor do botão de download direto e do destaque da navegação. Use uma cor com contraste adequado para texto branco.

Preserve aspas e vírgulas. As cores padrão foram escolhidas para os dois temas. Mudanças grandes de layout devem ser feitas com assistência de IA; não é necessário editar CSS para mudar a identidade básica. A tipografia usa fontes do sistema e os ícones são SVG locais, sem CDN ou fontes externas.

## 10. Como atualizar usando Codex

1. Faça uma cópia do projeto ou baixe a versão atual pelo GitHub (**Code → Download ZIP**).
2. Abra a pasta com Codex e forneça `MANUTENCAO.md` junto do pedido.
3. Descreva a mudança concreta. Exemplo: “Adicionar um filtro de distribuição; preservar os IDs, os arquivos JSON e o funcionamento em subdiretório”.
4. Peça a verificação dos fluxos afetados e revise a prévia.
5. Publique os arquivos alterados, sem substituir seu catálogo pessoal por dados de demonstração.

Não entregue senhas, tokens ou dados de clientes. Esta aplicação não precisa dessas informações. Confira `TESTES.md` para saber o que foi executado na versão entregue.

## 11. Como restaurar uma versão anterior

Para restaurar um catálogo sem terminal:

1. No GitHub, abra `data/programs.json` e clique em **History**.
2. Abra o commit anterior à alteração indesejada e visualize o arquivo daquela versão (**View file** ou **Browse files**, conforme a tela).
3. Abra a versão **Raw**, copie todo o conteúdo e volte ao arquivo atual na branch publicada.
4. Clique no lápis, substitua o conteúdo pela cópia anterior e faça **Commit changes**, com uma mensagem como “Restaurar catálogo anterior”.
5. Aguarde a publicação e confirme os itens.

Isso cria uma nova alteração que recupera o conteúdo antigo, sem reescrever o histórico. Para restaurar vários arquivos, peça ajuda a Codex informando o commit desejado. Guarde catálogos exportados como cópias de segurança.

## 12. Quais arquivos editar

| Arquivo | Uso recomendado |
| --- | --- |
| `data/programs.json` | Gere pelo editor; evite editar manualmente. |
| `data/categories.json` | Configuração simples de categorias; pode editar com cuidado ou pedir ajuda. |
| `data/site.json` | Nome, cores e logo. |
| `downloads/` | Apenas arquivos próprios pequenos ou redistribuíveis. |
| `assets/logo.svg` | Substitua pela sua marca confiável. |
| `index.html`, `admin.html`, `sobre.html` | Estrutura da aplicação; altere com assistência de IA. |
| `assets/*.js`, `assets/styles.css` | Lógica, validação e estilos; altere com assistência de IA. |
| `servidor-local.cjs`, `iniciar-local.cmd` | Prévia opcional; não precisa alterar. |
| `.nojekyll` | Mantenha vazio e presente. |

## Limitações e decisões

- Não há backend, login administrativo, proxy, telemetria ou sincronização de preferências entre computadores. `admin.html` é um editor local, não uma proteção de segurança.
- O catálogo demonstra links oficiais conferidos em 11/10/2026. Fabricantes podem mudar páginas, compatibilidade, licenças e URLs posteriormente. Não existe verificação automática contínua.
- As entradas de fabricantes usam páginas oficiais, sem afirmar uma versão fixa nem um download direto estável. A categoria Drivers permanece disponível para você cadastrar páginas de fabricantes que atende.
- Sistemas e arquiteturas são informações do cadastro, não da máquina. Campos vazios indicam consulta ao fabricante ou ausência de aplicação.
- Favoritos, rascunhos e preferências dependem do armazenamento permitido pelo navegador. Modo privado, limpeza de dados e bloqueios podem removê-los.
- O catálogo precisa de HTTP/HTTPS; a abertura direta por arquivo local não é suportada. Os destinos externos exigem internet.
- A versão foi preparada para publicação; a publicação no seu GitHub depende da sua conta e repositório e não foi realizada nesta entrega.
