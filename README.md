# 💻 Portfolio Matheus - Desenvolvedor Full Stack

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **< Matheus /> | Inovação em Código** 🚀

Um portfólio moderno e interativo desenvolvido com as mais recentes tecnologias web, apresentando animações suaves, design responsivo e uma experiência de usuário excepcional.

## ✨ Características

### 🎨 Design & UX
- **Interface Moderna**: Design escuro com gradientes e efeitos glassmorphism
- **Animações Fluidas**: Powered by Framer Motion para transições suaves
- **Responsivo**: Adaptado para todos os dispositivos e tamanhos de tela
- **Navegação Intuitiva**: Scroll suave e indicadores de seção ativa

### 🚀 Funcionalidades
- **Seções Interativas**: Home, Sobre, Habilidades, Projetos e Contato
- **Background Animado**: Gradientes dinâmicos em movimento
- **Skills com Progresso**: Barras animadas mostrando nível de proficiência
- **Cards de Projetos**: Showcase de trabalhos com tecnologias utilizadas
- **Contatos Diretos**: Links para email, LinkedIn, GitHub e WhatsApp

### 🛠️ Tecnologias Utilizadas

#### Frontend Core
- **Next.js 15.2.4** - Framework React de produção
- **React 19** - Biblioteca de interface de usuário
- **TypeScript** - Superset tipado do JavaScript

#### Styling & UI
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e consistentes
- **React Icons** - Biblioteca completa de ícones

#### Animações & Interações
- **Framer Motion** - Biblioteca de animações para React
- **Class Variance Authority** - Gerenciamento de variantes de componentes

## 🏗️ Estrutura do Projeto

```
meu-portifolio/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx            # Página principal do portfólio
├── components/
│   ├── ui/                 # Componentes de UI reutilizáveis
│   └── theme-provider.tsx  # Provedor de tema
├── lib/
│   └── utils.ts           # Utilitários e helpers
├── public/
│   └── foto02.png         # Foto de perfil
├── hooks/                 # Custom hooks
└── styles/               # Estilos adicionais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Matheuscloud21/meu-portifolio.git
cd meu-portifolio
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute o projeto**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Linting
pnpm lint
```

## 🎯 Seções do Portfólio

### 🏠 Home
- Apresentação com animação de texto letra por letra
- Call-to-actions para projetos e contato
- Background animado com gradientes dinâmicos

### 👨‍💻 Sobre
- Foto de perfil com efeitos hover
- Descrição profissional e pessoal
- Tags de características pessoais

### 🛠️ Habilidades
- Visualização de skills com barras de progresso animadas
- Tecnologias: Next.js, React, TypeScript, JavaScript, UI/UX Design
- Ícones representativos para cada tecnologia

### 💼 Projetos
- Cards interativos com hover effects
- Descrição de projetos fictícios (E-commerce, Dashboard, App Mobile)
- Tags de tecnologias utilizadas
- Links para código e demo

### 📞 Contato
- Links diretos para diferentes canais de comunicação
- Email: matheuscloud21@gmail.com
- LinkedIn: /in/matheus-oliveira-260727243/
- GitHub: /Matheuscloud21
- WhatsApp: +55 61 98189-3088

## 🎨 Personalização

### Alterando Informações Pessoais
1. **Foto de perfil**: Substitua `/public/foto02.png`
2. **Links de contato**: Edite as URLs em [`app/page.tsx`](app/page.tsx:425-465)
3. **Título da página**: Modifique em [`app/layout.tsx`](app/layout.tsx)

### Adicionando Projetos
```typescript
const projects = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/caminho-para-imagem.jpg",
  },
  // ... mais projetos
]
```

### Modificando Skills
```typescript
const skills = [
  { 
    name: "Sua Skill", 
    icon: <SeuIcone className="w-6 h-6" />, 
    level: 85 
  },
  // ... mais skills
]
```

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)  
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
pnpm build

# Deploy a pasta 'out' para Netlify
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- 🐛 Reportar bugs
- 💡 Sugerir melhorias  
- 🔧 Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Matheus Oliveira** - Desenvolvedor Full Stack

- 📧 **Email**: [matheuscloud21@gmail.com](mailto:matheuscloud21@gmail.com)
- 💼 **LinkedIn**: [matheus-oliveira-260727243](https://www.linkedin.com/in/matheus-oliveira-260727243/)
- 🐱 **GitHub**: [Matheuscloud21](https://github.com/Matheuscloud21)
- 📱 **WhatsApp**: [+55 61 98189-3088](https://wa.me/5561981893088)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐

**Desenvolvido com ❤️ e muito ☕ por [Matheus Oliveira](https://github.com/Matheuscloud21)**