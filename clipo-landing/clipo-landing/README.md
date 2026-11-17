# Clipo — Landing Page de Vendas

Projeto React + TypeScript + Vite da landing page do Clipo. Todo o conteúdo, os estilos e os destinos dos botões ficam em arquivos separados, para você continuar editando com calma (inclusive no Google AI Studio).

## Rodar no seu computador

Requisito: Node.js 18 ou superior.

```bash
npm install      # instala as dependências (react, vite, typescript...)
npm run dev      # abre em http://localhost:3000
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa o build
```

A pasta `node_modules` não vai no ZIP (ela é gerada pelo `npm install` e pesa centenas de MB). Todas as dependências estão listadas no `package.json`.

## Onde editar cada coisa

| O que você quer mudar | Arquivo |
| --- | --- |
| Para onde cada botão leva (cadastro, login, contratação) | `src/config.ts` |
| Planos: nome, preço, período e benefícios | `src/data/content.ts` → `PLANS` |
| Textos de dores, funcionalidades, públicos, objeções e FAQ | `src/data/content.ts` |
| Títulos e textos fixos de cada seção | `src/components/sections/*.tsx` |
| Cores, fontes e raios de borda | `src/styles/tokens.css` |
| Estilos por seção | `src/styles/hero.css`, `plans.css`, `faq.css`... |
| Logotipos | `src/assets/` (e `public/favicon.webp`) |
| SEO (título, descrição, Open Graph, FAQ estruturado) | `index.html` |

### Conectar os botões ao seu app

Em `src/config.ts`, preencha `CLIPO_CONFIG.links` e `CLIPO_CONFIG.plans`:

```ts
links: { signup: 'https://app.seudominio.com/cadastro', checkout: 'https://pay.seudominio.com/clipo', ... },
plans: { inicial: 'https://...', criador: 'https://...', equipes: 'https://...' },
```

Campo vazio = o botão rola até a seção de planos. Cada clique dispara o evento `clipo:cta` e envia `clipo_cta_click` para o `window.dataLayer` (Google Tag Manager / GA4), com o botão e o ponto da página em que foi clicado.

### Planos

Os três planos estão com "Plano a definir", "R$ —" e "Benefício a definir". Nenhum valor, limite ou benefício foi inventado. Troque em `PLANS` quando tiver as informações reais. O `id` de cada plano precisa bater com a chave em `CLIPO_CONFIG.plans`.

## Estrutura

```
clipo-landing/
├── index.html              SEO, fontes, dados estruturados
├── package.json            dependências e scripts
├── vite.config.ts · tsconfig.json · metadata.json
├── public/favicon.webp
├── reference/              logos originais e a versão em HTML único (só consulta)
└── src/
    ├── main.tsx            entrada; importa os estilos
    ├── App.tsx             monta as seções
    ├── config.ts           destinos dos CTAs e rastreamento
    ├── data/content.ts     textos, planos e FAQ
    ├── assets/             logotipos (webp com fundo transparente)
    ├── components/
    │   ├── ui/             Icon, CtaLink, Wave, Phone, Arc
    │   └── sections/       Header, Hero, Problem, Solution, Features,
    │                       HowItWorks, Audience, Objections, Plans, Faq,
    │                       FinalCta, Footer, StickyCta
    └── styles/             tokens, base e um CSS por seção
```

## Usar no Google AI Studio

O AI Studio trabalha com apps React + TypeScript + Vite, que é o formato deste projeto. O caminho de importação varia conforme a versão da ferramenta:

1. Se houver opção de importar projeto, ZIP ou repositório do GitHub, use-a com esta pasta.
2. Se não houver, crie um app novo e copie para ele a pasta `src/`, o `index.html`, o `package.json` e a pasta `public/`. A estrutura de componentes e o CSS por seção facilitam pedir ajustes pontuais ("mude só a seção de planos").

Nenhuma parte do projeto depende de backend, chave de API ou serviço externo, exceto as fontes do Google Fonts carregadas pelo `index.html`.

## Observações

- Os mockups de interface, cortes e legendas são ilustrações conceituais, e a página avisa isso. Troque por capturas reais do Clipo quando quiser.
- Os textos de "redes compatíveis" e "cancelamento" no FAQ são genéricos. Ajuste para as regras reais do produto.
- Se editar as perguntas do FAQ, atualize também o JSON-LD em `index.html`.
- Antes de publicar, descomente e preencha o `canonical` e a imagem `og:image` no `index.html`.
