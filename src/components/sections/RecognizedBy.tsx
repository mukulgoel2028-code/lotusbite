"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RecognizedBy() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const mediaOutlets = [
    {
      name: "FORBES",
      tagline: "INDIA",
      svg: (
        <svg viewBox="0 0 120 30" className="h-7 fill-current">
          <text x="0" y="22" fontFamily="serif" fontWeight="900" fontSize="22" letterSpacing="1">FORBES</text>
        </svg>
      )
    },
    {
      name: "ECONOMIC TIMES",
      tagline: "The Economic Times",
      svg: (
        <svg viewBox="0 0 200 30" className="h-6 fill-current">
          <text x="0" y="21" fontFamily="serif" fontWeight="bold" fontSize="18" letterSpacing="0.5">The Economic Times</text>
        </svg>
      )
    },
    {
      name: "YOURSTORY",
      tagline: "YOURSTORY",
      svg: (
        <svg viewBox="0 0 150 30" className="h-6 fill-current">
          <text x="0" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5">YOURSTORY</text>
        </svg>
      )
    },
    {
      name: "VOGUE",
      tagline: "VOGUE",
      svg: (
        <svg viewBox="0 0 110 30" className="h-7 fill-current">
          <text x="0" y="22" fontFamily="serif" fontWeight="300" fontSize="24" letterSpacing="4">VOGUE</text>
        </svg>
      )
    },
    {
      name: "BUSINESS STANDARD",
      tagline: "Business Standard",
      svg: (
        <svg viewBox="0 0 210 30" className="h-6 fill-current">
          <text x="0" y="21" fontFamily="serif" fontWeight="bold" fontSize="17">Business Standard</text>
        </svg>
      )
    },
    {
      name: "MINT",
      tagline: "mint",
      svg: (
        <svg viewBox="0 0 80 30" className="h-7 fill-current">
          <text x="0" y="22" fontFamily="sans-serif" fontWeight="900" fontSize="24" letterSpacing="-1">mint</text>
        </svg>
      )
    },
    {
      name: "GQ",
      tagline: "GQ",
      svg: (
        <svg viewBox="0 0 50 30" className="h-7 fill-current">
          <text x="0" y="22" fontFamily="serif" fontWeight="900" fontSize="26" letterSpacing="1">GQ</text>
        </svg>
      )
    }
  ];

  useEffect(() => {
    if (!tickerRef.current) return;

    // Create infinite seamless loop animation with GSAP
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-card border-y border-border py-10 relative overflow-hidden font-sans">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/60">
          Recognized & Featured In
        </p>
      </div>

      {/* Ticker Outer Wrapper with Gradient Fades at Edges */}
      <div 
        className="relative w-full overflow-hidden flex items-center"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.play()}
      >
        {/* Left Side Fade Mask */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />

        {/* Right Side Fade Mask */}
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* GSAP Moving Track Container (Duplicated array for infinite loop) */}
        <div 
          ref={tickerRef} 
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap will-change-transform"
        >
          {/* First Set of Logos */}
          {mediaOutlets.map((media, idx) => (
            <div 
              key={`first-${idx}`} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 text-foreground transition-opacity duration-300 cursor-pointer shrink-0"
              title={media.name}
            >
              {media.svg}
            </div>
          ))}

          {/* Second Duplicate Set for Seamless Loop */}
          {mediaOutlets.map((media, idx) => (
            <div 
              key={`second-${idx}`} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 text-foreground transition-opacity duration-300 cursor-pointer shrink-0"
              title={media.name}
            >
              {media.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}