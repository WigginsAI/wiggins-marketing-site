import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import EmailForm from "@/components/EmailForm";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  // Animation logic for staggered elements
  useEffect(() => {
    const animatedItems = document.querySelectorAll("[data-animate]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute("data-delay") || "0";
            setTimeout(() => {
              el.classList.add("animate-fade-up");
              el.classList.remove("opacity-0");
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      animatedItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight sm:leading-tight md:leading-tight opacity-0" 
              data-animate 
              data-delay="276"
            >
              <span className="block sm:inline">Reinventing how teams</span>
              {" "}
              <span className="text-gradient block sm:inline">uncover customer insights</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl mx-auto opacity-0" 
              data-animate 
              data-delay="414"
            >
              Helping B2B teams build products their customers actually want.
            </p>
            
            <div 
              className="pt-4 sm:pt-6 md:pt-8 opacity-0" 
              data-animate 
              data-delay="552"
            >
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-4 sm:py-6 border-t border-border/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-gradient">WiggsAI</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 text-center md:text-left">
            <p className="text-xs text-[#B0B0B0]">
              © {new Date().getFullYear()} WiggsAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
