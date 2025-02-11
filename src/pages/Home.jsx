import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import CategoryCards from "../components/CategoryCards";
import ServiceCards from "../components/ServiceCards";
import WorkGameSection from "../components/Home/WorkGameSection";
import PremiumSection from "../components/Home/PremiumSection";
import WhyBusinesses from "../components/Home/WhyBusinesses";
import GuidesSection from "../components/Home/GuidesSection";
import LogoMaker from "../components/Home/LogoMaker";
import FindWork from "../components/Home/FindWork";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      {/* Hero Section start*/}

      <HomeBanner />

      {/* Category card Section */}

      <CategoryCards />

      {/* Service card Section */}

      <ServiceCards />

      {/* Work Game Section */}
      <WorkGameSection />

      {/* Premium Section */}
      <PremiumSection />

      {/* Premium Section */}
      <WhyBusinesses />

      {/* LogoMaker Section */}
      <LogoMaker />

      {/* GuidesSection Section */}
      <FindWork />

      {/* GuidesSection Section */}
      <GuidesSection />

      {/* ctabanner Section */}
      <CTABanner />
    
    </>
  );
}
