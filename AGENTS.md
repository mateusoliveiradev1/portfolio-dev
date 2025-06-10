AGENTS.md – Replicação Completa do Site Zattini
🧭 Objetivo
Este documento fornece diretrizes detalhadas para replicar totalmente o site da Zattini (https://www.zattini.com.br/), mantendo fidelidade ao design, experiência do usuário, estrutura e funcionalidades de e-commerce.

🗂️ Estrutura Geral
1. Header Fixo (Topo)
Logo à esquerda

Barra de pesquisa centralizada com ícone de lupa

Ícones à direita:

Minha Conta

Meus Favoritos

Sacola/Carrinho

Mini-header superior com:

Central de Atendimento

Seja Primeira Compra

Entrar/Cadastrar

Seletor de Estado/Cidade

2. Menu Principal (Mega Menu)
Barra com categorias: Feminino, Masculino, Infantil, Calçados, Acessórios etc.

Menu expansível ao passar o mouse (hover)

Subcategorias divididas em colunas

Cada coluna pode conter imagem ou texto com link

Imagens promocionais no menu

3. Homepage
Banner principal (carrossel rotativo com autoplay e setas de navegação)

Seções:

Promoções em destaque

Produtos por categoria

Carrossel de Marcas

“Compre por Estilo”

Vitrine com produtos (cards)

Rodapé com botão “voltar ao topo”

4. Página de Categoria
Título da categoria

Filtros laterais:

Preço, marca, cor, tamanho, desconto etc.

Ordenação (relevância, menor preço, maior preço)

Grid de produtos (cards com imagem, nome, preço e botão)

5. Página de Produto
Galeria de imagens (zoom e thumbnails)

Nome do produto, preço, variações (cor/tamanho)

Botão "Adicionar à sacola"

Avaliações e descrição

Produtos recomendados

6. Página de Carrinho
Lista de itens com opções para remover/alterar

Total, frete, cupons

Botão para "Fechar Pedido"

7. Footer
Links úteis (ajuda, política, devoluções)

Newsletter com e-mail

Redes sociais

App download (Android/iOS)

🎨 Design System
Cores Principais
Elemento	Hex
Fundo Branco	#FFFFFF
Texto Escuro	#333333
Verde Primário	#00A859
Preto	#000000
Cinza Claro	#F2F2F2

Tipografia
Fonte: Arial, Helvetica, sans-serif

Títulos em negrito

Corpo regular com tamanho entre 14px e 16px

Links com hover e sublinhado

🧱 Componentes Essenciais
Componente	Funções
Header	Responsivo, fixo, com pesquisa
MegaMenu	Hover + dropdown com imagens e links
Carousel	Imagens rotativas automáticas
ProductCard	Imagem, nome, preço, desconto
FiltersSidebar	Categorias, tamanhos, marcas, etc.
ProductPage	Galeria + variações + botão de compra
Cart	Lista, editar, resumo de pedido
Footer	Links, redes, newsletter, app

📱 Responsividade
Mobile-first approach

Menu vira hambúrguer

Carrosséis com scroll horizontal

Grid de produtos com 1 ou 2 colunas

Footer empilhado

💡 Funcionalidades Dinâmicas
Recurso	Descrição
Autocomplete Pesquisa	Sugestões de produtos e categorias enquanto digita
Filtros Dinâmicos	Aplicação de filtros sem recarregar página
Zoom na Imagem	Hover ou clique para zoom em produto
Avaliações	Estrelas, comentários, contagem
Cookies e Consentimento	Popup de cookies com botão de aceitar
Carregamento Lazy	Imagens em lazy-load

🛠️ Tech Stack Recomendada
Frontend

React.js + Vite ou Next.js

Tailwind CSS ou SCSS

Framer Motion (animações)

Swiper.js (carrosséis)

Headless UI (modais/menus)

Backend (mock ou real)

JSON Server (mock) ou Firebase

Node.js + Express (opcional)

Integração com API REST de produtos e categorias

📁 Estrutura de Pastas Sugerida
bash
Copiar
Editar
/src
  /assets
    /images
    /icons
  /components
    /Header
    /MegaMenu
    /Carousel
    /ProductCard
    /FilterSidebar
    /Footer
  /pages
    /Home
    /Product
    /Category
    /Cart
  /styles
    tailwind.config.js
    globals.css
  /services
    api.js
🚦 SEO e Performance
Meta tags em todas as páginas

URLs amigáveis com slugs

Sitemap.xml e robots.txt

Imagens otimizadas (WebP)

Schema.org para produtos e breadcrumbs

🔐 Acessibilidade
Uso de aria-*, alt em imagens, roles semânticos

Teclado navegável (tab index)

Contraste adequado para legibilidade

📌 Extras Recomendados
Google Analytics & Tag Manager

Integração com Gateway de Pagamento (Mock)

Páginas de erro (404, 500)

Política de Cookies e LGPD
