import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-24">
          Professional <br/><span className="text-secondary">Milestones</span>
        </h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="mb-20 relative pl-8 md:pl-0">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-background"></span>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="text-3xl font-display font-bold">{exp.role}</h3>
                <span className="text-primary font-body tracking-widest mt-2 md:mt-0 uppercase text-sm">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-xl text-white/60 font-body uppercase tracking-wider mb-6">
                {exp.company}
              </h4>
              
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-4 items-start text-white/80 font-body leading-relaxed">
                    <span className="text-secondary mt-1.5 opacity-50">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
