"use client";

import Image from "next/image";
import { Github, Instagram, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

import HeroImage from "../../public/hero-pic-2.jpeg";
// import CV from "../../public/CV.pdf";

const SUMMARY = `High-achieving Software Engineering student with hands on experience in Generative AI, leveraging prompt engineering to build efficient, scalable AI-driven applications
Passionate about leveraging technology to create innovative solutions and continuously enhancing my expertise in tech.`;

export function Hero() {
  const safeImages = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const profileImage = safeImages.find(img => img.id === "profile-headshot");

  return (
    <section id="bio" className="pt-32 pb-20 px-6 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            <div className="absolute inset-0 rounded-3xl bg-primary/20 rotate-6 border border-primary/30"></div>
            <div className="absolute inset-0 rounded-3xl bg-accent/20 -rotate-3 border border-accent/30"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image 
                src={HeroImage} 
                alt="Developer Profile"
                width={600}
                height={600}
                className="object-cover"
                data-ai-hint="professional developer headshot"
              />
            </div>
          </div>
          
          <div className="flex gap-4 md:gap-6">
            <a href="https://github.com/Sabeen-Muzaffar" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sabeen-muzaffar-meer-a35928337/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/sabeen_2769/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-primary hover:scale-110 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:sabeenmir48@gmail.com" className="p-3 glass rounded-xl hover:text-primary hover:scale-110 transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <h2 className="text-accent font-body text-lg mb-2 tracking-widest uppercase">Software Engineer</h2>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
              I'm <span className="text-gradient">Sabeen Muzaffar</span>
            </h1>
          </div>

          <div className="glass p-6 rounded-2xl border-white/5 relative overflow-hidden">
            <p className="text-lg text-muted-foreground leading-relaxed font-body" style={{whiteSpace : 'pre-wrap'}}>
              {SUMMARY}
            </p>
          </div>

          <div className="flex gap-4">
            <a href="/CV.pdf" download>
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 font-body">
                Download CV
              </Button>
            </a>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5 font-body" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
