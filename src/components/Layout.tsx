import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { CustomCursor } from './CustomCursor';
import { Navigation } from './Navigation';
import GhostFibers from './GhostFibers';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <GhostFibers
          lineColor="#84CC16"
          glowColor="#10B981"
        />
      </div>
      <CustomCursor />
      <Navigation />
      <main className="relative z-10 w-full">
        {children}
      </main>
    </div>
  );
};
