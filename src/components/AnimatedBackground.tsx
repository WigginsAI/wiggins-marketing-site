'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }).map((_, i) => {
        const width = Math.random() * 4 + 1;
        const height = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;
        const animationDuration = Math.random() * 5 + 10;
        const animationDelay = Math.random() * 10;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${width}px`,
              height: `${height}px`,
              left: `${left}%`,
              top: `${top}%`,
              opacity,
              animation: `float ${animationDuration}s linear infinite`,
              animationDelay: `${animationDelay}s`,
            }}
            className="rounded-full bg-white/10"
          />
        );
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default AnimatedBackground;

// Add this at the bottom of your globals.css or in a separate animation.css file
// @keyframes float {
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
//   100% { transform: translateY(0); }
// }
