import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  test("renders about variant", () => {
    render(<Card variant="about" text="About content" />);
    expect(screen.getByText("About content")).toBeInTheDocument();
  });

  test("renders service variant", () => {
    render(
      <Card
        variant="service"
        title="Service Title"
        text="Service description here."
        icon="🚀"
      />,
    );
    expect(screen.getByText("Service Title")).toBeInTheDocument();
    expect(screen.getByText("Service description here.")).toBeInTheDocument();
    expect(screen.getByText("🚀")).toBeInTheDocument();
  });

  test("renders project variant", () => {
    render(
      <Card
        variant="project"
        title="Project Title"
        subtitle="2025"
        text="Project content"
      />,
    );
    expect(screen.getByText("Project Title")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
    expect(screen.getByText("Project content")).toBeInTheDocument();
    expect(screen.getByText("View Live →")).toBeInTheDocument();
    expect(screen.getByText("View Code →")).toBeInTheDocument();
  });

  test("renders nothing for unknown variant", () => {
    const { container } = render(<Card variant="unknown" />);
    expect(container.firstChild).toBeNull();
  });
});
