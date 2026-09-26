import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Statement: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-black relative z-10 overflow-hidden">
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-16">
        <div className="animate-marquee flex gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              <span>Systems Engineering</span>
              <span className="w-4 h-4 rounded-full bg-black"></span>
              <span>Digital Creation</span>
              <span className="w-4 h-4 rounded-full bg-black"></span>
              <span>Fullstack Architecture</span>
              <span className="w-4 h-4 rounded-full bg-black"></span>
              <span>Backend Optimization</span>
              <span className="w-4 h-4 rounded-full bg-black"></span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-display leading-tight font-semibold">
          "{portfolioData.personal.about}"
        </h2>
      </div>
    </section>
  );
};
