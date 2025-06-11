import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

// Mock images
jest.mock("../../assets/Firebase_Logo.png", () => "firebase_logo.png");
jest.mock("../../assets/ReactNative_Logo.png", () => "reactnative_logo.png");
jest.mock("../../assets/ReactJs_Logo.png", () => "reactjs_logo.png");
jest.mock("../../assets/Vercel_Logo.png", () => "vercel_logo.png");
jest.mock("../../assets/Vite_Logo.png", () => "vite_logo.png");
jest.mock("../../assets/NextJs_Logo.png", () => "nextjs_logo.png");
jest.mock("../../assets/NodeJs_Logo.png", () => "nodejs_logo.png");

describe("Home Component", () => {
  beforeEach(() => {
    // Setup a fake contact section in the DOM
    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";
    document.body.appendChild(contactDiv);
  });

  afterEach(() => {
    // Clean up DOM
    const contactDiv = document.getElementById("contact");
    if (contactDiv) {
      contactDiv.remove();
    }
  });

  it("renders heading and button", () => {
    render(<Home />);
    expect(
      screen.getByText(/We Build Modern Front-end Solutions/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Get a Free Quote/i)).toBeInTheDocument();
  });

  it("renders all trusted logos", () => {
    render(<Home />);
    const logos = screen.getAllByTestId("trusted-logo");
    expect(logos.length).toBe(7);
  });

  it("scrolls to contact section when button is clicked", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /Get a Free Quote/i });
    const contact = document.getElementById("contact");
    const scrollIntoViewMock = jest.fn();
    contact.scrollIntoView = scrollIntoViewMock;

    fireEvent.click(button);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does not throw if contact section is not found", () => {
    // Remove contact section safely
    const contact = document.getElementById("contact");
    if (contact && contact.parentNode) {
      contact.parentNode.removeChild(contact);
    }

    render(<Home />);
    const button = screen.getByRole("button", { name: /Get a Free Quote/i });
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
