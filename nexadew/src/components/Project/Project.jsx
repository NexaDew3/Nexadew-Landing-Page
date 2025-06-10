import React from "react";

function Projects() {
  return (
    <section className="py-12 px-4 bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Work</h2>

      <div className="flex flex-col gap-8 items-center w-full ">
        {/* Card 1 */}
        <div className="w-full rounded-md overflow-hidden shadow-lg bg-[#0D0F1A] border border-gray-800">
          {/* Top Bar */}
          <div className="grid grid-cols-2 bg-[#161B23] text-white text-left">
            <div className="px-6 py-3 border-r border-gray-700">
              <h3 className="text-lg font-bold uppercase">Blog Page Design</h3>
            </div>
            <div className="px-6 py-3 text-right">
              <span className="text-lg font-bold uppercase">React App</span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 text-left">
            <h4 className="text-xl font-bold mb-2 text-white">Blog Page</h4>
            <p className="text-gray-400 mb-4">
              We converted this pixel-perfect Figma design into a responsive React app using Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
                View Live →
              </a>
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
                View Code →
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full rounded-md overflow-hidden shadow-lg bg-[#0D0F1A] border border-gray-800">
          {/* Top Bar */}
          <div className="grid grid-cols-2 bg-[#161B23] text-white text-left">
            <div className="px-6 py-3 border-r border-gray-700">
              <h3 className="text-lg font-bold uppercase">Payment Infrastructure Design</h3>
            </div>
            <div className="px-6 py-3 text-right">
              <span className="text-lg font-bold uppercase">React App</span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 text-left">
            <h4 className="text-xl font-bold mb-2 text-white">Payment Infrastructure</h4>
            <p className="text-gray-400 mb-4">
              We converted this pixel-perfect Figma design into a responsive React app using Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
                View Live →
              </a>
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
                View Code →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
