import React from "react";

function Card({ variant, title, subtitle, text, icon }) {
  const baseClasses =
    "bg-[#0D0F1A] text-white rounded-xl p-6 shadow-md transition-transform hover:scale-105";

  if (variant === "about") {
    return (
      <div className={`${baseClasses} text-center max-w-3xl mx-auto`}>
        <p className="text-gray-300">{text}</p>
      </div>
    );
  }

  if (variant === "service") {
    return (
      <div
        className={`${baseClasses} w-full h-full flex flex-col justify-between border border-[#1F1F1F]`}
      >
        <div>
          <div className="bg-[#1F1F1F] p-3 inline-flex justify-center items-center rounded-md mb-4 text-orange-500 text-2xl w-12 h-12">
            {icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    );
  }

  if (variant === "project") {
    return (
      <div className={`${baseClasses} w-full`}>
        <div className="grid grid-cols-2 bg-[#1D2233] text-white font-bold uppercase px-6 py-2 rounded-t-xl text-sm">
          <div>{title}</div>
          <div className="text-right">{subtitle}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{text}</h3>
          <p className="text-gray-400 mt-1">
            We converted this pixel-perfect Figma design into a responsive React
            app using Tailwind CSS.
          </p>
          <div className="mt-4 flex gap-4 text-orange-500 font-semibold text-sm">
            <a target="_blank" rel="noopener noreferrer" href="#">
              View Live →
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              View Code →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Card;
