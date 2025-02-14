import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      {/* CTA Banner */}
      <section className="container mx-auto rounded-2xl px-4  text-gray-900 my-10 hidden md:block  "
      style={{
        background: 'linear-gradient(92.85deg, #D9DDE6 0.15%, #A5BEFF 99.85%)'
      }}
      >
        <div className="grid grid-cols-2 items-center p-8">
          <h2 className="text-4xl md:text-5xl">
          Work with vetted, <br /> trusted freelance talent 
                     </h2>
          
         
         <div className="text-sm">
<p>Our industry experts evaluate every DreamHire Pro freelancer before. </p>
<p>they are accepted and continue to hold them to the highest. </p>
<p>standards during their activity on DreamHire Pro. </p>
<br />
<p>When working with DreamHire Pro freelance talent, you can expect vast. </p>
<p>experience, creativity, top communication and customer service.  </p>
<p>skills, and the flexibility to take on long-term engagements.</p>

         </div>
          
        </div>
      </section>
    </>
  );
}
