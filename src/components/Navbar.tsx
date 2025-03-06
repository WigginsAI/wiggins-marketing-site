
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-gradient">WiggsAI</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={() => setContactOpen(true)}
            className="text-base font-medium text-[#B0B0B0] hover:text-foreground transition-colors font-[500]"
          >
            Contact Us
          </button>
          <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
