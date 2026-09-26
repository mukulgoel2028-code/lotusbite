"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "makhana-health",
    question: "What is Makhana and why is it considered a superfood?",
    answer:
      "Makhana (popped lotus seeds or foxnuts) is an ancient Indian superfood naturally rich in plant protein, fiber, antioxidants, and essential minerals like magnesium and potassium. It has a low glycemic index and zero trans fat, making it a perfect guilt-free snack.",
  },
  {
    id: "roasted-vs-fried",
    question: "Are LotusBite snacks deep-fried or air-roasted?",
    answer:
      "None of our products are ever deep-fried. We slow air-roast our lotus seeds to achieve the ultimate crunch, then lightly infuse them with cold-pressed oils and 100% natural herbs and spices.",
  },
  {
    id: "dietary-info",
    question: "Are LotusBite products gluten-free and vegan?",
    answer:
      "Yes! Our Pink Salt & Cracked Pepper and Smokey Peri Peri flavors are 100% vegan and naturally gluten-free. All our products are non-GMO with zero artificial preservatives or MSG.",
  },
  {
    id: "shelf-life",
    question: "What is the shelf life of LotusBite products?",
    answer:
      "Unopened bags stay fresh for up to 9 months from the date of manufacturing. Once opened, reseal the ziplock pouch tightly or store in an airtight container to retain maximum crunch.",
  },
  {
    id: "shipping-delivery",
    question: "How long does shipping take?",
    answer:
      "We process all orders within 24 hours. Metro city deliveries usually take 2–3 business days, while standard nationwide shipping takes 4–6 business days.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("makhana-health");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60">
            Everything you need to know about our ingredients, roasting process, and delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/40 shadow-xs"
                    : "bg-card/70 border-border/80 hover:border-border"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-foreground text-sm sm:text-base focus:outline-none"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-primary text-card"
                        : "bg-muted text-foreground/70"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Content */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-foreground/75 leading-relaxed border-t border-border/40 mt-1 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Footer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-muted border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Still have questions?
              </h4>
              <p className="text-xs text-foreground/60 mt-0.5">
                We're here to help! Get in touch with our friendly support team.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-primary text-card text-xs font-semibold hover:bg-primary-hover transition-colors shadow-xs active:scale-95"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </section>
  );
}