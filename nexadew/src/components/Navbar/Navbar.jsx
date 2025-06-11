import React, { useState } from "react";
import Button from "../Button/Button";
import Navlinks from "../Navlinks/Navlinks";

function Navbar({
  onLogoClick,
  onServicesClick,
  onProjectsClick,
  onContactClick,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-black text-white fixed top-0 left-0 w-full z-50 px-4 py-4"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-white text-2xl font-extrabold cursor-pointer"
          onClick={onLogoClick}
        >
          NexaDew
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <Navlinks
            onHomeClick={onLogoClick}
            onServicesClick={onServicesClick}
            onProjectsClick={onProjectsClick}
            onContactClick={onContactClick}
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
            label="Get a Quote"
            bgColor="bg-transparent"
            textColor="text-white"
            border="border border-white"
            width="w-auto"
            height="h-10"
            borderRadius="rounded-md"
            hoverStyles="hover:bg-[#1F2937] hover:text-white"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden mt-4 space-y-4 px-4 flex flex-col bg-black"
          data-testid="mobile-menu"
        >
          <Navlinks
            isMobile
            onHomeClick={() => {
              onLogoClick();
              setIsMobileMenuOpen(false);
            }}
            onServicesClick={() => {
              onServicesClick();
              setIsMobileMenuOpen(false);
            }}
            onProjectsClick={() => {
              onProjectsClick();
              setIsMobileMenuOpen(false);
            }}
            onContactClick={() => {
              onContactClick();
              setIsMobileMenuOpen(false);
            }}
          />
          <Button
            label="Get a Quote"
            bgColor="bg-white"
            textColor="text-black"
            width="w-full"
            height="h-10"
            borderRadius="rounded-md"
            onClick={() => {
              alert("Quote requested");
              setIsMobileMenuOpen(false);
            }}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
