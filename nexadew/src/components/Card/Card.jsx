import React from "react";

function Card({ variant, title, subtitle, text, icon ,liveLink, codeLink }) {
  const baseClasses =
    "bg-[#0D0F1A] text-white rounded-xl border border-gray-800 p-0 shadow-md overflow-hidden";

  if (variant === "about") {
    return (
      <div className={`${baseClasses} text-left max-w-3xl mx-auto py-10 px-4`}>
        <p
          className="text-[18px] font-normal leading-[28px] text-[rgb(209,213,219)]"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {text}
        </p>
      </div>
    );
  }

  if (variant === "service") {
    return (
      <div className={`${baseClasses} w-full sm:w-[430px] text-left gap-2 p-8`}>
        <div className="bg-[#1F1F1F] p-3 inline-block rounded-md mb-4 text-orange-500 text-2xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 mt-1">{text}</p>
      </div>
    );
  }

 if (variant === "project") {
    const isPayment = title === "Payment Infrastructure Design";

    return (
      <div className="rounded-lg overflow-hidden w-full shadow-lg ">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row h-20 ">
          {/* Left (Title) */}
          <div
            className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-bold uppercase text-white ${
              isPayment ? "bg-[#1A1F29]" : "bg-[#12141B]"
            }`}
          >
            {title}
          </div>

          {/* Right (Subtitle) */}
          <div
            className={`flex-1 flex items-center justify-center px-8 py-3 text-sm font-bold uppercase text-white ${
              isPayment ? "bg-[#12141B]" : "bg-[#1A1F29]"
            }`}
          >
            {subtitle}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-left bg-[#0D0F1A]">
          <h3 className="text-xl font-semibold text-white">{text}</h3>
          <p className="text-gray-400 mt-1">
            We converted this pixel-perfect Figma design into a responsive React
            app using Tailwind CSS.
          </p>
          <div className="mt-4 flex gap-4 text-orange-500 font-semibold text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={liveLink || "#"}
            >
              View Live →
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={codeLink || "#"}
            >
              View Code →
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null; // or some fallback UI
}

export default Card;
