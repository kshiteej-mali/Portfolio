import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../../data/portfolio';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000 * 3; i++) {
    sphere[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#D4FF00" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-4">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {portfolioData.personal.name.split(' ')[0]}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
          >
            {portfolioData.personal.name.split(' ')[1]}
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl font-body text-white/60 max-w-2xl mt-6 uppercase tracking-wide"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a href="#work" className="px-8 py-4 bg-primary text-black font-body uppercase font-bold tracking-widest text-sm hover:scale-105 transition-transform">
            Explore Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-surface border border-white/20 text-white font-body uppercase font-bold tracking-widest text-sm hover:bg-white/10 transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
