
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import EmailForm from "@/components/EmailForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div 
              className="inline-block mb-3 px-4 py-1.5 rounded-full bg-secondary/80 text-sm font-medium border border-border/50 opacity-0" 
              data-animate 
              data-delay="100"
            >
              <span className="text-primary">Coming Soon</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-muted-foreground">Join our private beta</span>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight opacity-0" 
              data-animate 
              data-delay="200"
            >
              The next frontier of
              <br />
              <span className="text-gradient">innovation is here</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0" 
              data-animate 
              data-delay="300"
            >
              We're crafting a revolutionary platform that will transform how you interact with technology.
              Early access available for a limited time.
            </p>
            
            <div 
              className="pt-6 md:pt-8 opacity-0" 
              data-animate 
              data-delay="400"
            >
              <EmailForm />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
          <ChevronDown size={20} className="text-muted-foreground animate-float" />
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0" 
              data-animate
            >
              Redefining what's possible
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto opacity-0" 
              data-animate 
              data-delay="100"
            >
              Our technology is being built from the ground up with a focus on performance, security, and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-secondary/30 rounded-xl p-6 border border-border/50 backdrop-blur-sm opacity-0 shimmer" 
                data-animate 
                data-delay={`${index * 100 + 200}`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative glass-effect rounded-2xl p-8 md:p-12 overflow-hidden border border-border/50 opacity-0" 
            data-animate
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Be among the first to experience it
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join our exclusive waitlist today and be the first to know when we launch. Early adopters will receive special perks and priority access.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Learn about our vision
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
              
              <div>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-gradient">Nexus</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nexus Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature data
const features = [
  {
    title: "Advanced Technology",
    description: "Built on cutting-edge technology that pushes the boundaries of what's currently possible in the industry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Seamless Integration",
    description: "Designed to work flawlessly with your existing tools and workflows, providing a smooth transition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Quantum Security",
    description: "Implementing next-generation security protocols that safeguard your data against emerging threats.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export default Index;
