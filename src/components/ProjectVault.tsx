
"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// import Strokeicon from "../../public/stroke-mobility-app-icon.jpeg";

const PROJECT_CATEGORIES = [
  {
    title: "Agentic Systems",
    projects: [
      {
        id: "ai-agent-1",
        title: "Drowsiness Detection System",
        description: "A real time Goal-Based and Utility Based AI agent that detects facial features using media pipe and checks if the driver is drowsy, awake, or sleeping based on the rules. It generates sound and visual alerts. ",
        tech: ["Python", "OpenCV", "MediaPipe", "SVM"],
        role: "AI Lead",
        outcome: "Reduced mean time to recovery (MTTR) by 65%.",
        image: "/drowsiness-detection-icon.png"
      },
      {
        id: "ai-agent-2",
        title: "Swift Scan",
        description: "AI-powered tool that analyzes GitHub repositories, explains code, and generates setup guides. Available as a web app and browser extension for faster project onboarding.",
        tech: ["Python", "Gemini - API", "Streamlit"],
        role: "Backend Architect",
        outcome: "Automated 80% of routine technical support tickets.",
        image: "/swift-scan-icon.png"
      },
      {
        id: "ai-agent-3",
        title: "FashionNova",
        description: "AI-powered fashion web app that uses your photo and measurements to generate custom outfit designs, specification sheets, and virtual try-ons before stitching.",
        tech: ["Gemini", "FastAPI", "React", "Google AI Studio"],
        role: "Software Engineer",
        outcome: "Achieved 92% retrieval accuracy on technical docs.",
        image: "/fashion-nova-icon.png"
      },
      {
        id: "ai-agent-4",
        title: "Portal",
        description: "AI-powered system that scrapes the web for historical events and automatically generates detailed reports, timelines, and analyses of their global impact using GenAI.",
        tech: ["RAG", "Python", "TypeScript", "FAISS", "GenAI"],
        role: "Full-stack Developer",
        outcome: "Maintained 12% alpha over market baseline during testing.",
        image: "/portal-icon.png"
      }
    ]
  },
  {
    title: "Non-Agentic Systems",
    projects: [
      {
        id: "system-1",
        title: "Stroke Mobility App",
        description: "A mobile app designed to assist stroke patients in regaining mobility through personalized exercise routines.",
        tech: ["React Native", "Expo", "Firebase", "Node.js"],
        role: "Full-stack Developer",
        image: "/stroke-mobility-app-icon.png"
      }
    ]
  },
  {
    title: "UI UX System Designs",
    projects: [
      {
        id: "uiux-1",
        title: "Stride Wars",
        description: "An interactive Mobile Application for a fitness startup that gamifies running with real-time battles and social features.",
        tech: ["Figma"],
        role: "UI Designer",
        outcome: "Winner of 'Cleanest Codebase' award at TechFest 2025.",
        image: "/stride-wars-icon.png"
      },
      {
        id: "uiux-2",
        title: "DiagnoCare",
        description: "A comprehensive dashboard for a healthcare provider that visualizes patient data and streamlines diagnostics with an intuitive interface.",
        tech: ["Figma"],
        role: "UI Designer",
        outcome: "Reduced frontend development time by 40% across 5 teams.",
        image: "/diagno-care-icon.png"
      },
      {
        id: "uiux-3",
        title: "Prestige",
        description: "A hotel reservation system with a sleek UI that allows user to book hotel rooms and manage their booking with ease.",
        tech: ["Figma"],
        role: "Product Designer",
        outcome: "4.8 star rating on App Store within 3 months of launch.",
        image: "/prestige-icon.png"
      }
    ]
  }
];

function ProjectCategoryCarousel({ category }: { category: typeof PROJECT_CATEGORIES[0] }) {
  const plugin = React.useRef(
    Autoplay({ 
      delay: 2000, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true 
    })
  );

  return (
    <div className="space-y-8 mb-20 last:mb-0">
      <div className="flex items-center gap-4">
        <h4 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
          {category.title}
        </h4>
        <div className="flex-1 h-px bg-white/5"></div>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {category.projects.map((project) => {
            return (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                     src={project.image || "https://picsum.photos/seed/project/800/450"} alt={project.title}
                     fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint="software project screenshot"
                    />
                    {/* 
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors"><ExternalLink className="w-5 h-5" /></a>
                      </div>
                    </div> */}
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="font-body text-[10px] bg-white/5 text-accent border-none">{t}</Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">{project.description}</p>
                    
                    {/* <div className="pt-4 mt-auto border-t border-white/5 space-y-2 font-body">
                      <div className="text-xs">
                        <span className="text-accent font-bold">Role:</span> {project.role}
                      </div>
                      <div className="text-xs">
                        <span className="text-primary font-bold">Outcome:</span> {project.outcome}
                      </div>
                    </div> */}

                    {/* <button className="flex items-center gap-2 text-sm font-body font-semibold text-primary mt-4 hover:gap-3 transition-all">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function ProjectVault() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-primary font-body text-sm tracking-[0.3em] mb-4 uppercase">Selected Work</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold">Project Vault</h3>
        </div>

        <div className="space-y-16">
          {PROJECT_CATEGORIES.map((category) => (
            <ProjectCategoryCarousel key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
