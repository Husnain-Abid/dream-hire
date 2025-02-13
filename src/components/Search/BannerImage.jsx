import React from "react";
import img from "../../asset/images/search-page/bg-image.png";

export default function BannerImage() {
  return (
    <section
      className="container mx-auto rounded-2xl p-8 flex justify-center bg-[#131315] my-10"
      
    >

    <img src={img} alt="img" />

    </section>
  );
}
