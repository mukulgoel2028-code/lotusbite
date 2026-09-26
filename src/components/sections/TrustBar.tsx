import { ShieldCheck, Truck, Leaf, Star, Flame, Heart } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Flame className="text-primary" size={24} />,
      title: "Rich & Fruity",
      subtitle: "Roasted, never fried.",
    },
    {
      icon: <Leaf className="text-primary" size={24} />,
      title: "High Protein",
      subtitle: "Non-GMO & Vegan.",
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Guilt-Free Goodness",
      subtitle: "Crafted clean.",
    },
  ];

  return (
    <section className="bg-primary text-white relative z-10 pt-8 pb-8 px-6 mb-3 lg:mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-sm:justify-center">
          {trustItems.map((i,n) => (
            <div key={n} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                {i.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg text-white">{i.title}</h3>
                <p className="text-xs text-white/90">{i.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
