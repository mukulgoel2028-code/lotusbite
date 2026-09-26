"use client";

import React, { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/data/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="shrink-0 w-48 sm:w-56 lg:w-60 snap-start group font-sans flex flex-col justify-between">
      <div>
        {/* 9:16 Aspect Ratio Image Container */}
        <div className="relative aspect-9/16 w-full rounded-2xl overflow-hidden bg-muted/40 border border-border/60 mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground tracking-tight line-clamp-1 group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-base font-bold text-foreground">
          ₹{product.price}
        </span>

        <button
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 active:scale-95 ${
            isAdded
              ? "bg-emerald-600 text-white"
              : "bg-primary text-primary-foreground hover:opacity-90 shadow-xs"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5" /> Added
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" /> Add
            </>
          )}
        </button>
      </div>
    </div>
  );
}