import React from 'react';
import { motion } from 'framer-motion';

export const Gallery: React.FC = () => {
  const mediaFiles = [
    {
      src: `${import.meta.env.BASE_URL}images/AgenticAIboothnvidia.jpg`,
      alt: "At the Nvidia Agentic AI Booth exploring cutting-edge AI developments.",
      type: "image",
      title: "Agentic AI Booth"
    },
    {
      src: `${import.meta.env.BASE_URL}images/geforcedaynvidia.jpg`,
      alt: "Attending Nvidia GeForce Day event.",
      type: "image",
      title: "Nvidia GeForce Day"
    },
    {
      src: `${import.meta.env.BASE_URL}images/hardware-repairingapc_VmUrPErU.mp4`,
      alt: "Hardware repairing a PC showcasing hardware troubleshooting skills.",
      type: "video",
      title: "PC Hardware Repair"
    },
    {
      src: `${import.meta.env.BASE_URL}images/MUNpicturelookingatlaptop.jpeg`,
      alt: "Representing at Model United Nations (MUN), looking at a laptop.",
      type: "image",
      title: "Model United Nations"
    },
    {
      src: `${import.meta.env.BASE_URL}images/programmingsince15.jpg`,
      alt: "Early days of programming and building a strong foundation in computer science.",
      type: "image",
      title: "Programming Roots"
    },
    {
      src: `${import.meta.env.BASE_URL}images/working.jpg`,
      alt: "Deep into focus mode while working on a systems programming project.",
      type: "image",
      title: "Deep Work"
    }
  ];

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-[#08080A] relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-24">
          Behind the <span className="text-primary">Scenes</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaFiles.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-square"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  title={item.title}
                  aria-label={item.alt}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-display font-bold text-white text-xl uppercase tracking-wider">{item.title}</h3>
                <p className="font-body text-white/70 text-sm mt-2">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
