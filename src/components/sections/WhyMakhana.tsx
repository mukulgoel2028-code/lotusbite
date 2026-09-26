"use client";

import React, { useEffect, useRef } from 'react';
import { Flame, Zap, HeartPulse, ShieldCheck, Check, X, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyMakhana() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const nutrients = [
    {
      stat: "-70%",
      title: "Less Fat",
      description: "Slow-roasted in pure olive oil. Never deep-fried in cheap palm oil.",
      icon: <Flame className="w-5 h-5 text-primary" />
    },
    {
      stat: "3x",
      title: "More Protein",
      description: "Plant-based fuel that stops mid-day cravings dead in their tracks.",
      icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
      stat: "Low",
      title: "GI Index",
      description: "Zero sugar spikes. Just clean, sustained, natural energy.",
      icon: <HeartPulse className="w-5 h-5 text-primary" />
    },
    {
      stat: "100%",
      title: "Junk-Free",
      description: "Gluten-free, non-GMO, and seasoned with real gourmet spices.",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: 0.5,
          }
        }
      );

      stepsRef.current.forEach((step) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Punchy & Premium Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
            The Clean Snack Revolution
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase text-foreground leading-tight tracking-tight">
            Snack Smarter.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-xl mx-auto font-medium">
            Stop compromising between taste and health. Experience the ultimate crunch without the guilt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          
          {/* LEFT: Premium Visual Showcase */}
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden group border border-border shadow-2xl bg-card">
            <img
              src="/makhana_action.webp"
              alt="Crispy Spiced Makhana"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            {/* Premium Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-card/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-border/50 shadow-lg flex items-center justify-between sm:justify-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-foreground text-xs font-bold tracking-wider uppercase">
                100% Roasted • Never Fried
              </span>
            </div>
          </div>

          {/* RIGHT: Ultra-Scannable Timeline */}
          <div className="relative pl-6 sm:pl-10">
            
            {/* Progress Line Tracks */}
            <div className="absolute left-0 top-3 bottom-3 w-1 bg-border rounded-full" />
            <div 
              ref={lineRef} 
              className="absolute left-0 top-3 bottom-3 w-1 bg-primary origin-top scale-y-0 rounded-full shadow-[0_0_12px_rgba(224,107,36,0.5)]" 
            />

            <div className="flex flex-col gap-10">
              {nutrients.map((item, idx) => (
                <div 
                  key={idx} 
                  ref={(el) => { stepsRef.current[idx] = el; }} 
                  className="relative flex items-center gap-6 group"
                >
                  
                  {/* Floating Icon Node */}
                  <div className="absolute -left-[43px] sm:-left-[59px] w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Big Number + Short Text */}
                  <div className="pl-2">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-none">
                        {item.stat}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-primary uppercase tracking-wide">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm sm:text-base max-w-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: Luxury 2-Card "Us vs Them" Showdown */}
        <div className="mt-28 max-w-4xl mx-auto">
          <div className="bg-card p-3 rounded-[2.5rem] border border-border shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-[2rem] overflow-hidden">
              
              {/* The Loser: Standard Snacks */}
              <div className="bg-muted/50 p-8 sm:p-10 flex flex-col justify-between border border-border/40 rounded-[1.75rem]">
                <div>
                  <span className="text-foreground/40 font-bold uppercase tracking-widest text-xs mb-3 block">
                    The Old Way
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground/80 mb-6">
                    Fried Chips
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-foreground/70 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <X className="text-accent w-4 h-4" />
                      </div>
                      Deep fried in cheap palm oil
                    </li>
                    <li className="flex items-center gap-3 text-foreground/70 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <X className="text-accent w-4 h-4" />
                      </div>
                      Empty calories & sugar spikes
                    </li>
                    <li className="flex items-center gap-3 text-foreground/70 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <X className="text-accent w-4 h-4" />
                      </div>
                      Leaves you feeling heavy & sluggish
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Winner: LotusBite */}
              <div className="bg-primary p-8 sm:p-10 flex flex-col justify-between text-white rounded-[1.75rem] shadow-xl relative overflow-hidden">
                {/* Decorative Subtle Accent Shape */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white/80 font-bold uppercase tracking-widest text-xs">
                      The Smart Choice
                    </span>
                    <span className="bg-secondary text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider">
                      Upgrade
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight">
                    LotusBite
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white font-semibold text-base sm:text-lg">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="text-white w-4 h-4" />
                      </div>
                      Slow-roasted in Olive Oil
                    </li>
                    <li className="flex items-center gap-3 text-white font-semibold text-base sm:text-lg">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="text-white w-4 h-4" />
                      </div>
                      High protein, clean sustained fuel
                    </li>
                    <li className="flex items-center gap-3 text-white font-semibold text-base sm:text-lg">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="text-white w-4 h-4" />
                      </div>
                      Impossibly light & gourmet crunch
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}