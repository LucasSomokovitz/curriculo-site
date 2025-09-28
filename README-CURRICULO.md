# Currículo Profissional - Lucas Somokovitz

## 🚀 Site de Currículo Profissional

Este é um site moderno e responsivo para exibir o currículo profissional de Lucas Somokovitz, especialista em Engenharia Civil e Orçamentista de Obras.

## ✨ Características

### 🎨 Design
- **Cores:** Azul e branco (conforme solicitado)
- **Layout:** Limpo e profissional
- **Responsivo:** Adaptável para todos os dispositivos
- **Tipografia:** Clara e legível

### 🛠️ Tecnologias
- **Next.js 15** com TypeScript
- **Tailwind CSS** para estilização
- **Componentes React** modulares
- **Design System** consistente

### 📋 Seções do Currículo
1. **Cabeçalho** - Informações pessoais
2. **Resumo Profissional** - Apresentação destacada
3. **Experiência Profissional** - Histórico cronológico
4. **Habilidades Técnicas** - Competências organizadas
5. **Certificações** - Cursos e certificações
6. **Projetos Relevantes** - Trabalhos importantes
7. **Informações Adicionais** - Dados complementares

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Navegar para o diretório do projeto
cd curriculo-site

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

### Acesso
- **URL Local:** http://localhost:3000
- **Build de Produção:** `npm run build`
- **Preview:** `npm run start`

## 📁 Estrutura do Projeto

```
curriculo-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal
│   │   └── layout.tsx        # Layout global
│   ├── components/           # Componentes React
│   │   ├── Header.tsx
│   │   ├── Summary.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Projects.tsx
│   │   └── AdditionalInfo.tsx
│   └── data/
│       └── cv-data.ts        # Dados do currículo
├── public/                   # Arquivos estáticos
├── package.json
└── tailwind.config.js
```

## 🎨 Paleta de Cores

- **Azul Principal:** #2563eb (blue-600)
- **Azul Claro:** #dbeafe (blue-50) 
- **Azul Médio:** #3b82f6 (blue-500)
- **Branco:** #ffffff
- **Cinza:** #f9fafb (gray-50)

## 📱 Responsividade

- **Mobile First:** Design otimizado para dispositivos móveis
- **Breakpoints:** sm, md, lg, xl
- **Grid System:** Flexível e adaptável
- **Componentes:** Que se ajustam automaticamente

## 🔧 Personalização

### Modificar Dados
Edite o arquivo `src/data/cv-data.ts` para atualizar as informações do currículo.

### Alterar Cores
Modifique as classes Tailwind CSS nos componentes para alterar o esquema de cores.

### Adicionar Seções
Crie novos componentes em `src/components/` e importe na página principal.

## 📄 Informações do Currículo

### Dados Pessoais
- **Nome:** Lucas Somokovitz
- **Email:** lucassomokovitz.narciso@gmail.com
- **Localização:** Blumenau, Santa Catarina, Brasil
- **LinkedIn:** https://www.linkedin.com/in/lucas-somokovitz/

### Experiência Profissional
- **11+ anos** em construção civil
- **Especialização** em orçamentação de obras
- **Conhecimento** em REVIT e projetos elétricos
- **Transição** para desenvolvimento web

### Habilidades Principais
- Orçamentação de obras e projetos
- Gestão de custos e cronogramas
- REVIT (Autodesk)
- Excel avançado
- HTML, CSS, JavaScript
- Git e GitHub

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy da pasta 'out'
```

### Outros Provedores
O projeto pode ser deployado em qualquer provedor que suporte Next.js.

## 📞 Contato

Para dúvidas sobre o projeto ou currículo:
- **Email:** lucassomokovitz.narciso@gmail.com
- **LinkedIn:** [Lucas Somokovitz](https://www.linkedin.com/in/lucas-somokovitz/)

---

*Currículo criado com Next.js, TypeScript e Tailwind CSS*

