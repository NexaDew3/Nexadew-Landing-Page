import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders with default props", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with an icon if provided", () => {
    render(
      <Button
        label="With Icon"
        onClick={() => {}}
        icon="https://example.com/icon.svg"
      />,
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("src", "https://example.com/icon.svg");
  });
});
