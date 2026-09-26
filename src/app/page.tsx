import TrustBar from "@/components/sections/TrustBar";
import Hero from "@/components/sections/Hero";
import FarmToYou from "@/components/sections/FarmToYou";
import RecognizedBy from "@/components/sections/RecognizedBy";
import WhyMakhana from "@/components/sections/WhyMakhana";
import ProductsSection from "@/components/sections/ProductsSection";
import OurStorySection from "@/components/sections/OurStorySection";
import FaqSection from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <FarmToYou/>
      <WhyMakhana/>
      <RecognizedBy/>
      <ProductsSection/>
      <OurStorySection/>
      <FaqSection/>
    </main>
  );
}
