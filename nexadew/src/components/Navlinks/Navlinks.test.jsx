import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navlinks from "./Navlinks";

describe("Navlinks Component", () => {
  const mockHomeClick = jest.fn();
  const mockServicesClick = jest.fn();
  const mockProjectsClick = jest.fn();
  const mockContactClick = jest.fn();

  const setup = (isMobile = false) => {
    render(
      <Navlinks
        onHomeClick={mockHomeClick}
        onServicesClick={mockServicesClick}
        onProjectsClick={mockProjectsClick}
        onContactClick={mockContactClick}
        isMobile={isMobile}
      />,
    );
  };

  test("renders all nav links", () => {
    setup();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("calls correct callbacks on click", () => {
    setup();
    fireEvent.click(screen.getByText("Home"));
    expect(mockHomeClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Services"));
    expect(mockServicesClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Projects"));
    expect(mockProjectsClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Contact"));
    expect(mockContactClick).toHaveBeenCalled();
  });

  test("applies mobile layout classes when isMobile is true", () => {
    const { container } = render(
      <Navlinks
        onHomeClick={mockHomeClick}
        onServicesClick={mockServicesClick}
        onProjectsClick={mockProjectsClick}
        onContactClick={mockContactClick}
        isMobile={true}
      />,
    );

    const ul = container.querySelector("ul");
    expect(ul.className).toMatch(/flex-col/);
    expect(ul.className).toMatch(/space-y-4/);
  });

  test("applies desktop layout classes when isMobile is false", () => {
    const { container } = render(
      <Navlinks
        onHomeClick={mockHomeClick}
        onServicesClick={mockServicesClick}
        onProjectsClick={mockProjectsClick}
        onContactClick={mockContactClick}
        isMobile={false}
      />,
    );

    const ul = container.querySelector("ul");
    expect(ul.className).toMatch(/flex-row/);
    expect(ul.className).toMatch(/space-x-8/);
  });
});
