import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const mockLogoClick = jest.fn();
  const mockServicesClick = jest.fn();
  const mockProjectsClick = jest.fn();
  const mockContactClick = jest.fn();

  const setup = () => {
    render(
      <Navbar
        onLogoClick={mockLogoClick}
        onServicesClick={mockServicesClick}
        onProjectsClick={mockProjectsClick}
        onContactClick={mockContactClick}
      />,
    );
  };

  test("renders logo and handles click", () => {
    setup();
    const logo = screen.getByText("NexaDew");
    fireEvent.click(logo);
    expect(mockLogoClick).toHaveBeenCalled();
  });

  test("toggles mobile menu", () => {
    setup();
    const toggleButton = screen.getByRole("button", {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(toggleButton);

    const mobileMenu = screen.getByTestId("mobile-menu");
    const homeLink = within(mobileMenu).getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("mobile menu nav links call callbacks and close menu", () => {
    setup();
    const toggleButton = screen.getByRole("button", {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(toggleButton);

    const mobileMenu = screen.getByTestId("mobile-menu");

    fireEvent.click(within(mobileMenu).getByText("Home"));
    expect(mockLogoClick).toHaveBeenCalled();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Services"),
    );
    expect(mockServicesClick).toHaveBeenCalled();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Projects"),
    );
    expect(mockProjectsClick).toHaveBeenCalled();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Contact"),
    );
    expect(mockContactClick).toHaveBeenCalled();
  });

  test("mobile quote button triggers alert and closes menu", () => {
    window.alert = jest.fn(); // mock alert
    setup();
    const toggleButton = screen.getByRole("button", {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(toggleButton);

    const mobileMenu = screen.getByTestId("mobile-menu");
    const quoteBtn = within(mobileMenu).getByText("Get a Quote");
    fireEvent.click(quoteBtn);

    expect(window.alert).toHaveBeenCalledWith("Quote requested");
  });
});
