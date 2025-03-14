'use client';

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const resetForm = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      resetForm();
    }
    onOpenChange(open);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Close modal after animations complete
      setTimeout(() => {
        onOpenChange(false);
      }, 4500);
      
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={cn(
        "sm:max-w-[425px] overflow-hidden",
        submitted && "bg-secondary/80"
      )}>
        {submitted && (
          <>
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              <rect
                width="100%"
                height="100%"
                rx="8"
                className="fill-none animate-[sketch_1.5s_ease-in-out_forwards]"
                style={{
                  stroke: 'url(#gradient)',
                  strokeWidth: '2px'
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#d946ef' }} />
                  <stop offset="100%" style={{ stopColor: '#9b87f5' }} />
                </linearGradient>
              </defs>
            </svg>
            <style jsx>{`
              @keyframes sketch {
                0% {
                  stroke-dasharray: 2000;
                  stroke-dashoffset: 2000;
                }
                100% {
                  stroke-dasharray: 2000;
                  stroke-dashoffset: 0;
                }
              }
              @keyframes fadeIn {
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </>
        )}
        <div className="relative z-10">
          {!submitted && (
            <DialogHeader className="space-y-3">
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Send us a message and we'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
          )}
          <div className="py-4" id="contactFormContainer">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-secondary/50 border border-border/50 rounded-md text-sm"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-secondary/50 border border-border/50 rounded-md text-sm"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      className="w-full px-3 py-2 bg-secondary/50 border border-border/50 rounded-md text-sm resize-none"
                      placeholder="Your message"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#2ed1d0] hover:bg-[#2ed1d0]/90 text-[#134e4d]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center text-[#134e4d]">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2ed1d0]/10 text-[#2ed1d0] mb-2 animate-[fadeIn_1s_ease-in-out_1.2s_forwards] opacity-0">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium animate-[fadeIn_1s_ease-in-out_1.2s_forwards] opacity-0">
                  Thanks for reaching out!
                </h3>
                <p className="text-base text-muted-foreground mb-4 animate-[fadeIn_1s_ease-in-out_1.4s_forwards] opacity-0">
                  We'll get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
