import Footer from "@/components/sections/Footer";
import TitanSeedHero from "@/components/sections/TitanSeedHero";
import WhatWeLookFor from "@/components/sections/WhatWeLookFor";
import WhyTitanSeed from "@/components/sections/WhyTitanSeed";

export default function TitanSeedFundPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <TitanSeedHero />
      <WhyTitanSeed />
      <WhatWeLookFor />
      <Footer />   
      {/* You can add your next sections below here later */}
    </main>
  );
}