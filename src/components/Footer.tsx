import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-custom pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="font-mono text-accent text-sm font-bold">&gt;_</span>
              </div>
              <span className="font-space font-bold tracking-tight text-white text-lg">ZOLILE NONZAPA</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              Designing, building, and deploying the core systems and AI infrastructure that businesses depend on. Based in Cape Town, South Africa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/zolilen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-surface-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-surface-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-6">Expertise Domains</h4>
            <ul className="space-y-3 font-mono text-xs text-text-secondary">
              <li className="hover:text-accent transition-colors duration-200">AI Infrastructure & FinOps</li>
              <li className="hover:text-accent transition-colors duration-200">Enterprise Operating Systems</li>
              <li className="hover:text-accent transition-colors duration-200">Financial Technology</li>
              <li className="hover:text-accent transition-colors duration-200">Data Intelligence & Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-space text-sm font-bold text-white uppercase tracking-wider mb-6">Direct Contact</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a href="mailto:zolile@mlkcomputer.com" className="flex items-center space-x-3 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="truncate group-hover:underline">zolile@mlkcomputer.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+27825319901" className="flex items-center space-x-3 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="group-hover:underline">+27 82 531 9901</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Cape Town, ZA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-custom/60 pt-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-text-secondary">
          <p>© {currentYear} Zolile Nonzapa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://mlkcomputer.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <span>MLK Computer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Link href="/projects" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <span>System Index</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
