'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    } catch (error: any) {
      console.error("Form submission error:", {
        message: error.message,
        cause: error.cause,
      });
      
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: error.message || "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={cn(
                "w-full px-4 py-3 bg-secondary/50 rounded-md border focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-200",
                error ? "border-red-500/50" : "border-border/50",
                "placeholder:text-[#A0A0A0] placeholder:opacity-100 text-sm"
              )}
              disabled={isSubmitting}
            />
            {error && (
              <p className="text-red-400 text-xs mt-1 ml-1 absolute">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full py-3 rounded-md font-medium text-sm transition-all duration-200",
              "bg-[#6E3AFF] text-white hover:bg-[#6E3AFF]/90 focus:ring-2 focus:ring-[#6E3AFF]/30 focus:outline-none",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Processing...
              </div>
            ) : (
              "Apply for Early Access"
            )}
          </button>
          <p className="text-xs text-center text-muted-foreground pt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      ) : (
        <div className="text-center space-y-4 py-8 px-8 bg-secondary/50 rounded-md border border-border/50 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3C83F6]/10 text-[#3C83F6] mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium">Thanks for signing up!</h3>
          <p className="text-base text-muted-foreground">
            We'll be in touch soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
