import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "./Services";
import "@testing-library/jest-dom";

describe("Services Component", () => {
  test("renders the heading correctly", () => {
    render(<Services />);
    const heading = screen.getByRole("heading", { name: /Our Services/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all 3 service cards", () => {
    render(<Services />);
    const cards = screen.getAllByText(/React/i); // loosely targets common text
    expect(cards.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText(/Front-end Web Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Apps/i)).toBeInTheDocument();
    expect(screen.getByText(/Figma To React.js/i)).toBeInTheDocument();
  });

  test("displays correct descriptions for each service", () => {
    render(<Services />);
    expect(
      screen.getByText(/React\.js, Tailwind-css and more/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Cross-platform apps using React Native/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Conversion of Figma designs into React in 7 days/i),
    ).toBeInTheDocument();
  });
});
