"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown, Youtube } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Subtle radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, oklch(0.7 0.15 220 / 0.08) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-balance">
          <span className="text-foreground">Mustafa Albayrak</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Backend Developer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Backend-focused software developer who enjoys building practical projects, improving step by step, and turning ideas into working products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:bg-secondary/50 px-8"
            asChild
          >
            <a href="https://github.com/ustadmustafa" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:bg-secondary/50 px-8"
            asChild
          >
            <a href="https://www.youtube.com/@mustafaalbayrak8957" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-4 w-4" />
              YouTube
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="hover:bg-secondary/50 px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>

        {/* Mini GitHub Badge */}
        <a
          href="https://github.com/ustadmustafa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-6 mt-12 glass rounded-full px-6 py-3 hover:border-primary/30 transition-colors group"
        >
          <Github className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">36+ Repos</span>
          <span className="text-border">|</span>
          <span className="text-sm font-medium">500+ Contributions</span>
          <span className="text-border">|</span>
          <span className="text-sm font-medium">6 Stars</span>
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">&rarr;</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
