
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
      
      {/* Animated Lines */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity="0" />
            <stop offset="50%" stopColor="#D946EF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="-100"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "0s" }}
        />
        <line
          x1="-100"
          y1="60%"
          x2="100%"
          y2="60%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <line
          x1="20%"
          y1="-100"
          x2="20%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="80%"
          y1="-100"
          x2="80%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
