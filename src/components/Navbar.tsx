'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Featured', href: isHome ? '#featured' : '/#featured' },
    { name: 'Expertise', href: isHome ? '#expertise' : '/#expertise' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-custom py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
            <span className="font-mono text-accent text-sm font-bold">&gt;_</span>
          </div>
          <div>
            <span className="font-space font-bold tracking-tight text-white block">ZOLILE NONZAPA</span>
            <span className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">Systems Architect</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/projects" 
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent hover:bg-accent/20 transition-all duration-300 text-accent font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <Terminal className="w-4.5 h-4.5" />
            <span>Project Console</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-text-secondary hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-secondary border-b border-border-custom py-6 px-6 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-white transition-colors duration-200 text-base font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/projects" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:border-accent transition-all duration-300 text-accent font-mono text-xs font-semibold uppercase tracking-wider w-full text-center"
            >
              <Terminal className="w-4 h-4" />
              <span>Project Console</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
