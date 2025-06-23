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
import FindTalent from "../components/Home/FindTalent";
import ServicesSection from "../components/Home/ServicesSection";
import GuaranteeSection from "../components/Home/GuaranteeSection";

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

      {/* Find talent Section */}
      <FindTalent />

      {/* Dream Hire services Section */}
      <ServicesSection />

      {/* Premium Section */}
      <WhyBusinesses />

      {/* LogoMaker Section */}
      <LogoMaker />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* GuidesSection Section */}
      <FindWork />

      {/* GuidesSection Section */}
      <GuidesSection />

      {/* ctabanner Section */}
      <CTABanner />
    </>
  );
}
