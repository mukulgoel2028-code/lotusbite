// "use client";

// import React from "react";
// import Link from "next/link";
// import { Mail } from "lucide-react";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-background pt-12 font-sans overflow-x-hidden">
//       {/* 1. TOP NEWSLETTER CARD SECTION */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="bg-secondary text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 text-center shadow-xs relative overflow-hidden">
//           {/* Headline */}
//           <h3 className="text-xl sm:text-3xl font-extrabold uppercase tracking-wide mb-2">
//             GET 15% OFF YOUR FIRST ORDER
//           </h3>
//           <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto mb-6 sm:mb-8 font-medium">
//             Plus healthy snacking tips, exclusive deals, and early access to new drops.
//           </p>

//           {/* Form Pill */}
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="max-w-md mx-auto relative"
//           >
//             <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm border border-white/20">
//               <input
//                 type="email"
//                 placeholder="Type your email"
//                 className="w-full bg-transparent px-4 py-1 text-foreground placeholder:text-foreground/50 text-xs sm:text-sm focus:outline-none"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-primary hover:bg-primary-hover text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap shadow-2xs"
//               >
//                 Subscribe Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* 2. MAIN FOOTER BODY */}
//       <div className="bg-muted/80 border-t border-border mt-12 sm:mt-16 pt-10 pb-6">
        
//         {/* Navigation Row */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold tracking-widest text-foreground uppercase">
            
//             {/* Left Nav Links */}
//             <div className="flex items-center gap-6 sm:gap-8">
//               <Link href="/shop" className="hover:text-primary transition-colors">
//                 SHOP
//               </Link>
//               <Link href="/about" className="hover:text-primary transition-colors">
//                 ABOUT
//               </Link>
//               <Link href="/contact" className="hover:text-primary transition-colors">
//                 CONTACT
//               </Link>
//             </div>

//             {/* Social Icons (Center) */}
//             <div className="flex items-center gap-3 text-foreground/80">
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
//               >
//                 <FaFacebookF className="w-3.5 h-3.5" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
//               >
//                 <FaInstagram className="w-3.5 h-3.5" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
//               >
//                 <FaLinkedinIn className="w-3.5 h-3.5" />
//               </a>
//             </div>

//             {/* Right Nav Links */}
//             <div className="flex items-center gap-6 sm:gap-8">
//               <Link href="/" className="hover:text-primary transition-colors">
//                 HOME
//               </Link>
//               <Link href="/shop" className="hover:text-primary transition-colors">
//                 SHOP SNACKS
//               </Link>
//               <Link href="/faqs" className="hover:text-primary transition-colors">
//                 FAQS
//               </Link>
//             </div>

//           </div>
//         </div>

//         {/* 3. TALL & CONDENSED EDGE-TO-EDGE BRAND TYPOGRAPHY */}
//         <div className="w-full leading-none select-none my-2 overflow-hidden hover:text-primary">
//           <svg
//             viewBox="0 0 1000 220"
//             className="w-full h-auto block"
//             preserveAspectRatio="none"
//           >
//             <text
//               x="0"
//               y="200"
//               textLength="1000"
//               lengthAdjust="spacingAndGlyphs"
//               className="fill-foreground font-black uppercase "
//               style={{
//                 fontSize: "240px",
//                 fontWeight: 800,
//                 fontFamily: "Impact, 'Arial Narrow', 'Bebas Neue', sans-serif-condensed, sans-serif",
//               }}
//             >
//               LOTUSBITE
//             </text>
//           </svg>
//         </div>

//         {/* 4. BOTTOM LEGAL BAR */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/80 pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/70 font-medium">
//           {/* Copyright */}
//           <p className="text-center sm:text-left">
//             © 2026, LotusBite Snacks. Powered by Next.js
//           </p>

//           {/* Email Pill Badge */}
//           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-foreground text-xs shadow-2xs">
//             <Mail className="w-3.5 h-3.5 text-primary" />
//             <span>hello@lotusbite.com</span>
//           </div>

//           {/* Right Terms & Privacy */}
//           <div className="flex items-center gap-4">
//             <Link href="/terms" className="hover:text-foreground transition-colors">
//               Terms & Regulations
//             </Link>
//             <Link href="/privacy" className="hover:text-foreground transition-colors">
//               Privacy
//             </Link>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight, MailCheck } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const flavors = [
    "Spicy Peri Peri",
    "Sour Cream & Onion",
    "Tangy Tomato",
    "Cheddar Cheese",
    "Salted Caramel",
  ];

  const companyLinks = [
    "About Us",
    "Why Foxnuts?",
    "Sustainability",
    "Quality Promise",
    "Careers",
  ];

  const customerCare = [
    "Track Order",
    "Shipping & Delivery",
    "FAQs",
    "Contact Us",
    "Returns & Refunds",
  ];

  return (
    <footer className="bg-background/80 backdrop-blur-md text-black border-t border-border">
      {/* Section A: Newsletter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-black/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Get 10% Off Your First Munch 🍿
            </h3>
            <p className="text-black/80 text-sm sm:text-base">
              Subscribe for secret flavor drops, exclusive discounts, and snack
              inspiration.
            </p>
          </div>
          <form
            className="w-full max-w-md mx-1 flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-white font-bold px-6 py-3 rounded-r-lg hover:bg-secondary-hover transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
            >
              <MailCheck className="md:hidden" />
              <span className="max-sm:hidden">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Section B: Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Bio */}
          <div className="space-y-6">
            <div className="bg-primary/90 p-3 rounded-xl inline-block">
              <img
                src="/lotus_logo_black.png"
                alt="LotusBite Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-black/80 text-sm leading-relaxed">
              Superfood snacking reimagined. Roasted, flavored, and packed for
              mindful munching.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                {/* TikTok SVG Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.94-5.26 3.02-6.81 1.16-.86 2.58-1.35 4.02-1.45l.02 4.12c-.52.05-1.04.2-1.49.49-.9.56-1.47 1.52-1.46 2.58.01 1.05.62 1.98 1.54 2.5.9.51 1.99.55 2.91.13.79-.35 1.39-1.04 1.61-1.89.14-.52.19-1.06.18-1.59-.03-4.63-.03-9.26-.04-13.88z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Flavors */}
          <div>
            <h4 className="text-secondary font-semibold text-lg mb-6">
              Popular Flavors
            </h4>
            <ul className="space-y-3 border-none">
              {flavors.map((flavor) => (
                <li key={flavor}>
                  <Link
                    href="#"
                    className="text-black/80 hover:text-black hover:pl-2 transition-all duration-200 flex items-center text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {flavor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Story */}
          <div>
            <h4 className="text-secondary font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-black/80 hover:text-black hover:pl-2 transition-all duration-200 flex items-center text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div>
            <h4 className="text-secondary font-semibold text-lg mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-black/80 hover:text-black hover:pl-2 transition-all duration-200 flex items-center text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section C: Bottom Bar */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/60 text-sm text-center md:text-left">
            © 2026 LotusBite. Made with love.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-4 text-sm text-black/60">
              <Link
                href="#"
                className="hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-black transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}