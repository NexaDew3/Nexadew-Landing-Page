import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const mockLogoClick = jest.fn();
  const mockServicesClick = jest.fn();
  const mockProjectsClick = jest.fn();
  const mockContactClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setup = () => {
    render(
      <Navbar
        onLogoClick={mockLogoClick}
        onServicesClick={mockServicesClick}
        onProjectsClick={mockProjectsClick}
        onContactClick={mockContactClick}
      />
    );
  };

  test("renders logo and handles click", () => {
    setup();
    const logo = screen.getByText("NexaDew");
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);
    expect(mockLogoClick).toHaveBeenCalled();
  });

  test("renders desktop nav links", () => {
    setup();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("desktop nav links call callbacks", () => {
    setup();

    fireEvent.click(screen.getByText("Home"));
    expect(mockLogoClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Services"));
    expect(mockServicesClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Projects"));
    expect(mockProjectsClick).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Contact"));
    expect(mockContactClick).toHaveBeenCalled();
  });

  test("toggles mobile menu", () => {
    setup();
    const toggleButton = screen.getByRole("button", {
      name: /toggle mobile menu/i,
    });
    fireEvent.click(toggleButton);
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
    expect(within(mobileMenu).getByText("Home")).toBeInTheDocument();
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
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Services")
    );
    expect(mockServicesClick).toHaveBeenCalled();
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Projects")
    );
    expect(mockProjectsClick).toHaveBeenCalled();
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(toggleButton); // reopen
    fireEvent.click(
      within(screen.getByTestId("mobile-menu")).getByText("Contact")
    );
    expect(mockContactClick).toHaveBeenCalled();
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
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
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
