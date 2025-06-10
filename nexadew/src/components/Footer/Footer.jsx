import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
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