export interface CVData {
  personalInfo: {
    name: string;
    email: string;
    location: string;
    linkedin: string;
    instagram: string;
    github: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    duration?: string;
    description?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    objective?: string;
    link?: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
  additionalInfo: string[];
}

export const cvData: CVData = {
  personalInfo: {
    name: "Lucas Somokovitz",
    email: "lucassomokovitz.narciso@gmail.com",
    location: "Blumenau, Santa Catarina, Brasil",
    linkedin: "https://www.linkedin.com/in/lucas-somokovitz/",
    instagram: "https://www.instagram.com/lucas_narciso_ia/",
    github: "https://github.com/LucasSomokovitz/"
  },
  summary: "Profissional com mais de 9 anos de experiência em construção civil, especializado em orçamentação de obras, gestão de projetos e controle de custos. Experiência sólida em apontamento de obras, orçamentação de construções e projetos elétricos com REVIT. Desenvolvedor de sites corporativos com conhecimento em tecnologias web (HTML, CSS, JavaScript) e ferramentas de IA para automação e desenvolvimento.",
  experience: [
    {
      title: "Projetista e Orçamentista",
      company: "Narciso CCA Patologia e Construções LTDA",
      period: "Fevereiro 2024 - Presente",
      location: "Blumenau, Santa Catarina, Brasil",
      duration: "4 anos",
      description: "Desenvolvimento de projetos de construção civil, orçamentação detalhada de obras, análise de viabilidade econômica e controle de custos. Especialização em patologia das construções e reabilitação de estruturas."
    },
    {
      title: "Auxiliar de Projetos Elétricos REVIT",
      company: "Ibeng Engenharia Elétrica",
      period: "Julho 2023 - Presente",
      location: "Blumenau, Santa Catarina, Brasil",
      duration: "1 ano",
      description: "Desenvolvimento de projetos elétricos utilizando REVIT (Autodesk), modelagem 3D de instalações elétricas, coordenação com equipes de projeto e aplicação de normas técnicas da área elétrica."
    },
    {
      title: "Orçamentista de Construção",
      company: "CCA Patologia e Construções",
      period: "Até Janeiro 2024",
      location: "Blumenau, Santa Catarina, Brasil",
      duration: "2 anos",
      description: "Orçamentação de projetos de construção civil, análise de custos de materiais e mão de obra, elaboração de cronogramas físicos-financeiros e acompanhamento de obras."
    },
    {
      title: "Apontador de Obras e Orçamentista de Obras",
      company: "MC Construções LTDA",
      period: "Fevereiro 2013 - Janeiro 2024",
      location: "Blumenau, Santa Catarina, Brasil",
      duration: "2 anos",
      description: "Gestão completa de obras residenciais e comerciais, apontamento diário de atividades, controle de produtividade da mão de obra, orçamentação de projetos, gestão de equipes e controle de qualidade. Experiência sólida em todas as etapas da construção civil."
    }
  ],
  skills: [
    {
      category: "Orçamentação e Construção Civil",
      items: [
        "Orçamentação de obras e projetos",
        "Controle de custos e cronogramas",
        "Apontamento de obras",
        "Gestão de projetos de construção",
        "Análise de viabilidade econômica"
      ]
    },
    {
      category: "Softwares Específicos",
      items: [
        "REVIT (Autodesk) - Modelagem 3D e projetos elétricos",
        "AutoCAD 2D e 3D (Autodesk)",
        "Softwares de orçamentação e projetos",
        "Microsoft Office (Excel avançado)",
        "Git e GitHub (controle de versão)"
      ]
    },
    {
      category: "Tecnologias Complementares",
      items: [
        "HTML, CSS, JavaScript (aplicados a projetos)",
        "Tailwind CSS",
        "Conhecimentos em desenvolvimento web"
      ]
    },
    {
      category: "Inteligência Artificial e Automação",
      items: [
        "Ferramentas de IA para desenvolvimento",
        "Automação com n8n (em curso)",
        "Prompt Engineering para Desenvolvedores",
        "Fundamentos da IA para Programadores"
      ]
    }
  ],
  certifications: [
    "Fundamentos de GIT",
    "Prompt Engineering para Desenvolvedores",
    "Fundamentos da IA para Programadores",
    "Fundamentos em HTML/CSS"
  ],
  projects: [
    {
      name: "FW Empreendimentos - Site Corporativo",
      description: "Desenvolvimento de site institucional para empresa de empreendimentos",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      objective: "Site profissional para apresentação de serviços e projetos da empresa",
      link: "https://fwempreendimentos.com.br/"
    },
    {
      name: "Premoldados 3L - Site Corporativo",
      description: "Desenvolvimento de site institucional para empresa de premoldados",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      objective: "Site profissional para apresentação de produtos e serviços de premoldados",
      link: "https://premoldados3l.com.br/"
    },
    {
      name: "Projetos de Construção Civil",
      description: "Orçamentação de múltiplos projetos de construção",
      technologies: ["REVIT", "Excel", "Softwares de orçamentação"],
      objective: "Gestão de obras residenciais e comerciais, projetos elétricos utilizando REVIT, controle de custos e cronogramas de obras"
    },
    {
      name: "Projeto Starbucks (Tecnológico)",
      description: "Projeto de desenvolvimento web utilizando tecnologias front-end",
      technologies: ["HTML", "CSS", "JavaScript"],
      objective: "Aplicação de conhecimentos tecnológicos em projetos"
    }
  ],
  languages: [
    {
      language: "Português",
      level: "Nativo"
    }
  ],
  additionalInfo: [
    "Experiência sólida em construção civil (9+ anos)",
    "Especialização em orçamentação de obras e projetos",
    "Conhecimento em projetos elétricos com REVIT",
    "Desenvolvedor de sites corporativos (FW Empreendimentos, Premoldados 3L)",
    "Conhecimentos em IA e automação (n8n em curso)",
    "Experiência em gestão de obras e controle de custos",
    "Conhecimentos tecnológicos aplicados à construção civil",
    "Foco em orçamentação e gestão de projetos de construção"
  ]
};
