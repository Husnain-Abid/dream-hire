import React from "react";
import ServiceCategories from "../components/Search/ServiceCategories";
import BusinessBenefits from "../components/Search/BusinessBenefits";
import BusinessRewards from "../components/Search/BusinessRewards";
import ExpertGuidance from "../components/Search/ExpertGuidance";
import TestimonialsAndFaqs from "../components/Search/TestimonialsAndFaqs";
import WhyUpgrade from "../components/Search/WhyUpgrade";
import SearchHero from "../components/Search/SearchHero";
import Banner from "../components/Search/Banner";
import BannerImage from "../components/Search/BannerImage";
import CTABanner from "../components/Search/CTABanner";

export default function Search() {
  return (
    <>
      {/* Hero Section start*/}

      <SearchHero />

      <ServiceCategories />

      <BusinessBenefits />

      <WhyUpgrade />

      <Banner />

      <BusinessRewards />

      <ExpertGuidance />

      <BannerImage />

      <TestimonialsAndFaqs />

      <CTABanner />
    </>
  );
}
