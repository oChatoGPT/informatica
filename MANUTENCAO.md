# Manutenção para agentes de IA

## Arquitetura

Aplicação estática sem dependências externas e sem build. Publique esta pasta como raiz no GitHub Pages; mantenha `.nojekyll`. Todos os recursos e JSON são relativos para suportar `/central-tecnica/` e a raiz de domínio. O Node.js só é usado no servidor opcional de prévia, não na aplicação pública.

- `index.html`: estrutura pública e diálogo de detalhes.
- `assets/styles.css`: tokens dos temas e layout responsivo (760/1180/1550 px).
- `assets/theme.js`: aplica o tema persistido antes da renderização.
- `assets/shared.js`: DOM seguro, SVG locais, URLs, validação de catálogo/categorias, armazenamento, tema, filtros puros e carregamento JSON.
- `assets/app.js`: catálogo, navegação por configuração, pesquisa, filtros, ordenação, favoritos, recentes, cópia e detalhes.
- `admin.html` + `assets/admin.js`: formulário, prévia, CRUD local, importação, exportação e confirmações. Nunca usa credenciais nem grava no GitHub.
- `sobre.html`: informações, privacidade, atalhos e limpeza de preferências.
- `data/programs.json`, `data/categories.json`, `data/site.json`: dados e configurações.
- `downloads/`: arquivos próprios pequenos e permitidos.
- `servidor-local.cjs`, `iniciar-local.cmd`: prévia em loopback na porta 4173.

## Contrato dos dados

Catálogo é um array. Obrigatórios: `id`, `name`, `description`, `category`, `source`, `url`, `officialUrl`, `tags` (array), `os` (array), `architectures` (array), `downloadType` (`page|direct`), `storage` (`external|release|local`). IDs únicos: `[a-z0-9-]+`. `category` deve existir e não ter `view`.

Opcionais: `details`, `distribution`, `version`, `verifiedAt`, `addedAt` (datas reais YYYY-MM-DD), `icon` (nome do ícone local), `essential`, `demo` (booleanos), `sha256` (64 dígitos hexadecimais), `alternatives` (array de `{label,url,downloadType}`). Arrays vazios de sistemas/arquiteturas são válidos; a interface apresenta orientação. Campos opcionais vazios não aparecem nos detalhes. O editor preserva propriedades extras de itens existentes por cópia do objeto original.

Categorias: `{id,name,icon,group,view?}`. `group` organiza workspace/categories/personal. Telas especiais usam `view: home|all|essential|favorites`. Sem `view` = categoria de cadastro. Todos os nomes de categorias e a navegação são carregados do JSON.

Site: `{name,logo,colors:{accent,accentLight,green}}`. Logo é SVG em assets sem travessia de diretórios; cores aceitam hexadecimal de seis dígitos. Tokens separados para claro/escuro preservam contraste.

## Segurança e persistência

Use `textContent`, `createElement` e SVG construído com atributos fixos. Não introduza `innerHTML` com dados do catálogo. Links externos aceitam somente HTTPS sem credenciais e recebem `noopener noreferrer`; downloads externos não usam o atributo download. Links locais são limitados a `downloads/`, sem `..`. Não executar instaladores, não criar proxy, não detectar hardware, não coletar dados.

Chaves localStorage: `ct-theme` (string simples), `ct-view`, `ct-favorites`, `ct-recent`, `ct-admin-draft` (JSON). Favoritos referenciam IDs estáveis. Recentes: apenas seis IDs abertos pelo portal. O rascunho contém o catálogo aplicado com flag pendente; é apagado após solicitação de exportação. Formulário não aplicado exige confirmação ao trocar item e bloqueia exportação. `beforeunload` solicita aviso, sujeito às regras do navegador. LocalStorage pode falhar sem bloquear a interface pública.

Downloads são ações explícitas. Page/direct descreve o comportamento do destino; storage identifica a origem. Verifique links antes de marcar a data. Não invente versões, hashes, direitos de redistribuição ou compatibilidade. O catálogo demonstrativo usa páginas oficiais mais um documento próprio. A página de referência do documento deve ser substituída pela página do proprietário após publicação.

## Evolução e verificação

Não substituir o catálogo pessoal por demonstrações. Preservar IDs. Manter buildless e sem segredos. Testar os fluxos alterados em HTTP e subdiretório; verificar busca sem acentos, filtros combinados, estado vazio, favoritos após recarga, temas, cards/lista, diálogos, teclado e 390 px. Para alterações no editor: CRUD, IDs duplicados, URLs perigosas, datas, importação, exportação e mudanças não exportadas. Consulte `TESTES.md` para evidências desta entrega e limites da cobertura. Não afirmar testes que não rodaram.
