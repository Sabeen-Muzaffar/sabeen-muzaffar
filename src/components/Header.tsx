"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          Sabeen Muzaffar
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-0.5 active:translate-y-0"
        >
          <a href="/CV.pdf" download className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Resume
          </a>
        </button>
      </div>
    </header>
  );
}
