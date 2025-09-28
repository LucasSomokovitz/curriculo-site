# Currículo Profissional - Lucas Somokovitz

## 🎯 Sobre o Projeto

Currículo profissional moderno e responsivo desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**. O projeto apresenta uma interface elegante e otimizada para exibição de informações profissionais.

## ✨ Características

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e animações suaves
- **Dados Centralizados**: Informações organizadas em TypeScript
- **Componentes Modulares**: Arquitetura limpa e reutilizável
- **SEO Friendly**: Otimizado para mecanismos de busca

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework React para produção
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utility-first
- **React 18**: Biblioteca para interfaces de usuário
- **Git**: Controle de versão

## 📋 Seções do Currículo

- **Header**: Informações pessoais e contato
- **Resumo Profissional**: Apresentação e experiência
- **Experiência**: Histórico profissional detalhado
- **Habilidades**: Competências técnicas organizadas por categoria
- **Certificações**: Cursos e certificações
- **Projetos**: Portfólio de trabalhos relevantes
- **Informações Adicionais**: Dados complementares

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/LucasSomokovitz/curriculo-profissional.git

# Entre no diretório
cd curriculo-profissional

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Acesso
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
curriculo-site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Summary.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Projects.tsx
│   │   ├── AdditionalInfo.tsx
│   │   └── AnimatedSection.tsx
│   └── data/
│       └── cv-data.ts
├── public/
└── package.json
```

## 🎨 Personalização

### Atualizando Dados
Edite o arquivo `src/data/cv-data.ts` para modificar as informações do currículo:

```typescript
export const cvData: CVData = {
  personalInfo: {
    name: "Seu Nome",
    email: "seu@email.com",
    // ... outros dados
  },
  // ... outras seções
};
```

### Modificando Estilos
Os estilos podem ser personalizados em:
- `src/app/globals.css` - Estilos globais
- Componentes individuais - Classes Tailwind CSS

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Build: `npm run build`
2. Publish directory: `out`
3. Deploy automático via GitHub

## 📱 Responsividade

- **Mobile**: Layout otimizado para smartphones
- **Tablet**: Adaptação para tablets
- **Desktop**: Experiência completa em telas grandes

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Lucas Somokovitz**
- LinkedIn: [lucas-somokovitz](https://www.linkedin.com/in/lucas-somokovitz/)
- Instagram: [@lucas_narciso_ia](https://www.instagram.com/lucas_narciso_ia/)
- GitHub: [LucasSomokovitz](https://github.com/LucasSomokovitz/)

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**