import React from "react";
import Button from "../Button/Button";
import Firebase_Logo from '../../assets/Firebase_Logo.png';
import ReactNative_Logo from '../../assets/ReactNative_Logo.png';
import ReactJs_Logo from '../../assets/ReactJs_Logo.png';
import Vercel_Logo from '../../assets/Vercel_Logo.png';
import Vite_Logo from '../../assets/Vite_Logo.png';
import NextJs_Logo from '../../assets/NextJs_Logo.png';
import NodeJs_Logo from '../../assets/NodeJs_Logo.png';
function Home() {
  return (
    <>
      <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center relative px-4 pb-10">
        {/* Hero Content */}
        <div className="z-10 max-w-l flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[60px] mb-4">
            We Build Modern Front-
            <br />
            end Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6">
            Custom Web, Mobile for Startups & Businesses
          </p>

         <Button
  label="Get a Free Quote"
  bgColor="bg-white"
  textColor="text-black"
  width="w-auto"
  height="h-12"
  borderRadius="rounded-md"
  hoverStyles="hover:bg-gray-200"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
        </div>
        <hr className="border-t-2 border-grey-400"></hr>

        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#5b1d00] opacity-80 pointer-events-none"></div>

        {/* Trusted Logos Section */}
       {/* Trusted Logos Section */}
<div className="absolute bottom-12 w-full flex flex-col items-center z-10 px-4">
  <p className="text-lg sm:text-lg text-gray-300 mb-4 max-w-xs sm:max-w-md text-center py-4">
    Software used to deliver appropriate solution to client
  </p>
  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10">
    {[Firebase_Logo, ReactNative_Logo, ReactJs_Logo, Vercel_Logo, Vite_Logo, NextJs_Logo,NodeJs_Logo].map((logo, index) => (
      <div
        key={index}
        data-testid="trusted-logo"
        className="w-12 h-12 sm:w-16 sm:h-16"
      >
        <img
          src={logo}
          alt={`Logo ${index + 1}`}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    ))}
  </div>
</div>

      </section>
    </>
  );
}

export default Home;
