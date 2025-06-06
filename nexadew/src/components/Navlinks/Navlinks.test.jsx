import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navlinks from "./Navlinks";

describe("Navlinks Component", () => {
  test("renders all nav buttons", () => {
    render(
      <Navlinks
        onHomeClick={() => {}}
        onServicesClick={() => {}}
        onProjectsClick={() => {}}
        onContactClick={() => {}}
      />,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("click events are called correctly", () => {
    const homeClick = jest.fn();
    const servicesClick = jest.fn();
    const projectsClick = jest.fn();
    const contactClick = jest.fn();

    render(
      <Navlinks
        onHomeClick={homeClick}
        onServicesClick={servicesClick}
        onProjectsClick={projectsClick}
        onContactClick={contactClick}
      />,
    );

    fireEvent.click(screen.getByText("Home"));
    fireEvent.click(screen.getByText("Services"));
    fireEvent.click(screen.getByText("Projects"));
    fireEvent.click(screen.getByText("Contact"));

    expect(homeClick).toHaveBeenCalled();
    expect(servicesClick).toHaveBeenCalled();
    expect(projectsClick).toHaveBeenCalled();
    expect(contactClick).toHaveBeenCalled();
  });
});
