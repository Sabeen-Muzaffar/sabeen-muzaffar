"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-background font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 text-left">
          {/* Logo & Bio Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-accent">
              Sabeen Muzaffar
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs text-sm">
              Building digital experiences with clean code and creative solutions. 
              Focused on performance and modern architecture.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a 
                href="mailto:sabeenmir848@gmail.com" 
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                sabeenmir848@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Github, href: "https://github.com/Sabeen-Muzaffar" },
                  { icon: Instagram, href: "https://www.instagram.com/sabeen_2769/" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sabeen-muzaffar-meer-a35928337/" },
                  { icon: Mail, href: "mailto:sabeenmir848@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits: Centered Copyright & Right-Aligned Scroll Button Below */}
        <div className="pt-8 border-t border-white/5 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-muted-foreground/60 text-sm font-medium tracking-tight">
              © 2026 Sabeen Muzaffar. All rights reserved.
            </p>
            <p className="text-muted-foreground/40 text-xs font-medium tracking-tight">
              Crafted with <span className="text-accent">❤</span> and lots of coffee.
            </p>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-accent group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
