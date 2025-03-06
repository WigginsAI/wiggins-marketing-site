
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c]/30 via-background/80 to-background"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-fuchsia-900/10 via-purple-800/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-900/10 via-violet-800/5 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 animate-grid-line"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-400/5 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      {/* Animated Lines - Increased opacity */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-25">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity="0" />
            <stop offset="50%" stopColor="#D946EF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="-100"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
          style={{ animationDelay: "0s" }}
        />
        <line
          x1="-100"
          y1="60%"
          x2="100%"
          y2="60%"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <line
          x1="20%"
          y1="-100"
          x2="20%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="80%"
          y1="-100"
          x2="80%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
      </svg>

      {/* Futuristic Circuit Pattern - Increased opacity and size */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-25" 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="animate-pulse-slow" style={{ animationDelay: "2.5s" }}>
          <circle cx="500" cy="500" r="300" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <circle cx="500" cy="500" r="200" stroke="#9b87f5" strokeWidth="1.5" fill="none" />
          <circle cx="500" cy="500" r="100" stroke="#9b87f5" strokeWidth="1" fill="none" />
          
          <line x1="200" y1="500" x2="800" y2="500" stroke="#D946EF" strokeWidth="1" />
          <line x1="500" y1="200" x2="500" y2="800" stroke="#D946EF" strokeWidth="1" />
          
          <circle cx="500" cy="200" r="6" fill="#8B5CF6" />
          <circle cx="500" cy="800" r="6" fill="#8B5CF6" />
          <circle cx="200" cy="500" r="6" fill="#8B5CF6" />
          <circle cx="800" cy="500" r="6" fill="#8B5CF6" />
          
          <path d="M300,300 L400,300 L400,400 L300,400 Z" fill="none" stroke="#0EA5E9" strokeWidth="1" />
          <path d="M600,300 L700,300 L700,400 L600,400 Z" fill="none" stroke="#0EA5E9" strokeWidth="1" />
          <path d="M300,600 L400,600 L400,700 L300,700 Z" fill="none" stroke="#0EA5E9" strokeWidth="1" />
          <path d="M600,600 L700,600 L700,700 L600,700 Z" fill="none" stroke="#0EA5E9" strokeWidth="1" />
        </g>
      </svg>
      
      {/* Additional Digital Circuit Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20" 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
          <path d="M200,200 L300,200 L300,300" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M700,200 L800,200 L800,300" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M200,800 L300,800 L300,700" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M700,800 L800,800 L800,700" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5,5" />
          
          <line x1="350" y1="350" x2="450" y2="450" stroke="#D946EF" strokeWidth="1" strokeDasharray="10,5" />
          <line x1="550" y1="350" x2="650" y2="450" stroke="#D946EF" strokeWidth="1" strokeDasharray="10,5" />
          <line x1="350" y1="650" x2="450" y2="550" stroke="#D946EF" strokeWidth="1" strokeDasharray="10,5" />
          <line x1="550" y1="650" x2="650" y2="550" stroke="#D946EF" strokeWidth="1" strokeDasharray="10,5" />
        </g>
      </svg>
      
      {/* Floating Particles - Increased size and number */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white mix-blend-screen"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing Dots at Intersections */}
      <div className="absolute inset-0">
        <div className="absolute h-2 w-2 rounded-full bg-purple-500 opacity-70 blur-[1px] top-[20%] left-[20%] animate-pulse-slow"></div>
        <div className="absolute h-2 w-2 rounded-full bg-purple-500 opacity-70 blur-[1px] top-[20%] left-[80%] animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute h-2 w-2 rounded-full bg-purple-500 opacity-70 blur-[1px] top-[60%] left-[20%] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute h-2 w-2 rounded-full bg-purple-500 opacity-70 blur-[1px] top-[60%] left-[80%] animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
