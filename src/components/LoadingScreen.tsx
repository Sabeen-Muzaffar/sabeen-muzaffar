
"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeStage, setFadeStage] = useState(0); // 0: hidden, 1: showing, 2: fading out

  useEffect(() => {
    // Stage 1: Fade in the content
    const showTimer = setTimeout(() => setFadeStage(1), 100);
    
    // Stage 2: Start fading out the entire screen
    const exitTimer = setTimeout(() => setFadeStage(2), 2000);
    
    // Stage 3: Remove from DOM
    const removeTimer = setTimeout(() => setIsVisible(false), 2800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000 ${
        fadeStage === 2 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className={`relative z-10 text-center space-y-6 transition-all duration-1000 transform ${
        fadeStage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-accent">Sabeen</span>{" "}
          <span className="text-foreground">Muzaffar</span>
        </h1>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-[1px] bg-white/10"></div>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.6em] text-muted-foreground uppercase opacity-80">
            Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
}
