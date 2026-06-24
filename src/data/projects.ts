export interface Project {
  id: string;
  name: string;
  category: 'AI Infrastructure' | 'B2B Operating Systems' | 'Financial Technology' | 'Data Intelligence' | 'Commercial Products' | 'Client Solutions';
  description: string;
  features: string[];
  tech: string[];
  liveLink: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'mintry-fabric',
    name: 'Mintry Fabric (Core Platform)',
    category: 'AI Infrastructure',
    description: 'A high-performance transport-layer interceptor designed for real-time metering, tracking, and operational visibility of AI agentic fleets.',
    features: [
      'Zero-touch TLS proxy interception',
      'Live budget safety guardrails',
      'Automated system ledger management'
    ],
    tech: ['TypeScript', 'Node.js', 'FastAPI', 'Linux Server Administration', 'Docker'],
    liveLink: 'https://mintry-page.vercel.app/',
    image: '/images/mintry-fabric.png',
    featured: true
  },
  {
    id: 'mintry-finops',
    name: 'Mintry Fabric FinOps',
    category: 'AI Infrastructure',
    description: 'A zero-touch TLS proxy that intercepts and caches expensive third-party financial API calls — credit bureau checks, KYC, AML screening — so FinTech microservices stop paying for duplicate vendor queries.',
    features: [
      'Transparent MITM interception with no code changes required',
      'AES-256 (SQLCipher) encrypted caching with hot-reloadable TTL policies per vendor',
      'Circuit-breaker fallback keeps traffic flowing if the cache layer fails'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    liveLink: 'https://mintry-finops-web.vercel.app/',
    image: '/images/mintry-finops.png',
    featured: true
  },
  {
    id: 'praxisone',
    name: 'PraxisOne',
    category: 'B2B Operating Systems',
    description: 'A centralized enterprise operating system and compliance monitoring workspace optimized for professional service firms.',
    features: [
      'Real-time compliance auditing engines',
      'Client onboarding workflows',
      'Secure document ingestion pipelines',
      'Rigorous multi-tenant isolation'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    liveLink: 'https://complianceos-pied.vercel.app/',
    image: '/images/praxisone.png',
    featured: true
  },
  {
    id: 'scriptlens',
    name: 'ScriptLens',
    category: 'AI Infrastructure',
    description: 'A privacy-first, local AI writing workspace and rewrite engine that evaluates text grammar, styling, and patterns locally inside the user\'s browser.',
    features: [
      'Uses WebGPU to run lightweight open-source models (e.g., Qwen 0.5B) locally',
      'Zero external telemetry ensures complete document confidentiality',
      'Real-time text grading and styling suggestions'
    ],
    tech: ['React', 'TypeScript', 'WebGPU', 'Tailwind CSS', 'LLM Applications'],
    liveLink: 'https://scriptlens-lovat.vercel.app/',
    image: '/images/scriplens.png',
    featured: true
  },
  {
    id: 'voltadvance',
    name: 'VoltAdvance',
    category: 'Financial Technology',
    description: 'Emergency prepaid electricity advances delivered entirely over WhatsApp, with debt anchored to the meter — not the customer — and recovered automatically the next time electricity is purchased, at any vendor.',
    features: [
      'Advance requested, approved, and issued as a real token via WhatsApp, no app or account needed',
      'Risk engine scores repayment behavior at the meter level, not via credit bureau',
      'Recovery is channel-agnostic — works across Capitec, FNB, Shoprite, Boxer, and more'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    liveLink: 'https://voltadvance.vercel.app/',
    image: '/images/voltadvance.png',
    featured: true
  },
  {
    id: 'identity-banc',
    name: 'Identity Banc',
    category: 'Financial Technology',
    description: 'A peer-to-peer fraud prevention and verification platform built to mandate trust before financial transactions occur.',
    features: [
      'Secure cryptographic verification link generation',
      'Verify buyer/seller identity and asset ownership in under 45 seconds',
      'Zero-knowledge proof verification elements'
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveLink: 'https://idbanc.vercel.app/',
    image: '/images/identity-banc.png',
    featured: true
  },
  {
    id: 'vivid-accounting',
    name: 'Vivid Accounting',
    category: 'B2B Operating Systems',
    description: 'A clean, unified financial command center built for modern business accounting tracking.',
    features: [
      'Dynamic monthly revenue vs. expense visualizers',
      'Cash flow tables and outstanding invoice tracking',
      'Upcoming bills alerts',
      'Automated bank feed integrations'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SQL', 'PostgreSQL'],
    liveLink: 'https://vivid-accounting.vercel.app/',
    image: '/images/vivid-accounting.png'
  },
  {
    id: 'libo-insights',
    name: 'Libo Insights (Area Intelligence)',
    category: 'Data Intelligence',
    description: 'An advanced geographic public safety intelligence dashboard aggregating and tracking crime statistics across South African provinces.',
    features: [
      'Visualizes quarterly SAPS data trends',
      'Graphs multi-year crime type trajectories',
      'Maps localized highest-crime police precincts',
      'Features an integrated AI Q&A assistant'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'LLM Applications'],
    liveLink: 'https://sa-insghts-hub.vercel.app/',
    image: '/images/libo-insights.png'
  },
  {
    id: 'uvu-africa',
    name: 'UVU Africa (Ecosystem Intelligence)',
    category: 'Data Intelligence',
    description: 'A macro-level innovation ecosystem dashboard illustrating the development scale of Africa\'s digital economy.',
    features: [
      'Tracks funding allocations ($115M+ monitored)',
      'Maps startup distributions across industry sectors (FinTech, EdTech, HealthTech)',
      'Visualizes tech graduate talent pipelines and placement metrics over time'
    ],
    tech: ['Python', 'Streamlit', 'Data Engineering', 'Business Intelligence'],
    liveLink: 'https://uvuafrica.streamlit.app/',
    image: '/images/uvuafrica.png'
  },
  {
    id: 'airbnb-cape-town',
    name: 'Airbnb Cape Town Market Analytics',
    category: 'Data Intelligence',
    description: 'A data-driven real estate portrait mapping Cape Town\'s short-term holiday rental ecosystem.',
    features: [
      'Tracks active listings across areas',
      'Average nightly pricing distributions (ZAR)',
      'Host intelligence metrics and superhost saturation ratios',
      'Supply splits by property and room types'
    ],
    tech: ['Python', 'Streamlit', 'Data Engineering', 'Analytics', 'Business Intelligence'],
    liveLink: 'https://airbnbcapetown.streamlit.app/',
    image: '/images/airbnb.png'
  },
  {
    id: 'mlk-computer',
    name: 'MLK Computer Consulting',
    category: 'Commercial Products',
    description: 'Enterprise landing architecture delivering modern technology consulting, practical business solutions, and infrastructure support.',
    features: [
      'Infrastructure status reporting',
      'Service catalog navigation',
      'System support booking workflows'
    ],
    tech: ['React', 'Next.js', 'Vanilla CSS', 'Linux Server Administration'],
    liveLink: 'https://mlkcomputer.com/',
    image: '/images/mlkcomputer.png'
  },
  {
    id: 'signaldesk-africa',
    name: 'SignalDesk Africa',
    category: 'Commercial Products',
    description: 'A tailored media intelligence and independent creator marketing platform engineered explicitly for South African PR teams and agencies.',
    features: [
      'Creator marketing campaigns',
      'Tailored media intelligence reports',
      'PR workflow pipelines'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://signaldesk-page.vercel.app/',
    image: '/images/signaldesk.png'
  },
  {
    id: 'lekker-direct',
    name: 'Lekker Direct',
    category: 'Commercial Products',
    description: 'An online marketplace integrated with instant Ozow EFT secure payment processing paths for seamless local retail checkouts.',
    features: [
      'Instant Ozow EFT integration',
      'Local retail secure checkouts',
      'Responsive marketplace catalog'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'FastAPI'],
    liveLink: 'https://lekker-direct.vercel.app/',
    image: '/images/lekker-direct.png'
  },
  {
    id: 'ouhout',
    name: 'Ouhout Furniture',
    category: 'Commercial Products',
    description: 'A beautifully responsive e-commerce furniture design platform optimized for showcasing curated, high-end collection showrooms.',
    features: [
      'Responsive furniture catalogs',
      'Curated product showrooms',
      'Bespoke visual e-commerce pipelines'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vanilla CSS'],
    liveLink: 'https://ouhout.netlify.app/',
    image: '/images/ouhout.png'
  },
  {
    id: 'admitscore',
    name: 'AdmitScore',
    category: 'Commercial Products',
    description: 'A public utility application allowing South African matric students to check admission point scores (APS) and match instantly against 70+ university program requirements.',
    features: [
      'APS checking algorithm',
      'Matched programs database',
      'Comprehensive university requirements indexing'
    ],
    liveLink: 'https://admitscore-zeta.vercel.app/',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/images/admitscore.png'
  },
  {
    id: 'njozela-attorneys',
    name: 'Njozela Attorneys Inc',
    category: 'Client Solutions',
    description: 'A high-end legal service digital presence optimized for Road Accident Fund (RAF) client consultation bookings and accessible legal support pathways.',
    features: [
      'Road Accident Fund (RAF) information hubs',
      'Consultation booking workflows',
      'Document helper modules'
    ],
    tech: ['React', 'Next.js', 'Vanilla CSS', 'System Design'],
    liveLink: 'https://www.njozela-attorneys-inc.co.za/',
    image: '/images/njozela-attorneys.png'
  },
  {
    id: 'mandondo-consulting',
    name: 'Mandondo Consulting',
    category: 'Client Solutions',
    description: 'Corporate accounting, tax advisory, and payroll compliance frontend managing bookkeeping pipelines, SARS disputes, and CIPC company registrations.',
    features: [
      'Bookkeeping pipeline indicators',
      'SARS dispute information systems',
      'Payroll compliance registration request forms'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://www.mandondoconsulting.co.za/',
    image: '/images/mandondo.png'
  },
  {
    id: 'obsido-interiors',
    name: 'Obsido Interiors',
    category: 'Client Solutions',
    description: 'Visual architecture portfolio showcasing premium custom interior design solutions, custom built-in cabinetry, and cost-estimator visualizers.',
    features: [
      'High-end built-in cabinetry visual showcases',
      'Custom cost-estimator visualizer tool',
      'Minimalist design project maps'
    ],
    tech: ['React', 'Vanilla CSS', 'System Design'],
    liveLink: 'https://zolilen.github.io/obsido/',
    image: '/images/obsido.png'
  },
  {
    id: '18-township-tours',
    name: '18 Township Tours',
    category: 'Client Solutions',
    description: 'Authentic booking and media engine built to showcase award-winning local tour experiences and culture in Khayelitsha, Cape Town.',
    features: [
      'Interactive tour booking workflows',
      'Visual storytelling biography maps',
      'Khayelitsha local experience showcases'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://www.18gm.co.za/',
    image: '/images/18gm.png'
  },
  {
    id: 'rands-cpt',
    name: 'Rands CPT',
    category: 'Client Solutions',
    description: 'A premium lifestyle editorial landscape detailing the signature braai culture, VIP table bookings, and event vibes of Cape Town\'s iconic social venue.',
    features: [
      'VIP table booking interface',
      'Iconic event calendar updates',
      'Interactive signature menu presentations'
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://randscpt.vercel.app/',
    image: '/images/rands.png'
  },
  {
    id: 'parliament-lifestyle',
    name: 'The Parliament Lifestyle',
    category: 'Client Solutions',
    description: 'A luxury dining, shisanyama, and premium entertainment landscape platform designed for table bookings and live event navigation in Tembisa.',
    features: [
      'Table booking interfaces',
      'Tembisa live event navigation maps',
      'Luxury menu guides'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://the-parliament.vercel.app/',
    image: '/images/parlaiment.png'
  },
  {
    id: 'andrea-dondolo',
    name: 'Andrea Dondolo',
    category: 'Client Solutions',
    description: 'A theatrical portfolio and storytelling biography space mapping the media career, books, and public speaking engagements of an award-winning South African actress.',
    features: [
      'Media career biography timeline',
      'Theatrical performance catalogs',
      'Speaking booking workflow channels'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vanilla CSS'],
    liveLink: 'https://andrea-dondolo.vercel.app/',
    image: '/images/andrea-dondolo.png'
  },
  {
    id: 'ikhwezi-preschool',
    name: 'Ikhwezi Pre School',
    category: 'Client Solutions',
    description: 'An educational enrollment frontend built to optimize admissions communication, programs overview, and personalized care visibility for community primary schools.',
    features: [
      'Admissions communication dashboards',
      'School programs overview cards',
      'Enrollment inquiry interfaces'
    ],
    tech: ['React', 'TypeScript', 'Vanilla CSS'],
    liveLink: 'https://ikhwezi.netlify.app/',
    image: '/images/ikhwezi.png'
  }
];
