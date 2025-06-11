// Contact.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";

jest.mock("../../assets/logo.png", () => "logo.png");

describe("Contact Component", () => {
  test("renders heading and contact info", () => {
    render(<Contact />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Nexadew")).toBeInTheDocument();
    expect(screen.getByText("📞 +91 9900502164")).toBeInTheDocument();
    expect(screen.getByText("📧 hello@nexadew.com")).toBeInTheDocument();
  });

  test("fills form and triggers submit", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Test message" },
    });

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1234567890")).toBeInTheDocument();
  });
});
