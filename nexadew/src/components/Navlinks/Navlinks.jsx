import React from "react";

function Navlinks({
  onHomeClick,
  onServicesClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <ul className="flex gap-12 text-lg font-medium text-gray-700">
      <li>
        <button
          onClick={onHomeClick}
          className="hover:text-blue-600 transition"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={onServicesClick}
          className="hover:text-blue-600 transition"
        >
          Services
        </button>
      </li>
      <li>
        <button
          onClick={onProjectsClick}
          className="hover:text-blue-600 transition"
        >
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={onContactClick}
          className="hover:text-blue-600 transition"
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

export default Navlinks;
