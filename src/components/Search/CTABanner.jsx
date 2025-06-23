import React from "react";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <>
      {/* CTA Banner */}
      <section className="container mx-auto rounded-2xl px-4 py-12 text-center text-white my-10"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #5865F2 0%, #7E88F4 100%)'
      }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-medium md:text-5xl">
          Hire best-in-class freelance talent
          </h2>
          <Link
            href="/join"
            className="inline-flex rounded-md text-xs font-inter bg-white px-6 py-2 font-medium text-[#6366F1] hover:bg-white/90 transition-colors"
          >
            Join now
          </Link>
        </div>
      </section>
    </>
  );
}
