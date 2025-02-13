import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />

      {/* Main Content Area with Scrollable Section */}
      <div className="font-ppneuemontreal">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
