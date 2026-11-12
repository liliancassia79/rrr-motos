# RRR Motos

Site institucional da RRR Motos, desenvolvido para apresentar a oficina, seus serviços, diferenciais, depoimentos de clientes e formas de contato.

O projeto possui uma landing page responsiva, com identidade visual baseada nas cores preta, laranja e dourada da marca.

## Demonstração

Repositório oficial:

https://github.com/liliancassia79/rrr-motos

## Funcionalidades

- Página inicial com apresentação da RRR Motos
- Cabeçalho responsivo
- Navegação por âncoras entre as seções
- Menu mobile
- Seção de serviços:
  - Revisão completa
  - Mecânica especializada
  - Estética e cuidado
- Seção sobre a oficina
- Lista de diferenciais
- Depoimentos de clientes
- Chamada para agendamento
- Links de contato por WhatsApp e telefone
- Rodapé com horário de atendimento
- Layout adaptado para celulares, tablets e desktops

## Tecnologias utilizadas

- React 18
- Vite
- Tailwind CSS 3
- PostCSS
- Autoprefixer
- Lucide React
- JavaScript

## Requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js
- npm
- Git, caso seja necessário clonar o repositório

Recomenda-se utilizar uma versão atual e estável do Node.js.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/liliancassia79/rrr-motos.git
```

Entre na pasta do projeto:

```bash
cd rrr-motos
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite. Normalmente, o endereço será:

```text
http://localhost:5173
```

Para permitir acesso a outros dispositivos na mesma rede, utilize:

```bash
npm run dev -- --host
```

## Build de produção

Para gerar a versão otimizada do site:

```bash
npm run build
```

Os arquivos gerados serão colocados na pasta `dist`.

Para testar localmente a versão de produção:

```bash
npm run preview
```

## Estrutura do projeto

```text
rrr-motos/
├── logo/
│   └── novalogorrr.png
├── src/
│   ├── components/
│   │   ├── TestimonialCard.jsx
│   │   ├── Testimonials.jsx
│   │   └── index.js
│   ├── data/
│   │   └── testimonials.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
└── tailwind.config.cjs
```

## Principais arquivos

### `src/App.jsx`

Contém a estrutura principal da página, incluindo:

- Cabeçalho
- Hero
- Serviços
- Sobre a empresa
- Depoimentos
- Contato
- Rodapé

### `src/components/Testimonials.jsx`

Renderiza a seção de depoimentos e o resumo das avaliações.

### `src/components/TestimonialCard.jsx`

Define o layout individual de cada depoimento.

### `src/data/testimonials.js`

Contém os dados dos depoimentos exibidos na página. Para adicionar ou editar um depoimento, altere esse arquivo.

### `src/styles.css`

Contém as regras globais de estilo, incluindo:

- Fundo padrão
- Tipografia
- Rolagem suave
- Largura máxima do conteúdo
- Ajuste visual da logo

### `logo/novalogorrr.png`

Imagem principal da identidade visual da RRR Motos, utilizada no cabeçalho, na seção sobre e no rodapé.

## Personalização

### Alterar textos

Os textos da página estão definidos em `src/App.jsx`. Edite esse arquivo para alterar títulos, descrições, serviços e informações institucionais.

### Alterar depoimentos

Edite `src/data/testimonials.js` para modificar os nomes, modelos das motos, notas, textos e datas dos depoimentos.

### Alterar cores

As cores principais são definidas pelas classes do Tailwind diretamente nos componentes. As cores mais utilizadas são:

- Preto para fundos
- Laranja para destaques e botões
- Dourado e âmbar para gradientes
- Cinza para textos secundários

### Alterar contatos

Os contatos estão definidos em `src/App.jsx`. Atualmente, os valores utilizados são provisórios:

```text
WhatsApp: (00) 00000-0000
Telefone: (00) 00000-0000
```

Para atualizar o WhatsApp, altere o endereço no formato:

```text
https://wa.me/55DDDNUMERO
```

O número deve conter o código do país, DDD e número, sem espaços, parênteses ou hífens.

## Responsividade

O layout utiliza breakpoints do Tailwind CSS para adaptar a página a diferentes tamanhos de tela:

- Celulares: layout empilhado e menu mobile
- Tablets: grids intermediários
- Desktops: navegação completa e seções em colunas

O menu mobile é controlado pelo estado local do componente principal e permite acessar as seções da página sem recarregamento.

## Imagens e arquivos gerados

A pasta `node_modules` não é versionada porque suas dependências podem ser recriadas com `npm install`.

A pasta `dist` não é versionada porque é gerada pelo comando `npm run build`.

Esses diretórios estão listados no arquivo `.gitignore`.

## Validação

Para verificar se o projeto está compilando corretamente, execute:

```bash
npm run build
```

O projeto deve gerar a pasta `dist` sem erros.

## Observações

- O projeto atualmente é uma página estática no frontend.
- Os arquivos de contato ainda utilizam dados provisórios.
- O botão de WhatsApp só funcionará corretamente depois que o número real for configurado.
- Não existe backend para cadastro de clientes, envio de formulários ou armazenamento de conteúdo.
- A publicação pode ser feita em serviços como Vercel, Netlify ou GitHub Pages, desde que o processo de build seja configurado.

## Licença

Este projeto é de uso privado da RRR Motos. A definição de uma licença pública deve ser feita pelos responsáveis pelo projeto antes de permitir reutilização ou redistribuição do código.
