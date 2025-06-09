import React from "react";
import Card from "../Card/Card";
import { FaCode, FaMobileAlt, FaFigma } from "react-icons/fa";

function Services() {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Card
          variant="service"
          icon={<FaCode />}
          title="Front-end Web Development"
          text="React.js, Tailwind-css and more."
        />
        <Card
          variant="service"
          icon={<FaMobileAlt />}
          title="Mobile Apps"
          text="Cross-platform apps using React Native."
        />
        <Card
          variant="service"
          icon={<FaFigma />}
          title="Figma To React.js"
          text="Conversion of Figma designs into React in 7 days."
        />
      </div>
    </section>
  );
}

export default Services;
