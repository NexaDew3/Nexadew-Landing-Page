// src/components/Services.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "./Services";

describe("Services component", () => {
  test("renders Services heading", () => {
    render(<Services />);
    const headingElement = screen.getByText(/Our Services/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders all service cards", () => {
    render(<Services />);

    expect(screen.getByText(/Front-end Web Development/i)).toBeInTheDocument();

    expect(screen.getByText(/Mobile Apps/i)).toBeInTheDocument();

    expect(screen.getByText(/Figma To React.js/i)).toBeInTheDocument();
  });
});
