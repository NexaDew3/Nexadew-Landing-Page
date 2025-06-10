import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  test("renders company name", () => {
    render(<Footer />);
    expect(screen.getByText(/NexaDew/i)).toBeInTheDocument();
  });

  test("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 NexaDew. All rights reserved./i)).toBeInTheDocument();
  });
});
