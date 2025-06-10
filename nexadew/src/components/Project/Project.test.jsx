// src/components/Projects/Projects.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Project";

describe("Projects Component", () => {
  test("renders Projects header", () => {
    render(<Projects />);
    const headerElement = screen.getByText(/Our Work/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders project cards", () => {
    render(<Projects />);

    // Test first card title
    expect(screen.getByText("Blog Page Design")).toBeInTheDocument();

    // Test second card title
    expect(
      screen.getByText("Payment Infrastructure Design"),
    ).toBeInTheDocument();
  });
});
