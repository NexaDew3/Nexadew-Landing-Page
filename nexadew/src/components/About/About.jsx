import React from "react";
import Card from "../Card/Card";

function AboutUs() {
  return (
    <section className="py-12 px-4 text-center bg-black">
      <h2 className="font-[Geist,sans-serif] text-[36px] font-bold leading-[40px] text-white mb-6">
        About Us
      </h2>
      <Card
        variant="about"
        text="We specialize in transforming modern UI/UX designs into high-performance, pixel-perfect front-end applications. From Figma to functional React code, we deliver responsive, production-ready interfaces in record time."
      />
    </section>
  );
}

export default AboutUs;
