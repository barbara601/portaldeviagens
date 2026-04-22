((((Portal de Viagens))))

Aplicação desenvolvida com Next.js que simula um portal de viagens, permitindo explorar destinos turísticos e visualizar detalhes de cada local.

=> Funcionalidades
Página inicial com apresentação do portal
Carrossel automático com destinos em destaque
Listagem de destinos turísticos
Navegação entre páginas utilizando rotas do Next.js
Página dinâmica com detalhes de cada destino

=> Estrutura do Projeto
/app
  /components → componentes reutilizáveis (Header, Footer, Card, Grid, Carousel, Title)
  /destinos
    /[id] → rota dinâmica para detalhes do destino
  page.tsx → página inicial
  layout.tsx → layout global (Header + Footer)

/lib → dados dos destinos
/types → tipagens TypeScript
/styles → estilos globais

=> Como executar o projeto
Clone o repositório e instale as dependências:
npm install
Execute o projeti em ambiente de desenvolvimento:
npm run dev
Acesse no navegador:
https://localhost:3000

=> Rotas de aplicação 
/ - Página inicial
/destinos - Lista de destinos
/destinos/[id] - Página de detalhes de cada destino

=> Tecnologias utilizadas
Next.js
React
TypeScript
CSS Modules