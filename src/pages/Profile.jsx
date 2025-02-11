import React from "react";
import MyGigs from "../components/Profile/MyGigs";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ReviewStats from "../components/Profile/ReviewStats";
import ReviewSection from "../components/Profile/ReviewSection";

export default function Profile() {
  return (
    <>
      <ProfileHeader />

      <MyGigs />

      <ReviewStats />
      <ReviewSection />



      
    </>
  );
}
