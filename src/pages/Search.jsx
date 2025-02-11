import React from "react";
import CategoryHero from "../components/Category/CategoryHero";
import ServiceCategories from "../components/Search/ServiceCategories";
import BusinessBenefits from "../components/Search/BusinessBenefits";
import BusinessRewards from "../components/Search/BusinessRewards";
import ExpertGuidance from "../components/Search/ExpertGuidance";
import TestimonialsAndFaqs from "../components/Search/TestimonialsAndFaqs";
import WhyUpgrade from "../components/Search/WhyUpgrade";

export default function Search() {
  return (
    <>
      {/* Hero Section start*/}

      <CategoryHero />

      <ServiceCategories />

      <BusinessBenefits />

      <WhyUpgrade />

      <BusinessRewards />

      <ExpertGuidance />

      <TestimonialsAndFaqs />

    </>
  );
}
