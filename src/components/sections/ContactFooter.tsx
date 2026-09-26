import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Terminal, ArrowRight } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>(['kmalis-macbook:~ guest$ ']);

  const handleTerminalInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget.value.trim().toLowerCase();
      e.currentTarget.value = '';
      
      let response = '';
      switch(input) {
        case 'cat about.txt':
          response = portfolioData.personal.about;
          break;
        case 'open linkedin':
          response = 'Opening LinkedIn profile...';
          window.open(portfolioData.personal.linkedin, '_blank');
          break;
        case 'send-message':
          response = 'Launching communication interface... (mailto:)';
          window.location.href = 'mailto:contact@example.com';
          break;
        case 'help':
          response = 'Available commands: cat about.txt, open linkedin, send-message, clear';
          break;
        case 'clear':
          setTerminalOutput(['kmalis-macbook:~ guest$ ']);
          return;
        case '':
          response = '';
          break;
        default:
          response = `Command not found: ${input}. Type 'help' for available commands.`;
      }
      
      setTerminalOutput(prev => [...prev, input, response, 'kmalis-macbook:~ guest$ '].filter(Boolean));
    }
  };

  return (
    <footer id="contact" className="bg-[#040405] pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6 leading-none">
              Let's <br/> <span className="text-primary hover:text-white transition-colors cursor-pointer">Connect</span>
            </h2>
            <p className="text-white/60 font-body mb-12 max-w-sm">
              Open for new opportunities, collaborations, or just a chat.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-2xl font-display uppercase tracking-widest hover:text-primary transition-colors w-fit">
                LinkedIn Profile
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </span>
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-2xl font-display uppercase tracking-widest hover:text-primary transition-colors w-fit">
                GitHub Profile
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </span>
              </a>
              <a href={portfolioData.personal.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-2xl font-display uppercase tracking-widest hover:text-primary transition-colors w-fit">
                Instagram
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </span>
              </a>
              <a href={`tel:${portfolioData.personal.phone}`} className="group flex items-center gap-4 text-2xl font-display uppercase tracking-widest hover:text-primary transition-colors w-fit">
                Call Me
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </span>
              </a>
            </div>
          </div>

          <div className="bg-[#0A0A0C] border border-white/10 rounded-lg overflow-hidden font-body shadow-2xl">
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="mx-auto text-xs text-white/40 tracking-widest flex items-center gap-2"><Terminal size={12}/> terminal</span>
            </div>
            <div className="p-6 h-[300px] overflow-y-auto text-sm text-white/80 space-y-2">
              {terminalOutput.map((line, i) => (
                <div key={i} className={line.startsWith('kmalis') ? 'text-primary' : 'text-white/70'}>
                  {line}
                </div>
              ))}
              <div className="flex items-center text-primary">
                <span className="mr-2">&gt;</span>
                <input 
                  type="text"
                  onKeyDown={handleTerminalInput}
                  className="bg-transparent border-none outline-none flex-1 text-white/90 focus:ring-0"
                  placeholder="type a command... (try 'help')"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 font-body text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Kshiteej Mali. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">Designed with <span className="text-secondary animate-pulse">♥</span> System</p>
        </div>
      </div>
    </footer>
  );
};
