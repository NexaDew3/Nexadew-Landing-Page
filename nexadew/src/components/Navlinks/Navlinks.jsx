import React from "react";

function Navlinks({
  onHomeClick,
  onServicesClick,
  onProjectsClick,
  onContactClick,
  isMobile,
}) {
  const baseClass = "cursor-pointer hover:underline";

  return (
    <ul
      className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row space-x-8"}`}
    >
      <li onClick={onHomeClick} className={baseClass}>
        Home
      </li>
      <li onClick={onServicesClick} className={baseClass}>
        Services
      </li>
      <li onClick={onProjectsClick} className={baseClass}>
        Projects
      </li>
      <li onClick={onContactClick} className={baseClass}>
        Contact
      </li>
    </ul>
  );
}

export default Navlinks;
