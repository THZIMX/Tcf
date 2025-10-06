# 🎓 TCF - Apresentação Interativa do Trabalho de Conclusão Final

<div align="center">
  <img src="public/logo.png" height="120" alt="TCF Logo">
  
  <h1>TCF — Apresentação Interativa do Trabalho de Conclusão Final</h1>

  <p>
    <img alt="License - Proprietary" src="https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg">
    <img alt="React" src="https://img.shields.io/badge/React-v19-blue">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-v6-blueviolet">
    <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-✓-cyan">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Ready-3178C6">
    <img alt="Status" src="https://img.shields.io/badge/Status-Presentation_Ready-success">
  </p>

  <p><strong>Site interativo e responsivo desenvolvido para apresentação do TCF escolar com visualizações dinâmicas, gráficos interativos e navegação fluída.</strong></p>

  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-começando">Instalação</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-apresentação">Apresentação</a>
</div>

---

## 📖 Sobre o Projeto

**TCF Presentation** é uma aplicação web moderna desenvolvida em **React 19 + Vite** para servir como material de apoio visual durante a apresentação do Trabalho de Conclusão Final. A plataforma transforma uma apresentação tradicional em uma experiência interativa, permitindo demonstrar dados, metodologia e resultados de forma dinâmica e engajadora.

### 🎯 Objetivos
- ✅ **Apresentação Profissional**: Interface moderna e responsiva para projeção
- ✅ **Interatividade**: Gráficos dinâmicos e navegação fluída
- ✅ **Organização**: Estrutura clara para todos os tópicos do TCF
- ✅ **Performance**: Carregamento rápido e animações otimizadas

---

## ✨ Funcionalidades

### 🎨 Interface & UX
- **Design Responsivo** - Otimizado para projeção, desktop e mobile
- **Navegação Intuitiva** - Menu lateral e roteamento suave entre seções
- **Animações Fluídas** - Transições com Framer Motion
- **Tema Acessível** - Cores contrastantes e componentes acessíveis

### 📊 Visualizações
- **Gráficos Interativos** - Implementados com Recharts
- **Dados Dinâmicos** - Visualizações atualizáveis em tempo real
- **Seções Organizadas** - Estrutura lógica para apresentação

### ⚡ Performance
- **Build Otimizado** - Vite com code-splitting
- **Carregamento Rápido** - Lazy loading de componentes
- **SEO Básico** - Meta tags e estrutura semântica

---

## 🛠 Tecnologias

### Frontend Principal
- **React 19** - Biblioteca UI com hooks modernos
- **Vite 6** - Build tool e dev server ultrarrápido
- **React Router** - Navegação SPA

### Estilização & UI
- **TailwindCSS** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e sem estilos
- **Framer Motion** - Animações e transições
- **clsx** - Composição condicional de classes

### Dados & Formulários
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas TypeScript
- **Recharts** - Biblioteca de gráficos

### Ferramentas
- **ESLint** - Linting e padrões de código
- **PNPM** - Gerenciador de pacotes rápido

---

## 🚀 Começando

### Pré-requisitos
- Node.js 18+ 
- PNPM, NPM ou Yarn

### 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/THZIMX/Tcf.git

# Entre no diretório
cd Tcf

# Instale as dependências
pnpm install
# ou
npm install
# ou
yarn install
```

### 🎮 Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev

# Abra http://localhost:5173 no navegador
```

### 🏗 Build Produção

```bash
# Build para produção
pnpm build

# Preview do build
pnpm preview
```

### 📜 Scripts Disponíveis

```bash
pnpm dev          # Servidor desenvolvimento
pnpm build        # Build produção
pnpm preview      # Preview do build
pnpm lint         # Análise de código (ESLint)
```

---

## 📂 Estrutura do Projeto

```
Tcf/
├── public/
│   ├── favicon.ico
│   └── images/
│       └── julio.jpg          # Imagens públicas
├── src/
│   ├── components/
│   │   ├── pages/             # Páginas principais
│   │   │   ├── HomePage.jsx      # Página inicial
│   │   │   ├── AboutPage.jsx     # Sobre o projeto
│   │   │   ├── CausesPage.jsx    # Causas do problema
│   │   │   ├── DataPage.jsx      # Dados e gráficos
│   │   │   ├── NewsPage.jsx      # Notícias relevantes
│   │   │   ├── QuizPage.jsx      # Quiz interativo
│   │   │   ├── SolutionsPage.jsx # Soluções propostas
│   │   │   └── TeamPage.jsx      # Equipe envolvida
│   │   ├── ui/                # Componentes reutilizáveis
│   │   │   ├── chart.jsx         # Componentes de gráfico
│   │   │   ├── button.jsx        # Botões personalizados
│   │   │   ├── card.jsx          # Cards de conteúdo
│   │   │   └── ... (+40 componentes)
│   │   ├── Layout.jsx         # Layout principal
│   │   ├── Navigation.jsx     # Navegação
│   │   └── Footer.jsx         # Rodapé
│   ├── hooks/
│   │   └── use-mobile.js      # Hook para detecção mobile
│   ├── lib/
│   │   └── utils.js           # Utilitários e helpers
│   ├── assets/
│   │   └── react.svg          # Assets da aplicação
│   ├── App.jsx               # Componente raiz
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎤 Guia de Apresentação

### ⏱ Roteiro Recomendado (8-12 minutos)

| Tempo | Seção | Descrição |
|-------|-------|-----------|
| **0:30** | **Abertura** | Apresentação pessoal e objetivo do trabalho |
| **1:00** | **Problema** | Contexto e motivação do estudo |
| **1:30** | **Metodologia** | Abordagem e métodos utilizados |
| **3:00** | **Demonstração** | Navegação pelo site - destaque para gráficos |
| **1:30** | **Resultados** | Principais achados e conclusões |
| **0:30** | **Futuro** | Limitações e trabalhos futuros |
| **1:00** | **Encerramento** | Agradecimentos e perguntas |

### 💡 Dicas de Apresentação

1. **Teste Prévio**: Verifique resolução do projetor e zoom do navegador (100%)
2. **Backup**: Tenha build local (`pnpm build && npx serve dist`)
3. **Navegação**: Pratique transições entre seções principais
4. **Foco**: Destaque 2-3 gráficos mais relevantes
5. **Interação**: Use o quiz para engajar a banca

---

## 📦 Deploy

### 🚀 Opções Recomendadas

**Vercel (Recomendado)**
```bash
# Instale a CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

**Netlify**
- Build Command: `pnpm build`
- Publish Directory: `dist`

**GitHub Pages**
- Ajuste `base` no `vite.config.js`
- Build e deploy via GitHub Actions

---

## ✅ Checklist Pré-Apresentação

- [ ] `pnpm dev` funcionando corretamente
- [ ] Todas as imagens carregando
- [ ] Gráficos da DataPage com dados atualizados
- [ ] Animações suaves e tempos adequados
- [ ] Build de produção gerado (`dist/`)
- [ ] Backup em pendrive pronto
- [ ] PDF do resumo para banca
- [ ] Teste de projeção realizado

---

## 📄 Licença

**Todos os Direitos Reservados** — Copyright © 2025 Mateus (THZIMX)

Este projeto é de propriedade exclusiva do autor. É estritamente proibido, sem autorização prévia e por escrito:

- Copiar, modificar ou distribuir o código
- Usar em projetos pessoais ou comerciais
- Realizar engenharia reversa
- Republicar ou redistribuir de qualquer forma

Uso não autorizado poderá resultar em medidas legais.

---

## 📞 Contato

**Autor**: Mateus (THZIMX)  
**Email**: [mateushenrique6968@gmail.com](mailto:mateushenrique6968@gmail.com)  
**GitHub**: [https://github.com/THZIMX](https://github.com/THZIMX)  
**Portfólio**: [https://thzimx.vercel.app](https://thzimx.vercel.app)

---

## 🙏 Agradecimentos

- Professores e orientadores pelo suporte técnico
- Colegas e família pelo apoio durante o desenvolvimento
- Comunidade open-source pelas incríveis bibliotecas utilizadas
- Banca examinadora pela disponibilidade

---

<div align="center">

### 🎉 Boa sorte na apresentação!

*Desenvolvido com ❤️ por [THZIMX](https://thzimx.vercel.app)*

</div>
