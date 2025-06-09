import React from "react";
import Button from "../Button/Button";

function Home() {
  return (
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
          onClick={() => alert("Free Quote requested")}
        />
      </div>
      <hr className="border-t-2 border-grey-400"></hr>

      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#5b1d00] opacity-80 pointer-events-none"></div>

      {/* Trusted Logos Section */}
      <div className="absolute bottom-12 w-full flex flex-col items-center z-10 px-4">
        <p className="text-xs sm:text-sm text-gray-400 mb-4 max-w-xs sm:max-w-md text-center">
          Software used to deliver appropriate solution to client
        </p>
        <div className="flex gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              data-testid="trusted-logo"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
