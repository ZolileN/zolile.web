import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Database, Server, BrainCircuit, ExternalLink, Terminal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroArchitecture from '@/components/HeroArchitecture';
import MetricCounter from '@/components/MetricCounter';
import ProjectCard from '@/components/ProjectCard';
import TerminalContact from '@/components/TerminalContact';
import { projects } from '@/data/projects';

export default function Home() {
  // Extract the top 6 featured flagship projects
  const featuredProjects = projects.filter((p) => p.featured);

  const expertise = [
    {
      title: 'Frontend',
      icon: <Code className="w-5 h-5 text-accent" />,
      skills: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vanilla CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: <Database className="w-5 h-5 text-accent" />,
      skills: ['Python', 'FastAPI', 'Node.js', 'SQL', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Infrastructure',
      icon: <Server className="w-5 h-5 text-accent" />,
      skills: ['Docker', 'Linux', 'Cloud Architecture', 'Server Administration', 'System Design', 'AI Infrastructure'],
    },
    {
      title: 'Data & AI',
      icon: <BrainCircuit className="w-5 h-5 text-accent" />,
      skills: ['Analytics', 'Data Engineering', 'Business Intelligence', 'LLM Applications', 'AI Governance', 'AI FinOps', 'Agent Systems'],
    },
  ];

  // Selected Clients names
  const clientNames = [
    'MLK Computer', 'SignalDesk Africa', 'Lekker Direct', 'Ouhout Furniture',
    'AdmitScore', 'Njozela Attorneys', 'Mandondo Consulting', 'Obsido Interiors',
    '18 Township Tours', 'Rands CPT', 'The Parliament Lifestyle', 'Andrea Dondolo',
    'Ikhwezi Pre School'
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden grid-pattern">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-bg-primary" />
        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border-custom bg-bg-secondary">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">Now Available For Consulting</span>
            </div>
            
            <h1 className="font-space text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Building AI Infrastructure, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-accent">
                Enterprise Systems
              </span>, and <br className="hidden sm:inline" />
              Digital Products.
            </h1>
            
            <p className="text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed font-sans">
              Technical Founder and Full-Stack Engineer focused on high-performance telemetry, 
              local client-side browser intelligence, enterprise compliance tools, and secure fintech ledgers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#featured" 
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-accent text-bg-primary hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,168,0.4)] transition-all duration-300 font-semibold text-sm"
              >
                <span>View Flagships</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-bg-secondary hover:bg-surface-card border border-border-custom hover:border-accent/40 transition-all duration-300 text-white font-medium text-sm"
              >
                <span>Initialize Ingestion</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full h-[450px] lg:h-[500px]">
            <HeroArchitecture />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-bg-secondary border-y border-border-custom py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-1">
              <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                <MetricCounter target={22} suffix="+" />
              </div>
              <p className="text-text-secondary text-xs sm:text-sm font-space">Products Built</p>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                <MetricCounter target={4} />
              </div>
              <p className="text-text-secondary text-xs sm:text-sm font-space">Major Domains</p>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                <MetricCounter target={10} suffix="+" />
              </div>
              <p className="text-text-secondary text-xs sm:text-sm font-space">Industries Served</p>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
                <MetricCounter target={100} suffix="%" />
              </div>
              <p className="text-text-secondary text-xs sm:text-sm font-space">Independent Dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">System Biography</span>
            <h2 className="font-space text-3xl font-bold text-white">Arms dealer of technology.</h2>
          </div>
          
          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            <p>
              I design, build, and deploy the systems organizations depend on when spreadsheets, 
              disconnected software, and manual processes stop scaling.
            </p>
            <p>
              Over the past several years I have developed AI infrastructure platforms, enterprise operating 
              systems, financial technology products, analytics dashboards, marketplaces, and industry-specific 
              solutions serving businesses across multiple sectors.
            </p>
            <p>
              Whether building an AI governance platform, a fraud prevention network, a utility finance ledger, 
              or a national analytics dashboard, my focus remains the same: <strong>Transforming complex operational problems into scalable systems.</strong>
            </p>
            <p>
              Today I continue building products at the intersection of AI infrastructure, enterprise technology, 
              analytics, and operational intelligence while exploring how software can become a force multiplier for organizations of every size.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-5 border border-border-custom bg-bg-secondary p-6 rounded-2xl space-y-6">
          <h3 className="font-space text-base font-bold text-white border-b border-border-custom/50 pb-4 flex items-center justify-between">
            <span>Foundry Profile</span>
            <span className="font-mono text-[10px] text-accent font-normal">SYS_V2.6</span>
          </h3>
          
          <ul className="space-y-4 font-mono text-xs text-text-secondary">
            <li className="flex justify-between py-1 border-b border-border-custom/30">
              <span className="text-white">Founder</span>
              <span>Zolile Nonzapa</span>
            </li>
            <li className="flex justify-between py-1 border-b border-border-custom/30">
              <span className="text-white">Location</span>
              <span>Cape Town, South Africa</span>
            </li>
            <li className="flex justify-between py-1 border-b border-border-custom/30">
              <span className="text-white">Email</span>
              <a href="mailto:zolile@mlkcomputer.com" className="hover:text-accent transition-colors">zolile@mlkcomputer.com</a>
            </li>
            <li className="flex justify-between py-1 border-b border-border-custom/30">
              <span className="text-white">Cellular</span>
              <a href="tel:+27825319901" className="hover:text-accent transition-colors">+27 82 531 9901</a>
            </li>
            <li className="flex justify-between py-1">
              <span className="text-white">Current Focus</span>
              <span className="text-accent">AI Telemetry & Compliance OS</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="border-t border-border-custom bg-bg-secondary/30 py-28">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-bold">Showcase Architectures</span>
              <h2 className="font-space text-3xl font-bold text-white">Flagship Projects</h2>
            </div>
            
            <Link 
              href="/projects" 
              className="inline-flex items-center space-x-2 text-sm text-accent hover:text-white transition-colors duration-300 font-mono group"
            >
              <span>Access All 23 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="pt-6 flex justify-center">
            <Link 
              href="/projects" 
              className="flex items-center space-x-2 px-8 py-4 rounded-xl bg-bg-secondary hover:bg-surface-card border border-border-custom hover:border-accent/40 transition-all duration-300 text-white font-mono text-sm tracking-wide"
            >
              <Terminal className="w-4.5 h-4.5 text-accent" />
              <span>Query Full Product Console Archive</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="expertise" className="border-t border-border-custom py-28 max-w-[1200px] mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">Capability Matrix</span>
          <h2 className="font-space text-3xl font-bold text-white">Technical Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((domain, index) => (
            <div key={index} className="border border-border-custom bg-bg-secondary p-6 rounded-2xl space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-surface-card border border-border-custom rounded-lg">
                  {domain.icon}
                </div>
                <h3 className="font-space font-bold text-white text-base">{domain.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono text-[10px] text-text-secondary bg-surface-card border border-border-custom px-2.5 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Clients Section */}
      <section className="border-t border-border-custom bg-bg-secondary/40 py-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="font-mono text-[9px] text-text-secondary tracking-widest uppercase">Ecosystem Footprint</span>
            <h3 className="font-space text-lg font-bold text-white tracking-tight">Organizations & Client Solutions Engineered</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {clientNames.map((name) => (
              <span 
                key={name}
                className="font-mono text-xs text-text-secondary border border-border-custom bg-bg-primary px-4 py-2.5 rounded-lg select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border-custom py-28 bg-[#070707] grid-pattern">
        <div className="max-w-[800px] mx-auto px-6 space-y-12 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-bold">Establish Communication</span>
            <h2 className="font-space text-3xl sm:text-4xl font-bold text-white">Let&apos;s Build Something Useful.</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans max-w-lg mx-auto">
              Whether you&apos;re building a startup, modernizing operations, exploring AI adoption, 
              or creating a new digital product, I&apos;m always interested in ambitious projects. Let&apos;s map your complexity into code.
            </p>
          </div>
          
          <div className="w-full text-left">
            <TerminalContact />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
