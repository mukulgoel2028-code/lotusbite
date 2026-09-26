"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Flame, ShieldCheck } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="w-full bg-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Image Container */}
          <div className="relative">
            {/* Main Image Wrapper */}
            <div className="relative aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 w-full rounded-3xl overflow-hidden border border-border shadow-sm">
              <img
                src="/all_flavour.webp"
                alt="Artisanal Roasted Makhana Preparation"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Highlight Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-card border border-border p-4 sm:p-5 rounded-2xl shadow-lg max-w-55 sm:max-w-65 flex items-center gap-3.5 backdrop-blur-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">100% Organic</p>
                <p className="text-[11px] sm:text-xs text-foreground/60 leading-tight">
                  Handpicked & air-roasted with zero palm oil.
                </p>
              </div>
            </div>

            {/* Subtle Decorative Background Blur */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="space-y-6 lg:pl-4">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-primary text-xs font-bold uppercase tracking-wider">
              <span>Our Story</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">
              From Ancient Tradition to Your Daily Guilt-Free Snack
            </h2>

            {/* Body Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
              <p>
                At <span className="font-semibold text-foreground">LotusBite</span>, we believe snacking shouldn't mean compromising your health. Born from a passion for mindful eating, our journey started in the serene wetlands of Bihar, where lotus seeds have been harvested for centuries.
              </p>
              <p>
                We took this revered superfood and reinvented it for modern food lovers. Every lotus seed is carefully hand-harvested, sun-dried, and slow air-roasted to perfection—infused with cold-pressed olive oil and natural artisan spices.
              </p>
            </div>

            {/* Key Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-card border border-border/80">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Air Roasted</h4>
                  <p className="text-xs text-foreground/60 mt-0.5">Never deep-fried, preserving pure crunch and nutrients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-card border border-border/80">
                <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Directly Sourced</h4>
                  <p className="text-xs text-foreground/60 mt-0.5">Ethically empowering local farming communities.</p>
                </div>
              </div>
            </div>

            {/* Action Link / CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex w-full justify-center items-center gap-2 bg-primary hover:bg-primary-hover px-5 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm  transition-colors"
              >
                Explore Flavors
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}