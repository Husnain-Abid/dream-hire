import React from "react";
import BuyerStories from "../components/Seller/BuyerStories";
import HowItWorksSteps from "../components/Seller/HowItWorksSteps";
import SellerHero from "../components/Seller/SellerHero";
import FreelanceCommunity from "../components/Seller/FreelanceCommunity";
import QASection from "../components/Seller/QASection";

export default function Seller() {
  return (
    <>
      <SellerHero />

      <FreelanceCommunity />

      <HowItWorksSteps />

      <BuyerStories />

      <QASection />

    </>
  );
}
