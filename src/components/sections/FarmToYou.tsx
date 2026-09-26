"use client";

import React, { useEffect, useRef } from 'react';
import { Sprout, Sun, Flame, PackageCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger to handle animations on scroll
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FarmToYou() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Arrays to hold refs for the text steps and the images
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: "01",
      title: "Hand-Harvested",
      description: "Sourced directly from serene lotus ponds where seeds are gently extracted by local farming communities.",
      icon: <Sprout className="w-5 h-5 text-primary" />,
      image: "/step_1.webp"
    },
    {
      id: "02",
      title: "Sun-Dried & Popped",
      description: "Naturally sun-dried under warm skies, then expertly roasted and popped to create a light, signature crunch.",
      icon: <Sun className="w-5 h-5 text-primary" />,
      image: "/step_2.webp"
    },
    {
      id: "03",
      title: "Slow-Roasted",
      description: "Never fried. We gently slow-roast our makhana with pure olive oil and toss them in bold, gourmet spices.",
      icon: <Flame className="w-5 h-5 text-primary" />,
      image: "/step_3.webp"
    },
    {
      id: "04",
      title: "Packed For You",
      description: "Sealed fresh at the source and delivered straight to your doorstep for the ultimate guilt-free snacking experience.",
      icon: <PackageCheck className="w-5 h-5 text-primary" />,
      image: "/step_4.webp"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline that triggers when the section is in view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%", // Triggers when section is 55% down the viewport
        }
      });

      // Define alternating slight rotations to make the images look like a natural stack
      const stackRotations = [-3, 2, -1.5, 3];

      // Pre-set initial states before animation
      gsap.set(stepsRef.current, { y: 30, opacity: 0 });
      gsap.set(imagesRef.current, { y: -80, opacity: 0, scale: 1.1 }); // Images start higher up to "drop"

      // Build the synchronized sequence
      steps.forEach((_, i) => {
        // 1. Text step fades and slides up
        tl.to(stepsRef.current[i], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }, i * 0.7); // 0.7 second gap between each step arriving

        // 2. Corresponding image "drops" in from above
        tl.to(imagesRef.current[i], {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: stackRotations[i], // Applies the subtle tilt
          duration: 0.8,
          ease: "back.out(1.2)" // Gives a premium, subtle "settling" bounce
        }, i * 0.7); // Matches the timing of the text step
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background py-24 px-6 font-sans border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: The Story (Spans 5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
          <div className="mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
              Pure & Transparent
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-[1.1]">
              From Pond <br className="hidden md:block" /> To Pantry
            </h2>
          </div>

          {/* Vertical Timeline Stepper */}
          <div className="relative pl-4 md:pl-0">
            {/* Connecting Vertical Line */}
            <div className="absolute left-[23px] top-4 bottom-10 w-[2px] bg-border hidden md:block"></div>

            <div className="flex flex-col gap-10">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shrink-0 z-10 relative group-hover:border-primary transition-colors duration-300 shadow-sm">
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-muted-foreground font-mono text-sm font-bold opacity-60">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-foreground/75 text-base leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dropping Image Stack (Spans 7 columns) */}
        <div className="lg:col-span-7 flex justify-center items-center min-h-[450px] lg:min-h-[600px] relative">
          <div className="w-full max-w-[500px] aspect-[4/5] relative">
            
            {/* Loop through all 4 images and stack them absolutely in the same container */}
            {steps.map((step, index) => (
              <div 
                key={`img-${index}`}
                ref={(el) => { imagesRef.current[index] = el; }}
                className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-card origin-bottom"
                style={{ zIndex: index * 10 }} // Ensures images stack properly on top of previous ones
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle dark gradient at the bottom of each image for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                
                {/* Optional: Floating Badge on the final step image only */}
                {index === steps.length - 1 && (
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20 z-20">
                    <p className="text-foreground font-bold text-sm leading-tight">
                      100% Hand-Harvested <br />
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">Locally Sourced</span>
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}