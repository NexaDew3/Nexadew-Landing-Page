import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
        <div data-testid="brand" className="text-xl font-bold">
          <span>Nexa</span>
          <span className="text-white">Dew</span>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 NexaDew. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
