import React from "react";
import ServiceListing from "../components/Gig/ServiceListing";
import FreelancerProfile from "../components/Gig/FreelancerProfile";
import ClientsSection from "../components/Gig/ClientsSection";
import OrderDetails from "../components/Gig/OrderDetails";
import Recommended from "../components/Gig/Recommended";
import FAQSection from "../components/Gig/FAQSection";
import ReviewStats from "../components/Gig/ReviewStats";
import ReviewSection from "../components/Gig/ReviewSection";

export default function Gig() {
  return (
    <>
      <div className="p-4">
        
        <ServiceListing />

        <FreelancerProfile />

        <ClientsSection />

        <OrderDetails />

        <Recommended />

        <FAQSection />

        <ReviewStats />

        <ReviewSection />

      </div>
    </>
  );
}
