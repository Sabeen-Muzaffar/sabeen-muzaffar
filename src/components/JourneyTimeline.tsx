
"use client";

import { Calendar, Building2, ChevronRight, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const JOURNEY = [
  {
    id: "job-1",
    role: "Mobile Application Developer",
    company: "Riphah International University - DPT Department",
    period: "Sept 2025 — Feb 2026",
    location: "Islamabad",
    type: "Contract",
    description: "A Mobile Application for Stroke patients to regularly follow their exercise and speedup their recovery.",
    details: [
      "Developed a mobile app using React Native and Expo frameworks.",
      "Efficient use of Gen AI for code generation and debugging, reducing development time by 30%.",
      "Implemented real-time data synchronization using Firebase."
    ]
  },
  {
    id: "job-2",
    role: "UI/UX Designer Intern",
    company: "Smart Insight for Data Analysis",
    period: "July 2025 — Oct 2025",
    location: "United Arab Emirates",
    type: "Remote",
    description: "Focused on building responsive UI components and integrating third-party APIs.",
    details: [
      "Developed a custom design system using Tailwind CSS and Radix UI.",
      "Optimized React application performance resulting in 40% faster LCP.",
      "Collaborated with UX designers to refine customer onboarding flows."
    ]
  },
  {
    id: "intern-1",
    role: "Graphic Design Intern",
    company: "Binix IT Solutions",
    period: "Jan 2025 - June 2025",
    location: "Islamabad",
    type: "Remote",
    description: "Assisted in building marketing landing pages and implementing pixel-perfect CSS designs.",
    details: [
      "Converted high-fidelity Figma designs into semantic HTML/CSS.",
      "Learned state management principles using Redux and Context API.",
      "Contributed to bug fixes and feature enhancements in the main product."
    ]
  }
];

export function JourneyTimeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-body text-sm tracking-[0.3em] mb-4 uppercase">Career Path</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold">Journey Timeline</h3>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

          {JOURNEY.map((item, idx) => (
            <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="glass p-6 rounded-2xl hover:border-primary/30 transition-all font-body">
                  <div className="flex items-center gap-7 text-accent text-sm mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{item.location}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-1 text-white">{item.role}</h4>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium ">
                      <span className="text-white/20">|  </span>
                      <span className="text-muted-foreground">{item.type}</span>
                    </div>
                  </div>

                  {/* <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.location}</span>
                  </div> */}

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <Accordion type="single" collapsible className="w-full border-t border-white/5">
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-xs hover:no-underline text-primary py-3 font-body">
                        View Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex gap-2">
                              <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* Spacer for MD screens */}
              <div className="w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
