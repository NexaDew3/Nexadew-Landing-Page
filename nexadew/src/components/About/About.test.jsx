import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./About";

describe("AboutUs component", () => {
  test("renders heading", () => {
    render(<AboutUs />);
    const heading = screen.getByText("About Us");
    expect(heading).toBeInTheDocument();
  });

  test("renders about text", () => {
    render(<AboutUs />);
    const aboutText = screen.getByText(
      /We specialize in transforming modern UI\/UX designs/i,
    );
    expect(aboutText).toBeInTheDocument();
  });
});
