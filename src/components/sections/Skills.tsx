import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-16">
          Technology <span className="text-primary">Matrix</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-body uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-4">
              {portfolioData.skills.core.map((skill, index) => (
                <div key={index} className="px-6 py-3 bg-surface border border-white/5 rounded-sm font-body text-lg text-white hover:border-primary hover:text-primary transition-colors cursor-crosshair">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-body uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Tools & Environments</h3>
            <div className="flex flex-wrap gap-4">
              {portfolioData.skills.tools.map((tool, index) => (
                <div key={index} className="px-6 py-3 bg-surface border border-white/5 rounded-sm font-body text-lg text-white hover:border-secondary hover:text-secondary transition-colors cursor-crosshair">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
           <h3 className="text-2xl font-body uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Certifications</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="p-6 bg-surface border border-white/5 group hover:border-white/20 transition-all">
                  <p className="text-sm font-body text-primary mb-2">{cert.date}</p>
                  <h4 className="text-xl font-display font-bold mb-1">{cert.title}</h4>
                  <p className="text-white/60 font-body text-sm uppercase tracking-wide">{cert.issuer}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
