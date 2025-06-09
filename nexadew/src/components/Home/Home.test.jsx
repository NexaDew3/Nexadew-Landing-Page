import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders heading with correct text", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /We Build Modern Front- end Solutions/i, // single space between Front- and end
      }),
    ).toBeInTheDocument();
  });

  test("renders paragraph with correct text", () => {
    render(<Home />);
    expect(
      screen.getByText(/Custom Web, Mobile for Startups & Businesses/i),
    ).toBeInTheDocument();
  });

  test("renders 'Get a Free Quote' button and triggers alert on click", () => {
    window.alert = jest.fn();

    render(<Home />);
    const button = screen.getByRole("button", { name: /Get a Free Quote/i });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Free Quote requested");
  });

  test("renders 6 trusted logo placeholders", () => {
    render(<Home />);
    const logos = screen.getAllByTestId("trusted-logo");
    expect(logos.length).toBe(6);
  });
});
