import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders NexaDew brand name", () => {
    render(<Footer />);
    const brand = screen.getByTestId("brand");
    expect(brand).toHaveTextContent("Nexa");
    expect(brand).toHaveTextContent("Dew");
  });

  test("displays copyright", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2025 NexaDew. All rights reserved./i),
    ).toBeInTheDocument();
  });
});
