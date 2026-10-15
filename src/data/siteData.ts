import heroImage from '../assets/images/hero_tech_man_1792069434254.jpg';
import aboutTeamImage from '../assets/images/about_tech_team_1792069451788.jpg';
import contactWomanImage from '../assets/images/contact_woman_1792069475301.jpg';
import clinicaMockup from '../assets/images/portfolio_clinica_1792069494294.jpg';
import gestaoproMockup from '../assets/images/portfolio_gestaopro_1792069514044.jpg';
import reservasMockup from '../assets/images/portfolio_reservas_1792069534847.jpg';

export const assets = {
  heroImage,
  aboutTeamImage,
  contactWomanImage,
  clinicaMockup,
  gestaoproMockup,
  reservasMockup,
};

export interface ServiceItem {
  id: string;
  iconName: 'code' | 'layout-grid' | 'cloud' | 'shield-check' | 'cloud-rain' | 'database';
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'desenvolvimento-web',
    iconName: 'code',
    title: 'Desenvolvimento Web',
    shortDesc: 'Websites modernos, plataformas digitais e aplicações web.',
    fullDesc: 'Criamos websites institucionais de alto impacto, portais corporativos e aplicações web sob medida, otimizados para velocidade, conversão e dispositivos móveis.',
    deliverables: [
      'Design responsivo e personalizado com foco em UX/UI',
      'Otimização avançada de SEO e velocidade de carregamento',
      'Painel de gestão de conteúdos (CMS) intuitivo',
      'Integrações com APIs, formulários de conversão e chat',
      'Conformidade com segurança e proteção de dados'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    timeline: '2 a 4 semanas',
    idealFor: 'Empresas que querem posicionar a sua marca com credibilidade e atrair novos clientes pela internet.'
  },
  {
    id: 'sistemas-empresariais',
    iconName: 'layout-grid',
    title: 'Sistemas Empresariais',
    shortDesc: 'Sistemas de gestão, CRM e ferramentas para automatizar operações.',
    fullDesc: 'Desenvolvimento e implementação de softwares corporativos que eliminam tarefas manuais repetitivas, centralizam informações e conectam departamentos da sua empresa.',
    deliverables: [
      'Sistemas de gestão financeira, faturação e controlo de stock',
      'Plataformas de CRM e acompanhamento de vendas',
      'Dashboards analíticos em tempo real com relatórios executivos',
      'Módulos de gestão de equipas, presenças e tarefas',
      'Acessos baseados em funções e permissões (RBAC)'
    ],
    techStack: ['PostgreSQL', 'Docker', 'REST / GraphQL APIs', 'Python / Node.js', 'React Dashboard'],
    timeline: '4 a 8 semanas',
    idealFor: 'Negócios em expansão que precisam de controlo operacional rigoroso e automação de processos.'
  },
  {
    id: 'infraestrutura-digital',
    iconName: 'cloud',
    title: 'Infraestrutura Digital',
    shortDesc: 'Alojamento, configuração e manutenção de ambientes digitais seguros e estáveis.',
    fullDesc: 'Planeamento, implementação e monitorização de servidores, redes e ambientes digitais de alta performance, garantindo que os seus serviços nunca fiquem offline.',
    deliverables: [
      'Servidores dedicados e cloud VPS configurados sob medida',
      'Contas de email corporativo profissional com filtros anti-spam',
      'Certificados SSL/TLS e blindagem de segurança perimetral',
      'Backups automáticos diários com retenção redundante',
      'Proteção contra ataques DDoS e monitorização de disponibilidade 24/7'
    ],
    techStack: ['Linux / Ubuntu Server', 'Nginx', 'Docker', 'Cloudflare', 'Prometheus & Grafana'],
    timeline: '1 a 2 semanas',
    idealFor: 'Organizações que exigem estabilidade absoluta e proteção contínua dos seus ativos digitais.'
  },
  {
    id: 'suporte-e-manutencao',
    iconName: 'shield-check',
    title: 'Suporte e Manutenção',
    shortDesc: 'Monitorização, atualizações e suporte técnico para o seu negócio não parar.',
    fullDesc: 'Planos de suporte contínuo proativo para manter os seus websites, servidores e softwares sempre atualizados, rápidos e imunes a vulnerabilidades de segurança.',
    deliverables: [
      'Monitorização de uptime 24 horas por dia, 7 dias por semana',
      'Atualizações regulares de segurança e patches de software',
      'Helpdesk com SLA de atendimento prioritário via WhatsApp e Ticket',
      'Otimizações periódicas de base de dados e desempenho',
      'Relatórios mensais de saúde e melhorias recomendadas'
    ],
    techStack: ['Uptime Robot', 'Sentry', 'Automated Backups', 'Incident Response Toolkit'],
    timeline: 'Planos mensais contínuos',
    idealFor: 'Empresas sem equipa interna de TI que precisam de assistência técnica fiável e dedicada.'
  },
  {
    id: 'solucoes-em-cloud',
    iconName: 'cloud-rain',
    title: 'Soluções em Cloud',
    shortDesc: 'Maior flexibilidade, segurança e desempenho para a sua empresa.',
    fullDesc: 'Migração, arquitetura e otimização de sistemas na nuvem (Google Cloud, AWS, Azure), permitindo que a sua equipa trabalhe a partir de qualquer lugar com escalabilidade instantânea.',
    deliverables: [
      'Migração segura de dados e aplicações locais para a Cloud',
      'Arquitetura elástica que se adapta a picos de tráfego',
      'Otimização de custos de faturas em serviços cloud',
      'Armazenamento em nuvem centralizado e colaborativo',
      'Planos de continuidade de negócio e recuperação de desastres (DRP)'
    ],
    techStack: ['Google Cloud Platform', 'AWS', 'Kubernetes', 'Terraform', 'S3 / Cloud Storage'],
    timeline: '2 a 6 semanas',
    idealFor: 'Empresas modernas que querem escalabilidade, redução de custos com hardware e mobilidade total.'
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'web' | 'sistemas' | 'app';
  client: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techUsed: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'clinica-vida-nova',
    title: 'Clínica Vida Nova',
    category: 'Website Institucional',
    categorySlug: 'web',
    client: 'Clínica Vida Nova - Maputo',
    image: clinicaMockup,
    summary: 'Novo portal institucional e sistema de agendamento de consultas médicas em tempo real.',
    challenge: 'A clínica recebia centenas de chamadas por dia para marcação de consultas, gerando linhas ocupadas, desistências de pacientes e sobrecarga na receção.',
    solution: 'Desenvolvemos uma plataforma web ultra rápida, com design humanizado, agendamento interativo por especialidade médica e confirmações automáticas por SMS e WhatsApp.',
    results: [
      '+140% no volume de marcações de consultas no primeiro trimestre',
      '-65% de chamadas telefónicas para tarefas administrativas',
      '98% de avaliação positiva dos pacientes na usabilidade'
    ],
    techUsed: ['React', 'Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'PostgreSQL']
  },
  {
    id: 'gestaopro',
    title: 'GestãoPro',
    category: 'Sistema de Gestão',
    categorySlug: 'sistemas',
    client: 'GestãoPro Enterprise Suite',
    image: gestaoproMockup,
    summary: 'Plataforma SaaS integrada de gestão financeira, emissão de faturas e controlo de inventário.',
    challenge: 'A empresa cliente operava com folhas de cálculo descentralizadas, o que provocava frequentes divergências de inventário e atrasos no fecho de contas mensais.',
    solution: 'Criámos uma plataforma web modular e multi-utilizador com controlo de stock em tempo real, emissão simplificada de faturas fiscais e dashboard executivo com indicadores-chave.',
    results: [
      'Redução de 45% no tempo de fecho contabilístico mensal',
      'Zero discrepâncias de inventário após 60 dias de operação',
      'Acesso seguro e centralizado para 4 filiais em diferentes províncias'
    ],
    techUsed: ['TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS']
  },
  {
    id: 'reservas-online',
    title: 'Reservas Online',
    category: 'Aplicação Web',
    categorySlug: 'app',
    client: 'Rede de Restaurantes & Hospitalidade',
    image: reservasMockup,
    summary: 'Aplicação web móvel para reserva imediata de mesas, quartos e eventos corporativos.',
    challenge: 'Perda de clientes nas horas de ponta devido à falta de confirmação instantânea de disponibilidade de mesas e reservas.',
    solution: 'Desenvolvemos uma Progressive Web App (PWA) rápida com mapa interativo de mesas, seleção de datas e horários, e envio de lembretes automáticos.',
    results: [
      '+85% de reservas diretas sem taxas de intermediários',
      'Taxa de no-show (não comparência) reduzida de 22% para menos de 4%',
      'Tempo médio de conclusão de reserva inferior a 45 segundos'
    ],
    techUsed: ['React Native Web', 'PWA', 'Tailwind CSS', 'Firebase Cloud Messaging', 'Stripe / M-Pesa']
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rafael-m',
    quote: 'A plataforma que desenvolveram para a nossa empresa superou todas as expectativas. Profissionais, rápidos e sempre disponíveis.',
    author: 'Rafael M.',
    role: 'Diretor',
    company: 'Clínica Vida Nova',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'ana-s',
    quote: 'Excelente equipa! O nosso website ficou moderno, rápido e já trouxe mais clientes para o nosso negócio.',
    author: 'Ana S.',
    role: 'Proprietária',
    company: 'Loja Essência',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'tiago-l',
    quote: 'O suporte deles é incrível. Sempre que precisamos, respondem rápido e resolvem o problema.',
    author: 'Tiago L.',
    role: 'CEO',
    company: 'TechSolutions (parceiro)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Entendemos as suas necessidades e objetivos.',
    details: [
      'Reunião de diagnóstico estratégico com a sua equipa',
      'Levantamento de requisitos técnicos e comerciais',
      'Análise de concorrentes e benchmarks de mercado',
      'Definição clara do público-alvo e metas de conversão'
    ]
  },
  {
    number: '02',
    title: 'Planeamento',
    description: 'Propomos a melhor solução para o seu negócio.',
    details: [
      'Arquitetura de informação e wireframes das telas',
      'Definição da stack tecnológica mais robusta e económica',
      'Cronograma detalhado por marcos de entrega (milestones)',
      'Orçamento transparente sem custos ocultos'
    ]
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Criamos, testamos e implementamos a solução.',
    details: [
      'Design visual de alta fidelidade e protótipos funcionais',
      'Programação de código limpo, escalável e comentado',
      'Testes rigorosos de compatibilidade, segurança e velocidade',
      'Formação da sua equipa para gestão autónoma da plataforma'
    ]
  },
  {
    number: '04',
    title: 'Suporte Contínuo',
    description: 'Acompanhamos o seu crescimento.',
    details: [
      'Monitorização ativa de performance e segurança',
      'Backups regulares e planos de contingência',
      'Apoio técnico dedicado com canal prioritário',
      'Evolução contínua com novas funcionalidades conforme o seu negócio cresce'
    ]
  }
];

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'transformacao-digital-pme',
    title: 'Como a Transformação Digital está a Alavancar PMEs em Moçambique',
    category: 'Estratégia Digital',
    readTime: '4 min de leitura',
    date: 'Outubro 2025',
    summary: 'Descubra como pequenas e médias empresas estão a aumentar receitas e a reduzir custos com ferramentas digitais acessíveis.',
    content: [
      'A digitalização deixou de ser um luxo restrito a multinacionais para se tornar um requisito de sobrevivência para qualquer empresa moçambicana.',
      'Hoje, a adoção de canais digitais próprios permite atender clientes em várias províncias com custos operacionais significativamente menores.',
      'Investir numa presença web profissional e em sistemas de faturação integrados ao M-Pesa e cartões bancários traz previsibilidade e confiança imediata ao consumidor.'
    ]
  },
  {
    id: 'cloud-vs-servidores-locais',
    title: 'Cloud vs. Servidores Locais: Qual a Escolha Certa para a Sua Empresa?',
    category: 'Infraestrutura & Cloud',
    readTime: '5 min de leitura',
    date: 'Setembro 2025',
    summary: 'Uma análise prática dos custos, segurança e disponibilidade entre manter hardware físico ou migrar para a nuvem.',
    content: [
      'Manter servidores físicos no escritório implica custos elevados de eletricidade, refrigeração contínua e risco permanente de falhas de hardware ou picos de energia.',
      'As soluções em Cloud oferecem 99.9% de uptime garantido, backups automáticos em múltiplos continentes e escalabilidade proporcional ao volume de uso.',
      'Na Biru, desenhamos arquiteturas híbridas ou 100% cloud adaptadas à realidade de ligação de cada cliente.'
    ]
  },
  {
    id: 'seguranca-sistemas-web',
    title: '5 Boas Práticas Essenciais de Segurança para Sistemas Empresariais',
    category: 'Segurança & IT',
    readTime: '3 min de leitura',
    date: 'Agosto 2025',
    summary: 'Proteja os dados sensíveis dos seus clientes e da sua tesouraria contra fraudes e ataques cibernéticos.',
    content: [
      'Ataques de phishing e tentativas de invasão a bases de dados desatualizadas cresceram mais de 70% na região austral de África no último ano.',
      'Medidas simples como autenticação de dois fatores (2FA), encriptação de dados em repouso e backups diários evitam perdas financeiras irreparáveis.',
      'Todos os sistemas desenvolvidos pela Biru seguem os mais altos padrões OWASP de proteção digital desde o primeiro dia de código.'
    ]
  }
];
