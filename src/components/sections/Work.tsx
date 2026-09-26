import React from 'react';
import { motion } from 'framer-motion';

export const Work: React.FC = () => {
  const projects = [
    {
      title: "Air Quality Management System",
      role: "Project Intern @ CYBRIDGE",
      tech: ["Hardware", "PM2.5/PM10 Sensors", "Systems Design"],
      description: "Built a portable Air Quality Management System using PM2.5 and PM10 low-power sensors."
    },
    {
      title: "SkyRelims Minecraft Server",
      role: "Founder & Lead Developer",
      tech: ["Java", "Backend", "Performance Optimization"],
      description: "Led the development and moderation team. Developed the backend in Java and created custom plugins and features."
    },
    {
      title: "Indian Navy Kavach Project",
      role: "Summer Intern @ PNT Robotics",
      tech: ["Industrial Robotics", "Military Logistics"],
      description: "Ranked 1st (Merited) in the PNT Robotics Internship (featured on Shark Tank India)."
    }
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#0A0A0C] border-y border-white/5 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-24">
          Selected <span className="text-primary">Work</span>
        </h2>
        
        <div className="grid gap-8 relative">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-surface border border-white/5 hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/60 font-body uppercase tracking-wider text-sm mb-6">{project.role}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-body text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0 relative z-10 md:text-right md:max-w-xs">
                <p className="text-white/70 font-body text-sm leading-relaxed">{project.description}</p>
              </div>
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
