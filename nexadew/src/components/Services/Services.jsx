import React from "react";
import Card from "../Card/Card";
import { FaCode, FaMobileAlt, FaFigma } from "react-icons/fa";

function Services() {
  return (
    <section className="py-24 px-4 text-center bg-black">
      <h2 className="font-[Geist,sans-serif] text-[36px] font-bold leading-[40px] text-[rgb(255,255,255)] mb-8">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Card
          variant="service"
          icon={<FaCode />}
          title={
            <p className="font-[Geist,sans-serif] text-[20px] font-bold leading-[28px] text-[rgb(255,255,255)]">
              Front-end Web Development
            </p>
          }
          text={
            <p className="font-[Geist,sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(156,163,175)]">
              React.js, Tailwind-css and more.
            </p>
          }
        />
        <Card
          variant="service"
          icon={<FaMobileAlt />}
          title={
            <p className="font-[Geist,sans-serif] text-[20px] font-bold leading-[28px] text-[rgb(255,255,255)]">
              Mobile Apps
            </p>
          }
          text={
            <p className="font-[Geist,sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(156,163,175)]">
              Cross-platform apps using React Native.
            </p>
          }
        />
        <Card
          variant="service"
          icon={<FaFigma />}
          title={
            <p className="font-[Geist,sans-serif] text-[20px] font-bold leading-[28px] text-[rgb(255,255,255)]">
              Figma To React.js
            </p>
          }
          text={
            <p className="font-[Geist,sans-serif] text-[16px] font-normal leading-[24px] text-[rgb(156,163,175)]">
              Conversion of Figma designs into React in 7 days.
            </p>
          }
        />
      </div>
    </section>
  );
}

export default Services;
