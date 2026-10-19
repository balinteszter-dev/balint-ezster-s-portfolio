export const profile = {
  name: 'Bálint Eszter',
  title: 'Senior Full Stack & AI Engineer',
  tagline: '12+ years building production platforms, distributed systems, and AI-enabled products.',
  location: 'Budapest, Hungary',
  phone: '+40 775 125 3625',
  email: 'balinteszter215@gmail.com',
  linkedin: 'https://www.linkedin.com/in/balint-eazter-416917430/',
  github: 'https://github.com/balinteszter215/',
  portfolio: 'https://balinteszter-dev.github.io/balint-ezster-s-portfolio/',
  summary:
    'Senior Full Stack & AI Engineer with 12+ years of experience building production web platforms, distributed backend services, and AI-enabled applications. I design secure APIs, microservices, and cloud-native systems on AWS, Azure, and GCP—while integrating LLMs, RAG, and automation with a focus on scalability, observability, security, and dependable delivery.',
  aboutExtra:
    'I partner with product and platform teams to ship reliable software—from API design and cloud delivery to AI features that hold up in production.',
  education: {
    degree: "Bachelor's Degree in Computer Science",
    school: 'University of California, Berkeley',
    period: '2012 – 2016',
  },
  languages: [{ name: 'English', level: 'Advanced / C1', progress: 92 }],
}

export const heroFeatures = [
  {
    title: 'Full-stack delivery',
    text: 'React, Node, and cloud-native backends from prototype to production.',
  },
  {
    title: 'Team collaboration',
    text: 'Clear communication with product, design, and platform engineering.',
  },
  {
    title: 'AI in production',
    text: 'LLMs, RAG, and automation integrated with observability and security.',
  },
]

export const techStack = [
  { name: 'TypeScript', brand: 'typescript', color: '3178C6' },
  { name: 'React', brand: 'react', color: '61DAFB' },
  { name: 'Node.js', brand: 'nodedotjs', color: '339933' },
  { name: 'Python', brand: 'python', color: '3776AB' },
  { name: 'AWS', brand: 'amazonaws', color: 'FF9900' },
  { name: 'Azure', brand: 'microsoftazure', color: '0078D4' },
  { name: 'Docker', brand: 'docker', color: '2496ED' },
  { name: 'Kubernetes', brand: 'kubernetes', color: '326CE5' },
  { name: 'PostgreSQL', brand: 'postgresql', color: '4169E1' },
  { name: 'OpenAI', brand: 'openai', color: '412991' },
]

export const skillGroups = [
  {
    title: 'Languages',
    accent: '#60a5fa',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Frontend',
    accent: '#f87171',
    items: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Redux', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Backend',
    accent: '#c084fc',
    items: ['Node.js', 'NestJS', 'Express.js', 'Django', 'FastAPI', 'REST & GraphQL'],
  },
  {
    title: 'AI / ML',
    accent: '#e879f9',
    items: ['LLM APIs', 'OpenAI', 'Azure OpenAI', 'RAG', 'GenAI', 'Prompt orchestration'],
  },
  {
    title: 'Data',
    accent: '#4ade80',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Data modeling', 'Query tuning'],
  },
  {
    title: 'Cloud & DevOps',
    accent: '#38bdf8',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Architecture',
    accent: '#fbbf24',
    items: ['Microservices', 'Event-driven', 'Serverless', 'API design', 'Scalable systems'],
  },
  {
    title: 'Quality & Security',
    accent: '#fb923c',
    items: ['Jest', 'Vitest', 'Playwright', 'Cypress', 'OAuth 2.0', 'JWT', 'OWASP'],
  },
]

export const projects = [
  {
    title: 'Azure Document Intelligence',
    brand: 'Microsoft Azure',
    iconBrand: 'microsoftazure',
    iconColor: '0078D4',
    theme: 'azure',
    mockupTone: 'light',
    description:
      'Document understanding and information extraction with Azure AI Foundry — structured outputs, content understanding, and accelerated processing for enterprise documents.',
    tags: ['Azure', 'AI Foundry', 'Document AI', 'RAG'],
    link: 'https://azure.microsoft.com/en-us/products/ai-foundry/tools/document-intelligence',
    image: '/projects/azure-document-intelligence.jpg',
    preview: { objectPosition: '72% center' },
  },
  {
    title: 'Stripe Billing Platform',
    brand: 'Stripe',
    iconBrand: 'stripe',
    iconColor: '635BFF',
    theme: 'stripe',
    mockupTone: 'light',
    description:
      'Subscription and usage-based billing — invoicing, revenue optimization, and the billing features modern product teams need to scale monetization.',
    tags: ['Stripe', 'Billing', 'Subscriptions', 'SaaS'],
    link: 'https://stripe.com/billing',
    image: '/projects/stripe-billing.jpg',
    preview: { objectPosition: '70% center' },
  },
  {
    title: 'Harness Continuous Delivery',
    brand: 'Harness',
    iconBrand: 'harness',
    iconColor: '00ADE4',
    theme: 'harness',
    mockupTone: 'light',
    description:
      'Continuous delivery and GitOps for the autonomous SDLC — automated deployment pipelines, reduced maintenance toil, and faster release velocity at enterprise scale.',
    tags: ['Harness', 'CI/CD', 'GitOps', 'Kubernetes'],
    link: 'https://www.harness.io/products/continuous-delivery',
    image: '/projects/harness-continuous-delivery.jpg',
    preview: { objectPosition: '68% center' },
  },
  {
    title: 'Kong Konnect API Platform',
    brand: 'Kong',
    iconBrand: 'kong',
    iconColor: '003459',
    theme: 'kong',
    mockupTone: 'light',
    description:
      'Unified API gateway and AI gateway management — service routing, LLM analytics, GenAI provider usage, token metrics, and production observability across microservices.',
    tags: ['Kong', 'API Gateway', 'LLM', 'Microservices'],
    link: 'https://konghq.com/products/kong-konnect',
    image: '/projects/kong-konnect.jpg',
    preview: { objectPosition: '28% center' },
  },
] as const

export const experiences = [
  {
    company: 'Sopra Steria',
    role: 'Senior Full-Stack Engineer / AI Engineer',
    location: 'Paris, France',
    period: 'Jan 2022 – Present',
    highlights: [
      'Own full-stack and AI-enabled product delivery with TypeScript, Python, React, Next.js, FastAPI, and NestJS.',
      'Integrate OpenAI and Azure OpenAI with RAG, prompt orchestration, and production-grade AI features.',
      'Build event-driven flows with RabbitMQ, Kafka, and Docker-based distributed services.',
      'Optimize performance across frontend, APIs, and PostgreSQL/MySQL/MongoDB data layers.',
      'Mentor developers and guide architecture, code reviews, and engineering standards.',
    ],
  },
  {
    company: 'Devoteam',
    role: 'Software Engineer / AI Engineer',
    location: 'Levallois-Perret, France',
    period: 'Jan 2019 – Dec 2021',
    highlights: [
      'Designed and shipped customer-facing features from planning through production support.',
      'Built APIs and microservices with Python, FastAPI, Django, Node.js, and NestJS.',
      'Delivered React and Next.js interfaces connected to secure backend services.',
      'Added LLM-assisted automation via Django backends and structured business workflows.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Software Engineer',
    location: 'Paris, France',
    period: 'Jan 2017 – Dec 2018',
    highlights: [
      'Implemented full-stack features with Python, FastAPI, Node.js, React, and Next.js.',
      'Developed REST APIs for modular, distributed systems and external CRM integrations.',
      'Packaged deployments with Docker, AWS, and CI/CD pipelines.',
    ],
  },
  {
    company: 'Adobe',
    role: 'Software Developer Intern',
    location: 'San Jose, CA, USA',
    period: 'Aug 2014 – Dec 2016',
    highlights: [
      'Contributed to full-stack development with JavaScript, TypeScript, Python, Node.js, and React.',
      'Built REST endpoints and responsive interfaces with modern component-based practices.',
    ],
  },
]

export const navLinks = [
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'My projects' },
  { id: 'experience', label: 'Experiences' },
  { id: 'contact', label: 'Contact me' },
] as const
