import React from 'react';
import { ShoppingBag, Flame, Leaf, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full font-sans">
      {/* Top Hero Container */}
      <div className="bg-background pt-6 pb-0 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
          
          {/* Left Column (Text Content) */}
          <div className="flex flex-col justify-center max-md:items-center max-md:text-center  relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase text-foreground leading-tight tracking-tight">
              OUR CUSTOMERS' MOST<br />LOVED SNACK PICKS
            </h1>
            <p className="text-foreground/80 mt-4 max-w-md text-base">
              Tried and approved by thousands of health-conscious snack lovers who value great taste, real ingredients, and feel-good nutrition.
            </p>
            
            <div className="flex items-center gap-4 mt-8">
              <button className="bg-secondary hover:bg-secondary-hover text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all">
                <ShoppingBag size={20} />
                Online Shop
              </button>
              <button className="text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-1">
                Get Info <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          
          {/* Right Column (Product Visuals Container) */}
          <div className="relative flex justify-center items-end min-h-105 lg:min-h-125">
            {/* Main Packet */}
            <img 
              src="/hero_packet.png" 
              alt="LotusBite Packet" 
              className="w-full max-w-65 sm:max-w-95 lg:max-w-110 max-h-140 object-contain relative z-0 pt-10 transform rotate-[6deg] drop-shadow-2xl translate-y-8 md:translate-y-16 lg:translate-y-20 transition-transform hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
