'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, ArrowRight } from 'lucide-react';
import { sendLiveMessage } from '@/app/actions';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export default function TerminalContact() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'Zolile System Console [Version 1.4.2]', type: 'output' },
    { text: 'Type "help" to view available system commands or "message" to send a direct ping.', type: 'output' },
  ]);
  const [input, setInput] = useState('');
  const [msgStep, setMsgStep] = useState<number | null>(null); // null means not in messaging flow. 1: email, 2: message content
  const [senderEmail, setSenderEmail] = useState('');
  
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim();
    const cleanCmd = trimmed.toLowerCase();
    
    const newHistory = [...history, { text: `visitor@zolile-systems:~$ ${trimmed}`, type: 'input' as const }];

    if (msgStep !== null) {
      await handleMessagingFlow(trimmed, newHistory);
      return;
    }

    if (cleanCmd === '') {
      setHistory(newHistory);
      return;
    }

    switch (cleanCmd) {
      case 'help':
        setHistory([
          ...newHistory,
          { text: 'Available commands:', type: 'success' },
          { text: '  about      - Display background credentials and bio', type: 'output' },
          { text: '  skills     - View core development tech stack', type: 'output' },
          { text: '  projects   - List flagship systems built by Zolile', type: 'output' },
          { text: '  contact    - Print cell number, location, and email details', type: 'output' },
          { text: '  message    - Send a contact message directly through the terminal', type: 'output' },
          { text: '  chat       - Open a direct WhatsApp chat window', type: 'output' },
          { text: '  whatsapp   - Alias for "chat"', type: 'output' },
          { text: '  clear      - Clear terminal screen history', type: 'output' },
        ]);
        break;
      case 'about':
        setHistory([
          ...newHistory,
          { text: 'PROFILE & CORE ROLE:', type: 'success' },
          { text: 'Zolile Nonzapa - Technical Founder & Systems Architect', type: 'output' },
          { text: 'I design, build, and deploy the core systems organizations depend on when spreadsheets and manual processes stop scaling.', type: 'output' },
          { text: 'Specialties: AI Infrastructure, B2B Operating Systems, FinTech, and Data Intelligence.', type: 'output' },
        ]);
        break;
      case 'skills':
        setHistory([
          ...newHistory,
          { text: 'CORE TECHNOLOGY STACK:', type: 'success' },
          { text: '  Frontend       : React, Next.js 15, TypeScript, Tailwind CSS, Vanilla CSS', type: 'output' },
          { text: '  Backend & DB   : Python, FastAPI, Node.js, SQL, PostgreSQL, MongoDB', type: 'output' },
          { text: '  Infrastructure : Docker, Linux Server Administration, Cloud Architecture', type: 'output' },
          { text: '  Data & AI      : Analytics, AI Governance, AI FinOps, Agent Systems', type: 'output' },
        ]);
        break;
      case 'projects':
        setHistory([
          ...newHistory,
          { text: 'FLAGSHIP PRODUCTS INDEX:', type: 'success' },
          { text: '  [01] Mintry Fabric         - Zero-touch TLS metering proxy for AI fleets', type: 'output' },
          { text: '  [02] Mintry Fabric FinOps  - Real-time cache caching ZAR saving monitor', type: 'output' },
          { text: '  [03] PraxisOne             - Compliance auditing workspace for service firms', type: 'output' },
          { text: '  [04] ScriptLens            - WebGPU local offline grammar writing assistant', type: 'output' },
          { text: '  [05] VoltAdvance           - Commercial utility advance tracker & recovery', type: 'output' },
          { text: '  [06] Identity Banc         - Peer-to-peer 45-second trust verification link', type: 'output' },
          { text: 'Run "launch <id>" in browser or visit Project Console page for all 23+ projects.', type: 'output' },
        ]);
        break;
      case 'contact':
        setHistory([
          ...newHistory,
          { text: 'CONTACT CHANNELS:', type: 'success' },
          { text: '  Email    : zolile@mlkcomputer.com', type: 'output' },
          { text: '  Cell     : +27 82 531 9901', type: 'output' },
          { text: '  Location : Cape Town, South Africa', type: 'output' },
          { text: '  GitHub   : https://github.com/zolilen', type: 'output' },
        ]);
        break;
      case 'chat':
      case 'whatsapp':
        window.open('https://wa.me/27825319901?text=Hello%20Zolile,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20chat!', '_blank');
        setHistory([
          ...newHistory,
          { text: 'SYSTEM: Launching WhatsApp click-to-chat window...', type: 'success' },
          { text: 'Redirecting to wa.me/27825319901...', type: 'output' },
        ]);
        break;
      case 'message':
        setMsgStep(1);
        setHistory([
          ...newHistory,
          { text: 'SYSTEM: Initializing message ingestion daemon.', type: 'success' },
          { text: 'Please enter your email address:', type: 'output' },
        ]);
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        if (cleanCmd.startsWith('launch ')) {
          const id = cleanCmd.replace('launch ', '').trim();
          const targetUrl = getProjectLink(id);
          if (targetUrl) {
            window.open(targetUrl, '_blank');
            setHistory([
              ...newHistory,
              { text: `SYSTEM: Launching redirect to ${targetUrl}`, type: 'success' },
            ]);
          } else {
            setHistory([
              ...newHistory,
              { text: `SYSTEM: Error - Project id "${id}" not found. Type "projects" to view IDs.`, type: 'error' },
            ]);
          }
        } else {
          setHistory([
            ...newHistory,
            { text: `bash: command not found: ${trimmed}. Type "help" to see available options.`, type: 'error' },
          ]);
        }
    }
  };

  const getProjectLink = (id: string) => {
    const links: Record<string, string> = {
      'mintry': 'https://mintry-page.vercel.app/',
      'mintry-finops': 'https://mintry-finops-web.vercel.app/',
      'praxisone': 'https://complianceos-pied.vercel.app/',
      'scriptlens': 'https://scriptlens-lovat.vercel.app/',
      'voltadvance': 'https://voltadvance.vercel.app/',
      'idbanc': 'https://idbanc.vercel.app/',
    };
    return links[id];
  };

  const handleMessagingFlow = async (text: string, currentHistory: TerminalLine[]) => {
    if (msgStep === 1) {
      // Validate email simple
      if (!text.includes('@') || !text.includes('.')) {
        setHistory([
          ...currentHistory,
          { text: 'SYSTEM: Invalid email format. Ingestion aborted. Please try again.', type: 'error' },
        ]);
        setMsgStep(null);
        return;
      }
      setSenderEmail(text);
      setMsgStep(2);
      setHistory([
        ...currentHistory,
        { text: `SYSTEM: Email accepted (${text}).`, type: 'success' },
        { text: 'Please enter your message text:', type: 'output' },
      ]);
    } else if (msgStep === 2) {
      if (text.length < 5) {
        setHistory([
          ...currentHistory,
          { text: 'SYSTEM: Message too short. Transmission cancelled.', type: 'error' },
        ]);
        setMsgStep(null);
        return;
      }

      // Add loading state to history
      const progressHistory = [
        ...currentHistory,
        { text: 'SYSTEM: Packaging payload...', type: 'output' as const },
        { text: 'SYSTEM: Connecting to gateway...', type: 'output' as const },
        { text: `SYSTEM: Dispatching message from <${senderEmail}>...`, type: 'output' as const },
      ];
      setHistory(progressHistory);
      
      // Temporarily clear step and reset input placeholder
      setMsgStep(null);

      try {
        const result = await sendLiveMessage(senderEmail, text);
        if (result.success) {
          setHistory([
            ...progressHistory,
            { text: result.message, type: 'success' as const },
            { text: 'Thank you. Type "help" for more options.', type: 'output' as const },
          ]);
        } else {
          setHistory([
            ...progressHistory,
            { text: result.message, type: 'error' as const },
            { text: 'Type "message" to try again.', type: 'output' as const },
          ]);
        }
      } catch (error) {
        setHistory([
          ...progressHistory,
          { text: `SYSTEM: Unexpected transmission exception.`, type: 'error' as const },
          { text: 'Type "message" to try again.', type: 'output' as const },
        ]);
      }
      setSenderEmail('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="w-full border border-border-custom bg-bg-secondary rounded-2xl overflow-hidden font-mono text-sm shadow-2xl flex flex-col h-[400px]">
      {/* Terminal Title Bar */}
      <div className="bg-[#151515] border-b border-border-custom px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-xs text-text-secondary font-semibold uppercase tracking-wider">zolile@core-systems:~</span>
        </div>
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border-custom" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-custom" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        </div>
      </div>

      {/* Terminal Output Screen */}
      <div className="p-4 flex-grow overflow-y-auto space-y-2 select-text">
        {history.map((line, idx) => (
          <div 
            key={idx} 
            className={`leading-relaxed whitespace-pre-wrap ${
              line.type === 'input' 
                ? 'text-white font-medium' 
                : line.type === 'error'
                  ? 'text-red-400 font-semibold'
                  : line.type === 'success'
                    ? 'text-accent font-semibold'
                    : 'text-text-secondary'
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleSubmit} className="border-t border-border-custom bg-[#0C0C0C] p-3 flex items-center">
        <span className="text-accent font-bold mr-2 select-none">
          {msgStep === 1 
            ? 'email_daemon:~$ ' 
            : msgStep === 2 
              ? 'message_daemon:~$ ' 
              : 'visitor@zolile-systems:~$ '}
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent text-white focus:outline-none border-none p-0 h-5"
          placeholder={msgStep === null ? "Type 'help'..." : ""}
          autoComplete="off"
          autoFocus
        />
        <button 
          type="submit" 
          className="p-1 rounded text-text-secondary hover:text-accent transition-colors"
          aria-label="Submit command"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
