"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/product";
import ProductCard from "../common/ProductCard";

export default function ProductsSection() {
  const displayProducts = PRODUCTS.slice(0, 5);

  return (
    <section className="w-full bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-border/60 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
              Fresh Batches
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Our Bestsellers
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1"
          >
            View Shop
          </Link>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-4 sm:gap-6 overflow-x-scroll snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-primary/60 max-sm:scrollbar-gutter-auto scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* First 5 Products */}
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* 6th Card: Redirect to /shop */}
          <Link
            href="/shop"
            className="shrink-0 w-48 sm:w-56 lg:w-60 snap-start rounded-2xl border border-dashed border-border hover:border-primary bg-card/50 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 group"
          >
            {/* Desktop View */}
            <div className="hidden sm:flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                View All Products
              </span>
            </div>

            {/* Mobile View */}
            <div className="flex sm:hidden flex-col items-center gap-2">
              <span className="text-base font-bold text-primary tracking-wide">
                Explore More
              </span>
              <span className="text-xs text-foreground/60">
                Discover all flavors
              </span>
              <ArrowRight className="w-4 h-4 text-primary mt-1" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}